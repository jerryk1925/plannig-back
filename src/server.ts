import 'reflect-metadata';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import passport from 'koa-passport';
import session from 'koa-session';
import server from 'koa-static';
import mount from 'koa-mount';
import cors from '@koa/cors';
import { spaStatic } from './middleware/spaStatic';
import { CONFIG_SESSION } from './config';

import './auth/auth';
// import db from './db';
import userRoutes from './routes/userRoutes';
// import initRoutes from './routes/initRoutes';

const port : string|number= process.env.PORT || 8000;
console.log(process.env);


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

koa.use(mount('/', server( './public')))

koa.use(server(__dirname + '/public'))


koa.use(spaStatic(
	/^(?!\/api)/,
	/^\/public/,
	__dirname + '/public',
	{}
))


koa.listen(port);

// db.connect()
// 	.then(() => console.log('Postgress connessdfdsfddct'))
// 	.catch((error) => console.log('qweqwe',error));

