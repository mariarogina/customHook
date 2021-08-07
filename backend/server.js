const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

const app = new Koa();
app.use(cors());
app.use(koaBody());

let myJSON = {
    "glossary": {
        "title": "example glossary",
    "GlossDiv": {
            "title": "S",
      "GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
          "SortAs": "SGML",
          "GlossTerm": "Standard Generalized Markup Language",
          "Acronym": "SGML",
          "Abbrev": "ISO 8879:1986",
          "GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
            "GlossSeeAlso": ["GML", "XML"]
                    },
          "GlossSee": "markup"
                }
            }
        }
    }
  }


const router = new Router();
router.get('/data', async (ctx, next) => {
    ctx.response.body = {status: "Data Ok", myData: myJSON};
})
router.get('/error', async (ctx, next) => {
    ctx.response.status = 500;
    ctx.response.body = {status: "Internal Error"};
});
router.get('/loading', async (ctx, next) => {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 5000);
    });
    ctx.response.body = {status: "Ok"};
});

app.use(router.routes())
app.use(router.allowedMethods());

const port = process.env.PORT || 7070;
const server = http.createServer(app.callback());
server.listen(port);
console.info("Server started")