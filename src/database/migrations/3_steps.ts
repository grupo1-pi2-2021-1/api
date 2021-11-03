import knex, { Knex } from "knex";

export async function up(knex: Knex) {
  //criar tabela
  return knex.schema.createTable("steps", (table) => {
    table.increments("id").primary();

    table.integer("procedure_id").references("id").inTable("procedure");

    table.string("name").notNullable();
    table.string("description").notNullable();
    table.string("time");
  });
}

export async function down(knex: Knex) {
  //deleta a tabela
  return knex.schema.dropTable("steps");
}
