const Koa = require('koa');
const app = new Koa();
const port = 3002;

const koaBody = require('koa-body');
const router = require('./router');

app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());

const server = app.listen(port, (err) => {
    if (err) return console.log(`Error: ${err}`);
    console.log(`Server listening on port ${server.address().port}`);
});