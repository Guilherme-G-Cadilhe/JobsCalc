const Database = require('../db/config.js');

let data = {
  name: 'Guilherme',
  avatar: 'https://github.com/Guilherme-G-Cadilhe.png',
  'monthly-budget': 3000,
  'hours-per-day': 5,
  'days-per-week': 5,
  'vacation-per-year': 4,
  'value-hour': 75,
};

module.exports = {
  async get() {
    const db = await Database();

    const data2 = await db.run(`SELECT * FROM PROFILE`);

    await db.close();

    console.log(data2);
    return data;
  },
  update(newData) {
    data = newData;
  },
};
