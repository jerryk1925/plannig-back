import  Router from 'koa-router';
import { DefaultState, Context } from 'koa';

const initRoutes = new Router<DefaultState, Context>();

initRoutes
	.use('*', async (ctx, next) => {
		console.info(`${ctx.method} ${ctx.request.url} ${JSON.stringify(ctx.request.body)}`);
		return next();
	});


export default initRoutes;
