import * as server from "koa-static";

export const spaStatic = (matchReg = /^(?!\/api)/, staticReg = /^\/public/, root: string, opts: object) => {
	return async (ctx: any, next: any) => {
		if (matchReg.test(ctx.path)) {
			ctx.path = staticReg.test(ctx.path) ? ctx.path : '/';
			return server(root, opts)(ctx, next);
		}
		await next();
	}
};
