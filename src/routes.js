const express = require('express'); // Biblioteca
const routes = express.Router(); // Objeto guarda rotas
const ProfileController = require('./controllers/ProfileController.js');
const JobController = require('./controllers/JobController');

// request, response ( Pedido, Resposta)
routes.get('/', JobController.index);

routes.get('/job', JobController.create);
routes.post('/job', JobController.save);

routes.get('/job/:id', JobController.show);
routes.post('/job/:id', JobController.update);
routes.post('/job/delete/:id', JobController.delete);

routes.get('/profile', ProfileController.index);
routes.post('/profile', ProfileController.update);

module.exports = routes;
