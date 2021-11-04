import knex, { Knex } from "knex";

export async function up(knex: Knex) {
  //criar tabela
  return knex.schema.createTable("ambulate", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.integer("type").notNullable();
  });
}

export async function down(knex: Knex) {
  //deleta a tabela
  return knex.schema.dropTable("ambulate");
}
