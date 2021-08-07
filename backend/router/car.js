const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();
// a simple car object that we can serve
const car = {
   make: 'Honda',
   year: '2012',
   model: 'Civic'
};
// Route to handle GET request
router.get('/data', async (ctx, next) => {
    ctx.body = car;
    await next();
});
app.use(router.routes()); // route middleware
module.exports = app;