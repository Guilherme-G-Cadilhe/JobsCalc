const express = require('express');
const server = express();
const routes = require('./routes.js');
const path = require('path');

// usando template engine
server.set('view engine', 'ejs');

// Mudar a localização da pasta Views
server.set('views', path.join(__dirname, 'views'));

//habilitar arquivos estáticos
server.use(express.static('public'));

//Usar o req.body
server.use(express.urlencoded({ extended: true }));

// Routes
const PORT = process.env.PORT || 5000;
server.use(routes);
server.listen(PORT, () => console.log('Rodando'));
