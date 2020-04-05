import * as Koa from 'koa'
const app = new Koa();
import db from './db';
console.log(db);

app.use(async ctx => {
	ctx.body = 'Hello World';
});

app.listen(8000);

db.connect()
	.then(() => console.log('Postgress connect'))
	.catch((error) => console.log('qweqwe',error));

