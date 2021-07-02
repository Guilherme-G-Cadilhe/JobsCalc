const Job = require('../model/Job');
const jobUtils = require('../utils/JobUtils');
const Profile = require('../model/Profile');
module.exports = {
  create(req, res) {
    // Render = Renderiza e compila um template(esj) em html
    return res.render('job');
  },
  async save(req, res) {
    // Pega o envio do formulario e cria um objeto com os dados
    await Job.create({
      name: req.body.name,
      'daily-hours': req.body['daily-hours'],
      'total-hours': req.body['total-hours'],
      created_at: Date.now(), // atribuindo data criação
    });

    return res.redirect('/');
  },
  async show(req, res) {
    // Pega o id enviado pelo req
    const jobId = req.params.id;
    const jobs = await Job.get();
    // Compara se o Id é igual o que já existe no data.id
    const job = await jobs.find((job) => Number(job.id) === Number(jobId));
    // Se o id não existir, retornar
    if (!job) {
      return res.send('Job not found!');
    }
    const profile = await Profile.get();
    // atualiza o preço do job
    job.budget = jobUtils.calculateBudget(job, await profile['value-hour']);
    // devolve o job atualizado
    return res.render('job-edit', { job });
  },
  async update(req, res) {
    // Pega o id enviado pelo req
    const jobId = req.params.id;

    const updatedJob = {
      name: req.body.name,
      'total-hours': req.body['total-hours'],
      'daily-hours': req.body['daily-hours'],
    };

    await Job.update(updatedJob, jobId);

    res.redirect('/job/' + jobId);
  },
  async delete(req, res) {
    // pega o id pelo req
    const jobId = req.params.id;

    await Job.delete(jobId);

    return res.redirect('/');
  },
};
