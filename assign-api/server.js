// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const auth = require("json-server-auth");
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", auth, router);
server.use((req, res) => {
    res.status(404).json({
        error: 1,
        message: "notFound",
    });
});

server.use("/", (req, res) => {
    res.json("hello word");
});

server.listen(8080, () => {
    console.log("JSON Server is running");
});
