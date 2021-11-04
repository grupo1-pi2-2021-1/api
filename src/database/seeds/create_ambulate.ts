import knex, { Knex } from "knex";

export async function seed(knex: Knex) {
  await knex("ambulate").insert([
    {
      title: "Ambulância 1",
      description: "Ambulância do tipo 1 4x3m",
      type: 1,
    },
    {
      title: "Ambulância 2",
      description: "Ambulância do tipo 1 4x4m",
      type: 2,
    },
    {
      title: "Ambulância 3",
      description: "Ambulância do tipo 1 5x4m",
      type: 3,
    },
  ]);
}
