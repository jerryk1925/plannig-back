import 'reflect-metadata';
import './config/env';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import passport from 'koa-passport';
import session from 'koa-session';
import server from 'koa-static';
import cors from '@koa/cors';
import { spaStatic, checkAuthenticated } from './middleware';
import { CONFIG_SESSION } from './config';

import './auth/auth';
import db from './db';
import userRoutes from './routes/userRoutes';
import walletRoutes from './routes/walletRoutes';
import transactionRoutes from './routes/transactionRoutes';

const port: string | number = process.env.PORT || 8000;

const koa = new Koa();

koa.use(
    cors({
        credentials: true,
    }),
);

koa.use(bodyParser());

koa.keys = ['super-secret-key'];
koa.use(session(CONFIG_SESSION, koa));

koa.use(passport.initialize());
koa.use(passport.session());

koa.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
});

koa.use(checkAuthenticated());

koa.use(userRoutes.routes());
koa.use(walletRoutes.routes());
koa.use(transactionRoutes.routes());

koa.use(server(__dirname + '/public'));

koa.use(spaStatic(/^(?!\/api)/, /^\/public/, __dirname + '/public', {}));

koa.listen(port);

db.connect()
    .then(() => console.log('Postgress connect'))
    .catch((error) => console.log(error));
