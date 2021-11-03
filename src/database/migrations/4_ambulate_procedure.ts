import knex, { Knex } from "knex";

export async function up(knex: Knex) {
    //criar tabela
    return knex.schema.createTable('ambulate_procedure', table => {
        table.increments('id').primary();

        table.integer('ambulate_id')
        .notNullable()
        .references('id')
        .inTable('ambulate');

        table.integer('procedure_id')
        .notNullable()
        .references('id')
        .inTable('procedure');     
    })
}

export async function down(knex: Knex) {
    //deleta a tabela
    return knex.schema.dropTable('ambulate_procedure');

}