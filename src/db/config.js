const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

//Configurando a abertura do banco de dados
module.exports = () =>
  open({
    filename: './database.sqlite',
    //Local onde vai ser salvo /\
    driver: sqlite3.Database,
    //quem vai fazer isso /\
  });
