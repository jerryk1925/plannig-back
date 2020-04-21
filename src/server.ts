import 'reflect-metadata';
import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as passport from 'koa-passport';
import * as session from 'koa-session';
import * as cors from '@koa/cors';
import { CONFIG_SESSION } from './config';

import './auth/auth';
import db from './db';
import userRoutes from './routes/userRoutes';
import initRoutes from './routes/initRoutes';


const koa = new Koa();


koa.use(cors({
	credentials: true
}));
// koa-bodyparser
koa.use(bodyParser());

koa.keys = ['super-secret-key'];
koa.use(session(CONFIG_SESSION, koa));

koa.use(passport.initialize());
koa.use(passport.session());

koa.use(userRoutes.routes());
// koa.use(initRoutes.routes());

koa.use(async (ctx, next) => {
	try {
		await next();
	} catch (err) {
		console.log(err);
		ctx.status = err.status || 500;
		ctx.body = err.message;
	}
})

koa.listen(8000);

db.connect()
	.then(() => console.log('Postgress connect'))
	.catch((error) => console.log('qweqwe',error));

