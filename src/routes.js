const express = require('express'); // Biblioteca

const routes = express.Router(); // Objeto guarda rotas

const Profile = {
  data: {
    name: 'Guilherme',
    avatar: 'https://github.com/Guilherme-G-Cadilhe.png',
    'monthly-budget': 3000,
    'hours-per-day': 5,
    'days-per-week': 5,
    'vacation-per-year': 4,
    'value-hour': 75,
  },
  controllers: {
    index(req, res) {
      return res.render('profile', { profile: Profile.data });
    },
    update(req, res) {
      //req.body para pegar os dados
      const data = req.body;
      // definir quantas semanas tem em um ano : 52
      const weeksPerYear = 52;
      // remover as semanas de ferias das semanas do ano para pegar quantas semanas tem em um mês
      const weeksPerMonth = (weeksPerYear - data['vacation-per-year']) / 12;
      // quantas horas por semana estou trabalhando
      const weekTotalHours = data['hours-per-day'] * data['days-per-week'];
      // total de horas trabalhadas no mes
      const monthlyTotalHours = weekTotalHours * weeksPerMonth;
      // Valor da minha hora
      const valueHour = data['monthly-budget'] / monthlyTotalHours;

      Profile.data = {
        ...Profile.data,
        ...req.body,
        'value-hour': valueHour,
      };
      return res.redirect('/profile');
    },
  },
};

const Job = {
  data: [
    {
      id: 1,
      name: 'Pizzaria Guloso',
      'daily-hours': 2,
      'total-hours': 1,
      created_at: Date.now(),
    },
    {
      id: 2,
      name: 'OneTwo Project',
      'daily-hours': 3,
      'total-hours': 47,
      created_at: Date.now(),
    },
  ],

  controllers: {
    index(req, res) {
      //Calculos dos Jobs
      const updatedJobs = Job.data.map((job) => {
        const remaining = Job.services.remainingDays(job);
        const status = remaining <= 0 ? 'done' : 'progress';

        return {
          ...job,
          remaining,
          status,
          budget: Job.services.calculateBudget(job, Profile.data['value-hour']),
        };
      });

      return res.render('index', { jobs: updatedJobs });
    },
    create(req, res) {
      // Render = Renderiza e compila um template(esj) em html
      return res.render('job');
    },
    save(req, res) {
      const lastId = Job.data[Job.data.length - 1]?.id || 0;
      // Pega o envio do formulario e cria um objeto com os dados
      Job.data.push({
        id: lastId + 1,
        name: req.body.name,
        'daily-hours': req.body['daily-hours'],
        'total-hours': req.body['total-hours'],
        created_at: Date.now(), // atribuindo data criação
      });
      return res.redirect('/');
    },
    show(req, res) {
      // Pega o id enviado pelo req
      const jobId = req.params.id;
      // Compara se o Id é igual o que já existe no data.id
      const job = Job.data.find((job) => Number(job.id) === Number(jobId));
      // Se o id não existir, retornar
      if (!job) {
        return res.send('Job not found!');
      }
      // calcula o preço do job pela função que fica em serviço
      // atualiza o preço do job
      job.budget = Job.services.calculateBudget(job, Profile.data['value-hour']);
      // devolve o job atualizado
      return res.render('job-edit', { job });
    },
    update(req, res) {
      // Pega o id enviado pelo req
      const jobId = req.params.id;
      // Compara se o Id é igual o que já existe no data.id
      const job = Job.data.find((job) => Number(job.id) === Number(jobId));
      // Se o id não existir, retornar
      if (!job) {
        return res.send('Job not found!');
      }
      // Pega as novas propriedades pelo req para atualizar o job
      const updatedJob = {
        ...job,
        name: req.body.name,
        'total-hours': req.body['total-hours'],
        'daily-hours': req.body['daily-hours'],
      };
      // se o id do req for igual ao que ta no data.id, atualiza o job
      Job.data = Job.data.map((job) => {
        if (Number(job.id) === Number(jobId)) {
          job = updatedJob;
        }

        return job;
      });
      res.redirect('/job/' + jobId);
    },
    delete(req, res) {
      // pega o id pelo req
      const jobId = req.params.id;
      // olha pelo array até achar o id igual, então remove ele do array
      // depois atualiza o array, tendo removido aquele
      Job.data = Job.data.filter((job) => Number(job.id) !== Number(jobId));

      return res.redirect('/');
    },
  },

  services: {
    remainingDays(job) {
      // Calculo de tempo restante
      const remainingDays = (job['total-hours'] / job['daily-hours']).toFixed();

      const createdDate = new Date(job.created_at);
      // pega número do dia \/ + Calculo escolhido pelo perfil
      const dueDay = createdDate.getDate() + Number(remainingDays);
      // Cria o dia do mês relativo ao número passado \/ em ms
      const dueDateInMs = createdDate.setDate(dueDay);

      // dia passado em ms - o dia atual
      const timeDiffInMs = dueDateInMs - Date.now();
      // Transformar millisegundo(ms) em dias
      const dayInMs = 1000 * 60 * 60 * 24;
      const dayDiff = Math.floor(timeDiffInMs / dayInMs);

      // restam x dias
      return dayDiff;
    },
    calculateBudget: (job, valueHour) => valueHour * job['total-hours'],
  },
};

// request, response ( Pedido, Resposta)
routes.get('/', Job.controllers.index);

routes.get('/job', Job.controllers.create);
routes.post('/job', Job.controllers.save);

routes.get('/job/:id', Job.controllers.show);
routes.post('/job/:id', Job.controllers.update);
routes.post('/job/delete/:id', Job.controllers.delete);

routes.get('/profile', Profile.controllers.index);
routes.post('/profile', Profile.controllers.update);

module.exports = routes;
