module.exports = {
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
};
