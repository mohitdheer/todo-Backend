const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
server.use(middlewares);
const port = process.env.PORT || 8080;

server.use(router);
server.listen(port);
