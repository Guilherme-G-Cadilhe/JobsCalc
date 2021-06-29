const Database = require('./config');
//Importando o banco do config.js

Database(); //Abrindo o banco de dados

Database.exec(
  //Comando SQL dentro de Crases (``)
  `CREATE TABLE profile(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, 
    avatar TEXT, 
    monthly_budget INT, 
    hours_per_day INT,
    days_per_week INT,
    vacation_per_year INT,
    value_hour INT,
    );`
);

Database.exec(`CREATE TABLE jobs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  daily_hours INT,
  total_hours INT,
  created_at DATETIME,
);`);

Database.run(`INSERT INTO profile (
  name,
  avatar,
  monthly_budget,
  hours_per_day,
  days_per_week,
  vacation_per_year,
  ) VALUES (
    "Guilherme",
    'https://github.com/Guilherme-G-Cadilhe.png',
    3000,
    5,
    5,
    4,
  );`);

Database.run(`INSERT INTO jobs (
  name,
  daily_hours,
  total_hours,
  created_at,
) VALUES (
  "Pizzaria Guloso",
  2,
  1,
  1617514376018
);`);

Database.run(`INSERT INTO jobs (
  name,
  daily_hours,
  total_hours,
  created_at,
) VALUES (
  "OneTwo Project",
  3,
  47,
  1617514376018
);`);

Database.close(); // Fechando o banco de dados