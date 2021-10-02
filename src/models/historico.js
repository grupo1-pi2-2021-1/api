const db = require('../dbConfig/dbConfig');

class Historico {
    async getAll() {
        let results = await db.query('SELECT * FROM HISTORICO').catch(console.log());
        return results.rows;
    }
}

module.exports = {
    Historico
};