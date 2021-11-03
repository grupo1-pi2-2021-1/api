import knex, { Knex } from "knex";

export async function up(knex: Knex) {
    //criar tabela
    return knex.schema.createTable('history_procedure', table => {
        table.increments('id').primary();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users');

        table.integer('procedure_id')
            .notNullable()
            .references('id')
            .inTable('procedure');  
            
        table.dateTime('hour').notNullable();
    })
}

export async function down(knex: Knex) {
    //deleta a tabela
    return knex.schema.dropTable('history_procedure');

}