import  Router from 'koa-router';
import { DefaultState, Context } from 'koa';

const routes = new Router<DefaultState, Context>();

routes
		.post('/api/create_wallet', async (ctx, next) => {
		
		});


export default routes;
