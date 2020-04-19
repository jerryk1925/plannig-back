import * as Router from 'koa-router';
import * as bcrypt from 'bcryptjs';
import * as Joi from 'joi';
import * as passport from 'koa-passport';
import { getRepository } from 'typeorm';
import { DefaultState, Context } from 'koa';

import { User } from '../entity/user';

const routes = new Router<DefaultState, Context>()

routes
.use('*', async (ctx, next) => {
	console.info(`${ctx.method} ${ctx.request.url} ${JSON.stringify(ctx.request.body)}`);
	return next();
})

.use('/api/*', async (ctx, next) => {
	if (ctx.isUnauthenticated() ) {
		console.info('is not auth');
		ctx.redirect('/');
	}
	
	return next();
})

.get('/', async (ctx) => {
	ctx.body = 'you must login';
})

.post('/login', async (ctx, next) => {
	return passport.authenticate('local', {
		successRedirect: '/api/users',
		failureRedirect: '/'
	})(ctx, next)
})

.get('/logout', async (ctx, next) => {
	if (ctx.isAuthenticated()) {
		ctx.logout();
		ctx.session = null;
	}
	
	ctx.redirect('/');
})

.get('/register', async (ctx) => {
	ctx.body = 'register';
})

.post('/register', async (ctx, next) => {
	const body = ctx.request.body;
	console.log(body)
	const schema = Joi.object().keys({
		username: Joi.string(),
		password: Joi.string(),
		// firstName: Joi.string(),
		// lastName: Joi.string()
	});
	
	const result = Joi.validate(body, schema);
	console.log(result)
	if (result.error) {
		console.error(JSON.stringify(result.error));
		ctx.throw(400, result.error.message);
	}
	
	// const salt = await bcrypt.genSalt();
	// const hash = await bcrypt.hash(body.password, salt);
	let userEntity = new User();
	console.log(userEntity)
	Object.assign(userEntity, body);
	//
	userEntity = await getRepository(User).save(userEntity);
	console.log(userEntity)
	
	return passport.authenticate('local', {
		successRedirect: '/api/users',
		failureRedirect: '/'
	})(ctx, next);
})

.get('/api/users', async (ctx) => {
	ctx.body = await User.find();
});

export default routes;
