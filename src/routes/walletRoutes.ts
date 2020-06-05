import Router from 'koa-router';
import { DefaultState, Context } from 'koa';
import { createWallet, getWallets, deleteWallet } from '../controllers/walletController';

const routes = new Router<DefaultState, Context>();

routes
    .post('/api/user/create_wallet', async (ctx, next) => {
        await createWallet(ctx, next);
    })
    .get('/api/user/get_wallets', async (ctx, next) => {
        await getWallets(ctx, next);
    })
    .delete('/api/user/delete_wallets/:walletId', async (ctx, next) => {
        await deleteWallet(ctx, next);
    });

export default routes;
