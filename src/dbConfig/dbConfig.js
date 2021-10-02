require('dotenv').config();
const { Pool, Client } = require('pg');
const connectionString = process.env.DB_URL;
let tries = 5;

const pool = new Pool({
    connectionString: connectionString,
});

while (tries > 0) {
    try {
        pool.query("SELECT * FROM pg_catalog.pg_tables WHERE schemaname != 'pg_catalog' AND schemaname != 'information_schema'", (err, res) => {
            if (err)
                console.log(err);
            else {
                if (!res.rowCount) {
                    console.log("Database not found");
                    console.log("Creating");
                    
                    pool.query(`
                    CREATE TABLE RESPONSAVEL_TECNICO (
                        idResponsavel SERIAL,
                        nome varchar(30),
<<<<<<< HEAD
                        telefone varchar(30),
=======
                        telefone varchar(30)
>>>>>>> 253c0f9e6ef03313e5547e3e0d70e4604f460a27
                        CONSTRAINT RESPONSAVEL_TECNICO_PK PRIMARY KEY(idResponsavel)
                    );
                    CREATE TABLE HISTORICO (
                        id SERIAL,
                        data_execucao date,
                        procedimento varchar(100),
                        ambulancia varchar(100),
                        etapa int,
<<<<<<< HEAD
                        responsavelId int,
                        CONSTRAINT HISTORICO_PK PRIMARY KEY (id),
                        CONSTRAINT HISTORICO_RESPONSAVEL_FK FOREIGN KEY (responsavelId)
                            REFERENCES RESPONSAVEL_TECNICO (idResponsavel)
=======
                        CONSTRAINT HISTORICO_PK PRIMARY KEY (id),
                        CONSTRAINT HISTORICO_RESPONSAVEL_FK FOREIGN KEY (responsavelId)
                            REFERENCES PROFESSOR (idResponsavel)
>>>>>>> 253c0f9e6ef03313e5547e3e0d70e4604f460a27
                    );
                    `, (err, res) => {
                        if (err) {
                            console.log("Failed creating Database");
                            console.log(err);
                        } else {
                            console.log('Database \x1b[32mOK\x1b[0m');
                        }
                    });
                }

                else if (res.rowCount != 7)
                    throw '\x1b[33mFaulty database in project\n\x1b[33mDelete dbdata and start project again';

                else
                    console.log('Database \x1b[32mOK\x1b[0m');
            }
        });
        break;
    } catch (err) {
        console.log(err);
        tries--;
        continue;
    }
}
module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    },
}