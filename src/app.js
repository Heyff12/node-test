const Koa = require('koa');
const app = new Koa();

const PORT = 3002;
const HOST = '0.0.0.0';

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);