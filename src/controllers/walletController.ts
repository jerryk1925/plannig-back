import Joi, { number } from 'joi';
import { getRepository } from 'typeorm';
import { parseJoiErrors } from '../lib/parseJoiErrors';
import { Wallet } from '../entity/wallet';
import { Transaction } from '../entity/transaction';

export const createWallet = async (ctx, next) => {
    const body: { [key: string]: string } = ctx.request.body;
    const schema = Joi.object().keys({
        name: Joi.string()
            .required()
            .error(() => 'Имя обязательное поле'),
        balance: Joi.string()
            .required()
            .error(() => 'Баланс обязательное поле'),
        type: Joi.number()
            .required()
            .error(() => 'Тип обязательное поле'),
    });
    const { error } = Joi.validate(body, schema, { abortEarly: false });
    if (error) {
        ctx.status = 200;
        ctx.body = {
            success: false,
            error: parseJoiErrors(error.details),
        };
    } else {
        const wallets = await Wallet.getRepository()
            .createQueryBuilder('wallet')
            .where('wallet.userId = :id', { id: ctx.state.user.id })
            .getMany();

        if (wallets.length > 2) {
            ctx.status = 200;
            ctx.body = {
                success: false,
                error: {
                    limit: 'У вас сильно много кошельков',
                },
            };
            return;
        }

        const newWallet = {
            user: ctx.state.user,
            ...body,
        };
        let walletEntity = new Wallet();
        Object.assign(walletEntity, newWallet);
        walletEntity = await getRepository(Wallet).save(walletEntity);

        ctx.status = 200;
        ctx.body = {
            success: true,
        };
    }
};

export const getWallets = async (ctx, next) => {
    const wallets = await Wallet.getRepository()
        .createQueryBuilder('wallet')
        .where('wallet.userId = :id', { id: ctx.state.user.id })
        .orderBy({ id: 'DESC' })
        .getMany();
    ctx.body = {
        success: true,
        wallets: wallets,
    };
};

export const deleteWallet = async (ctx, next) => {
    const walletRepo = await Wallet.getRepository();
    const wallet = await walletRepo.findOne(ctx.params.walletId, {
        where: { userId: ctx.state.user.id },
    });

    if (!wallet) {
        ctx.body = {
            error: {
                success: false,
                wallet: 'Нет такого кошелька',
            },
        };
        return;
    }

    await Transaction.getRepository()
        .createQueryBuilder('transaction')
        .delete()
        .from(Transaction)
        .where('walletId = :id', { id: ctx.params.walletId })
        .execute();

    await walletRepo.delete(wallet);

    ctx.body = {
        success: true,
    };
};

export const updateWalletBalance = async (ctx, next) => {
    const body: { [key: string]: string } = ctx.request.body;
    const walletRepo = await Wallet.getRepository();
    const wallet = await walletRepo.findOne(body.walletId, {
        where: { userId: ctx.state.user.id },
    });

    if (!wallet) {
        ctx.body = {
            error: {
                success: false,
                wallet: 'Нет такого кошелька',
            },
        };
        return false;
    }

    let newBalance: number;

    if (body.type === 'income') {
        newBalance = Number(wallet.balance) + Number(body.score);
    } else {
        newBalance = Number(wallet.balance) - Number(body.score);
    }

    if (newBalance < 0) {
        ctx.body = {
            error: {
                success: false,
                wallet: 'У вас недостаточно средств',
            },
        };
        return false;
    }

    await walletRepo
        .createQueryBuilder('wallet')
        .update(Wallet)
        .set({ balance: newBalance.toString() })
        .where('id = :id', { id: body.walletId })
        .execute();

    return true;
};
