// import jsonServer from 'json-server';
const jsonServer = require("json-server"); // this is instead of the import line above
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
