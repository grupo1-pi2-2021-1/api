import knex, { Knex } from "knex";

export async function seed(knex: Knex) {
  await knex("users").insert([{ name: "Usuário teste", phone: "986554555" }]);
}
