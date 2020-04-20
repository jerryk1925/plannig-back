import 'reflect-metadata';
import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as passport from 'koa-passport';
import * as session from 'koa-session';
import * as cors from '@koa/cors';
console.log(cors())

import './auth/auth';
import db from './db';
import routes from './routes/routes';


const koa = new Koa();


koa.use(cors({
	credentials: true
}));
// koa-bodyparser
koa.use(bodyParser());

// koa-session
// const CONFIG = {
// 	key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
// 	/** (number || 'session') maxAge in ms (default is 1 days) */
// 	/** 'session' will result in a cookie that expires when session/browser is closed */
// 	/** Warning: If a session cookie is stolen, this cookie will never expire */
// 	maxAge: 86400000,
// 	autoCommit: true, /** (boolean) automatically commit headers (default true) */
// 	overwrite: true, /** (boolean) can overwrite or not (default true) */
// 	httpOnly: false, /** (boolean) httpOnly or not (default true) */
// 	signed: true, /** (boolean) signed or not (default true) */
// 	rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
// 	renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
// 	// secure: true, /** (boolean) secure cookie*/
// };

koa.keys = ['super-secret-key'];
koa.use(session({}, koa));



koa.use(passport.initialize());
koa.use(passport.session());

koa.use(routes.routes());



koa.listen(8000);

db.connect()
	.then(() => console.log('Postgress connect'))
	.catch((error) => console.log('qweqwe',error));

