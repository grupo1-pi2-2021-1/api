require('dotenv').config();
const { Pool, Client } = require('pg');

const {
    DB_USER,
    DB_PASS,
    DB,
    PGHOST,
    PGPORT,
} = process.env;
let tries = 5;

const pool = new Pool({
    host:PGHOST,
    user:DB_USER,
    password:DB_PASS,
    database:DB,
    port:PGPORT,
});

while (tries > 0) {
    try {
        pool.query("SELECT * FROM pg_catalog.pg_tables WHERE schemaname != 'pg_catalog' AND schemaname != 'information_schema'", (err, res) => {
            if (err)
                console.log(err);
            else if (!res.rowCount) {
                    console.log("Database not found");
                    console.log("Creating");
                    
                    pool.query(`
                    CREATE TABLE RESPONSAVEL_TECNICO (
                        idResponsavel SERIAL,
                        nome varchar(30),
                        telefone varchar(30),
                        CONSTRAINT RESPONSAVEL_TECNICO_PK PRIMARY KEY(idResponsavel)
                    );
                    CREATE TABLE HISTORICO (
                        id SERIAL,
                        data_execucao date,
                        procedimento varchar(100),
                        ambulancia varchar(100),
                        etapa int,
                        responsavelId int,
                        CONSTRAINT HISTORICO_PK PRIMARY KEY (id),
                        CONSTRAINT HISTORICO_RESPONSAVEL_FK FOREIGN KEY (responsavelId)
                            REFERENCES RESPONSAVEL_TECNICO (idResponsavel)
                    );

                    INSERT INTO RESPONSAVEL_TECNICO (nome, telefone) VALUES
                        ('Responsavel_1', 61988888888),
                        ('Responsavel_2', 61977777777);
                    `, (err, res) => {
                        if (err) {
                            console.log("Failed creating Database");
                            console.log(err);
                        } else {
                            console.log('Database \x1b[32mOK\x1b[0m');
                        }
                    });
                }

                else
                    console.log('Database \x1b[32mOK\x1b[0m');
            
        });
        break;
    } catch (err) {
        console.log(err);
        tries--;
        continue;
    }
}
module.exports = {
    query: (text, params, callback) => pool.query(text, params, callback),
}