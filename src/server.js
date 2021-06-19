const express = require("express");
const server = express();
const routes = require("./routes");
// usando template engine
server.set("view engine", "ejs");

//habilitar arquivos estáticos
server.use(express.static("public"));

//Usar o req.body
server.use(express.urlencoded({ extended: true }));

// Routes
server.use(routes);
server.listen(3000, () => console.log("Rodando"));
