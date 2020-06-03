import Router from 'koa-router';
import Joi from 'joi';
import { DefaultState, Context } from 'koa';
import { getRepository } from 'typeorm';
import { parseJoiErrors } from '../lib/parseJoiErrors';
import { Wallet } from '../entity/wallet';
import { Transaction } from '../entity/transaction';

const routes = new Router<DefaultState, Context>();

routes
    .post('/api/user/create_transaction', async (ctx, next) => {
        const body: { [key: string]: string } = ctx.request.body;
        const schema = Joi.object().keys({
            walletId: Joi.number()
                .required()
                .error(() => 'Имя обязательное поле'),
            score: Joi.string()
                .required()
                .error(() => 'Баланс обязательное поле'),
            category: Joi.number()
                .required()
                .error(() => 'Тип обязательное поле'),
            type: Joi.string()
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
            const newTransaction = {
                user: ctx.state.user,
                ...body,
            };
            let transactionEntity = new Transaction();
            Object.assign(transactionEntity, newTransaction);
            transactionEntity = await getRepository(Transaction).save(transactionEntity);

            ctx.status = 200;
            ctx.body = {
                success: true,
                transaction: transactionEntity,
            };
        }
    })
    .get('/api/user/get_transactions/:walletId', async (ctx, next) => {
        const transactions = await Transaction.getRepository()
            .createQueryBuilder('transaction')
            .where('transaction.walletId = :id', { id: ctx.params.walletId })
            .orderBy({ id: 'DESC' })
            .getMany();

        if (!transactions) {
            ctx.body = {
                error: {
                    success: false,
                    transactions: 'Нет транзакций',
                },
            };
            return;
        }
        ctx.body = {
            success: true,
            transactions: transactions,
        };
    })
    .get('/api/user/get_all_transactions', async (ctx, next) => {
        const transactions = await Transaction.getRepository()
            .createQueryBuilder('transaction')
            .where('transaction.userId = :id', { id: ctx.state.user.id })
            .orderBy({ id: 'DESC' })
            .getMany();

        if (!transactions) {
            ctx.body = {
                error: {
                    success: false,
                    transactions: 'Нет транзакций',
                },
            };
            return;
        }

        ctx.body = {
            success: true,
            transactions: transactions,
        };
    });

export default routes;
