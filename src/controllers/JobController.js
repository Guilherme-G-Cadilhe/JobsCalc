const Job = require('../model/Job');
const jobUtils = require('../utils/jobUtils');
const Profile = require('../model/Profile');
module.exports = {
  index(req, res) {
    const jobs = Job.get();
    const profile = Profile.get();
    //Calculos dos Jobs
    const updatedJobs = jobs.map((job) => {
      const remaining = jobUtils.remainingDays(job);
      const status = remaining <= 0 ? 'done' : 'progress';

      return {
        ...job,
        remaining,
        status,
        budget: jobUtils.calculateBudget(job, profile['value-hour']),
      };
    });

    return res.render('index', { jobs: updatedJobs });
  },
  create(req, res) {
    // Render = Renderiza e compila um template(esj) em html
    return res.render('job');
  },
  save(req, res) {
    const jobs = Job.get();
    const lastId = jobs[jobs.length - 1]?.id || 0;
    // Pega o envio do formulario e cria um objeto com os dados
    jobs.push({
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
    const job = Job.get().find((job) => Number(job.id) === Number(jobId));
    // Se o id não existir, retornar
    if (!job) {
      return res.send('Job not found!');
    }
    // calcula o preço do job pela função que fica em serviço
    // atualiza o preço do job
    job.budget = jobUtils.calculateBudget(job, Profile.get()['value-hour']);
    // devolve o job atualizado
    return res.render('job-edit', { job });
  },
  update(req, res) {
    // Pega o id enviado pelo req
    const jobId = req.params.id;
    const jobs = Job.get();
    // Compara se o Id é igual o que já existe no data.id
    const job = jobs.find((job) => Number(job.id) === Number(jobId));
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
    const newJobs = Job.get().map((job) => {
      if (Number(job.id) === Number(jobId)) {
        job = updatedJob;
      }

      return job;
    });

    Job.update(newJobs);

    res.redirect('/job/' + jobId);
  },
  delete(req, res) {
    // pega o id pelo req
    const jobId = req.params.id;
    // olha pelo array até achar o id igual, então remove ele do array
    // depois atualiza o array, tendo removido aquele
    Job = Job.get().filter((job) => Number(job.id) !== Number(jobId));

    return res.redirect('/');
  },
};
