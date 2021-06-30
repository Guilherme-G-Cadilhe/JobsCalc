const Job = require('../model/Job');
const Profile = require('../model/Profile');
const JobUtils = require('../utils/JobUtils');
module.exports = {
  async index(req, res) {
    const jobs = await Job.get();
    const profile = await Profile.get();

    let statusCount = {
      progress: 0,
      done: 0,
      total: jobs.length,
    };
    //  total de hrs p/dia de jobs em progress
    let jobTotalHours = 0;

    //Calculos dos Jobs
    const updatedJobs = jobs.map((job) => {
      const remaining = JobUtils.remainingDays(job);
      const status = remaining <= 0 ? 'done' : 'progress';

      // soma/envia o resultado do status pro statusCount
      statusCount[status] += 1;

      //  total de hrs p/dia de jobs em progress

      jobTotalHours =
        status === 'progress' ? jobTotalHours + Number(job['daily-hours']) : jobTotalHours;

      return {
        ...job,
        remaining,
        status,
        budget: JobUtils.calculateBudget(job, profile['value-hour']),
      };
    });

    // qtd horas trab por dia - qtd horas de jobs em progress
    const freeHours = profile['hours-per-day'] - jobTotalHours;

    return res.render('index', {
      jobs: updatedJobs,
      profile: profile,
      statusCount: statusCount,
      freeHours: freeHours,
    });
  },
};
