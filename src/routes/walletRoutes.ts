import  Router from 'koa-router';
import Joi from 'joi';
import { DefaultState, Context } from 'koa';

const routes = new Router<DefaultState, Context>();

routes
		.post('/api/create_wallet', async (ctx, next) => {
				const body: { [key: string]: string; } = ctx.request.body;
			
		})
		.get('/api/wallets', async (ctx, next) => {
		
		})


export default routes;
