import Router from 'koa-router';
import Joi from 'joi';
import { DefaultState, Context } from 'koa';
import { getRepository } from 'typeorm';
import { parseJoiErrors } from '../lib/parseJoiErrors';
import { Wallet } from '../entity/wallet';

const routes = new Router<DefaultState, Context>();

routes
    .post('/api/user/create_wallet', async (ctx, next) => {
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
        console.log(error);
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
    })
    .get('/api/user/get_wallets', async (ctx, next) => {
        const wallets = await Wallet.getRepository()
            .createQueryBuilder('wallet')
            .where('wallet.userId = :id', { id: ctx.state.user.id })
            .orderBy({ id: 'DESC' })
            .getMany();
        ctx.body = {
            success: true,
            wallets: wallets,
        };
    })
    .delete('/api/user/delete_wallets/:walletId', async (ctx, next) => {
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
        await walletRepo.delete(wallet);

        ctx.body = {
            success: true,
        };
    })
    .get('/api/wallets', async (ctx) => {
        const wallets = await Wallet.getRepository().createQueryBuilder('wallet').getMany();

        ctx.body = {
            wallets: wallets,
        };
    });

export default routes;
