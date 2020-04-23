import  Router from 'koa-router';
import  bcrypt from 'bcryptjs';
import  Joi from 'joi';
import  passport from 'koa-passport';
import { getRepository } from 'typeorm';
import { DefaultState, Context } from 'koa';

import { User } from '../entity/user';

const routes = new Router<DefaultState, Context>();

routes
    .post('/login', async (ctx, next) => {
        const body: { [key: string]: string; } = ctx.request.body;
        if (!body.password || !body.username) {
            return false;
        }

        return passport.authenticate('local', function(err, user, info, status) {
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

        return passport.authenticate('local',  function(err, user, info, status) {
            if(!err) {
                ctx.login(user);
                ctx.status = 200;
                ctx.body = user;
            }

        })(ctx, next);
    })

    .post('/api/auth', async (ctx, next) => {
        if(ctx.isAuthenticated()) {
            ctx.status = 200;
            ctx.body = {
                user: ctx.state.user
            } ;
        } else {
            ctx.status = 200;
            ctx.body = {
                user: null,
            }
        }
}   );

export default routes;
