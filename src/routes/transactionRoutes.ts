import Router from 'koa-router';
import { DefaultState, Context } from 'koa';

import {
    createTransactions,
    getTransactionForCurrentWallet,
    getAllTransaction,
} from '../controllers/transactionController';

import { updateWalletBalance } from '../controllers/walletController';

const routes = new Router<DefaultState, Context>();

routes
    .post('/api/user/create_transaction', async (ctx, next) => {
        const result = await updateWalletBalance(ctx, next);
        if (result) {
            await createTransactions(ctx, next);
        }
    })
    .get('/api/user/get_transactions/:walletId', async (ctx, next) => {
        await getTransactionForCurrentWallet(ctx, next);
    })
    .get('/api/user/get_all_transactions', async (ctx, next) => {
        await getAllTransaction(ctx, next);
    });

export default routes;
