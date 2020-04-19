import 'reflect-metadata';
import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as passport from 'koa-passport';
import * as session from 'koa-session';

import './auth/auth';
import db from './db';
import routes from './routes/routes';

const PORT = 3000;

const koa = new Koa();

// koa-bodyparser
koa.use(bodyParser());

// koa-session
koa.keys = ['hurf durf'];
koa.use(session({}, koa));

koa.use(passport.initialize());
koa.use(passport.session());

koa.use(routes.routes());

koa.listen(8000);

db.connect()
	.then(() => console.log('Postgress connect'))
	.catch((error) => console.log('qweqwe',error));

