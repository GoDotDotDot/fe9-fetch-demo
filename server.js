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

router.get('/headers', async ctx => {
  return ctx.render('headers');
});

router.get('/request', async ctx => {
  return ctx.render('request');
});

router.get('/response', async ctx => {
  return ctx.render('response');
});

router.get('/abort', async ctx => {
  return ctx.render('abort');
});


router.get('/data', async ctx => {
  const { query, headers } = ctx.request;
  const { name } = query;
  const token = headers['x-token'] || '';
  ctx.body = {
    status: true,
    data: `${name}，您好，欢迎加入九部！您的token为：${token}`,
  };
});

// koa-ejs
render(app, {
  root: path.join(__dirname, 'views'),
  layout: false,
  viewExt: 'html',
  cache: false,
});

app.keys = ['fe9-fetch-server'];
app.use(function(ctx, next) {
  const { headers, method } = ctx.request;
  const { origin } = headers;
  if (method === 'OPTIONS') {
    ctx.response.status = 200;
  }
  ctx.response.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With, x-token',
    'Access-Control-Allow-Credentials': 'true',
  });
  ctx.cookies.set('org', 'fe9');
  return next();
});
app.use(async (ctx, next) => {
  const { method, url, headers } = ctx.request;
  if (method === 'GET') {
    ctx.response.status = 200;
    const reg = /^\/api/;
    if (reg.test(url)) {
      ctx.set('x-token', 'fe9-token-from-backend');
      ctx.body = {
        status: true,
        data: `
        <h3>
          ${method}: ${url}
        </h3>
        <h3>
          x-token: ${headers['x-token']}
        </h3>`,
      };
    }
  }
  await next();
  console.log(ctx.request.method); // GET
});

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000);
