const db = require('../dbConfig/dbConfig');

class Responsavel {
    async getAll() {
        let results = await db.query(`SELECT * FROM RESPONSAVEL_TECNICO`).catch(console.log());
        return results.rows;
    }

    async getById(id){
        let results = await db.query(`SELECT * FROM RESPONSAVEL_TECNICO WHERE id = $1`, [parseInt(id)]).catch(console.log());
        return results.rows;
    }
}

module.exports = {
    Responsavel
};