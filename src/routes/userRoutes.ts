import * as Router from 'koa-router';
import * as bcrypt from 'bcryptjs';
import * as Joi from 'joi';
import * as passport from 'koa-passport';
import { getRepository } from 'typeorm';
import { DefaultState, Context } from 'koa';

import { User } from '../entity/user';

const routes = new Router<DefaultState, Context>();

routes
    .use('*', async (ctx, next) => {
        console.info(`${ctx.method} ${ctx.request.url} ${JSON.stringify(ctx.request.body)}`);
        return next();
    })

    .use('/api/*', async (ctx, next) => {
        if (ctx.isUnauthenticated() ) {
            ctx.status = 400;
            ctx.body = {
                error: ['Вы должны быть авторизированы']
            };
        }

        return next();
    })

    .post('/login', async (ctx, next) => {
        const body: { [key: string]: string; } = ctx.request.body;
        if (!body.password || !body.username) {
            return false;
        }

        return passport.authenticate('local', function(err, user, info, status) {
            console.log('qweasdasdasddddddddddddddddddddddde',err)
            if(!err) {
                ctx.login(user);
                ctx.status = 200;
                ctx.body = user;
            }
        })(ctx, next)
    })

    .get('/logout', async (ctx, next) => {
        if (ctx.isAuthenticated()) {
            ctx.logout();
            ctx.session = null;
        }

    })

    .post('/register', async (ctx, next) => {
        const body: { [key: string]: string; } = ctx.request.body;

        const schema = Joi.object().keys({
            username: Joi.string().required(),
            password: Joi.string().required(),
            // firstName: Joi.string(),
            // lastName: Joi.string()
        });

        const result = Joi.validate(body, schema);
        if (result.error) {
            console.error(JSON.stringify(result.error));
            ctx.throw(400, result.error.message);
        }

        // const salt = await bcrypt.genSalt();
        // const hash = await bcrypt.hash(body.password, salt);
        let userEntity = new User();
        Object.assign(userEntity, body);
        //
        userEntity = await getRepository(User).save(userEntity);

        return passport.authenticate('local', async function(err, user, info, status) {
            if(!err) {
                ctx.status = 200;
                ctx.body = await User.find();
            }

        })(ctx, next);
    });

export default routes;
