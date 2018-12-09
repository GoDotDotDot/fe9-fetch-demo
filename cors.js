const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const render = require('koa-ejs');
const path = require('path');
const Router = require('koa-router');

const router = new Router();

const app = new Koa();

router.get('/', async ctx => {
  return ctx.render('index');
});

router.get('/request', async ctx => {
  return ctx.render('request');
});


// koa-ejs
render(app, {
  root: path.join(__dirname, 'cors-views'),
  layout: false,
  viewExt: 'html',
  cache: false,
});

app.keys = ['fe9-fetch-server'];


app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(4001);
