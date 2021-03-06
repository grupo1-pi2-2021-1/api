import knex, { Knex } from "knex";

export async function up(knex: Knex) {
  //criar tabela
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("phone").notNullable();
  });
}

export async function down(knex: Knex) {
  //deleta a tabela
  return knex.schema.dropTable("users");
}
