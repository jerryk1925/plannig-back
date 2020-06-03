export const checkAuthenticated = () => {
    return async (ctx, next) => {
        if (/user/i.test(ctx.request.url)) {
            if (ctx.isAuthenticated()) {
                await next();
            } else {
                ctx.status = 200;
                ctx.body = {
                    error: {
                        all: 'Сорян юзер не зарегистрирован',
                    },
                };
                return;
            }
        } else {
            await next();
        }
    };
};
