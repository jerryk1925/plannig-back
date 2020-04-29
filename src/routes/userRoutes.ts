import  Router from 'koa-router';
import  Joi from 'joi';
import  passport from 'koa-passport';
import { getRepository } from 'typeorm';
import { DefaultState, Context } from 'koa';
import { parseJoiErrors } from "../lib/parseJoiErrors";
import { User } from '../entity/user';

const routes = new Router<DefaultState, Context>();

routes
    .post('/api/login', async (ctx, next) => {
        const body: { [key: string]: string; } = ctx.request.body;
    
        const schema = Joi.object().keys({
            username: Joi.string().required().error(() => 'Имя обязательное поле'),
            password: Joi.string().required().error(() => 'Пароль обязательное поле'),
            // firstName: Joi.string(),
            // lastName: Joi.string()
        });
        
        const { error } = Joi.validate(body, schema, {abortEarly: false});
        if(error) {
            ctx.status = 200
            ctx.body = {
                error: parseJoiErrors(error.details)
            };
            return;
        }
        
        return passport.authenticate('local', function(err, user, info, status) {
            ctx.status = 200;
            if(!err) {
                ctx.login(user);
                ctx.body = {
                    user
                }
            } else{
                ctx.body = {
                    error: {
                        all:  'Сорян но такого юзера нет)'
                    }
                };
            }
        })(ctx, next)
    })

    .post('/api/registration', async (ctx, next) => {
        const body: { [key: string]: string; } = ctx.request.body;

        const schema = Joi.object().keys({
            username: Joi.string().required(),
            password: Joi.string().required(),
        });
    
        const { error } = Joi.validate(body, schema, {abortEarly: false});
        if(error) {
            ctx.status = 200
            ctx.body = {
                error: parseJoiErrors(error.details)
            };
            return;
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
                ctx.body ={
                    user
                }
            }

        })(ctx, next);
    })

    .get('/api/auth', async (ctx, next) => {
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
    })

    .get('/api/logout', async (ctx, next) => {
        if (ctx.isAuthenticated()) {
            ctx.logout();
            ctx.session = null;
            ctx.body = {
                success: true
            }
        } else {
            ctx.status = 200;
            ctx.body = {
                error: {
                    all:  'Сорян но чтото пошло не так'
                }
            }
        }
    })

export default routes;
