require('dotenv').config();
const { Pool, Client } = require('pg');
const connectionString = process.env;


async function insertData() {
    const pool = new Pool();

    pool.query(`INSERT INTO RESPONSAVEL (nome, telefone) VALUES ('Jotaro Kujo', '40028922');
    INSERT INTO HISTORICO (data_execucao, procedimento, ambulancia, etapa, responsavelId) VALUES ('2020-01-01', 'Esterelizacao Rapida', 'Ambulancia 1', 1, 1);`, (err, res) => {
        console.log(err, res);
        pool.end();
    });

    // pool.query(`INSERT INTO HISTORICO (data_execucao, procedimento, ambulancia, etapa, responsavelId) VALUES ('2020-01-01', 'Esterelizacao Rapida', 'Ambulancia 1', 1, 1);`, (err, res) =>{
    //     console.log(err, res);
    //     pool.end();
    // });
}
module.exports = {
    insertData
}