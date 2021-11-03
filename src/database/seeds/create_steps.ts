import knex, { Knex } from "knex";

export async function seed(knex: Knex) {
  await knex("steps").insert([
    {
      procedure_id: 1,
      name: "Posicionar o aparelho",
      description: "Coloque o aparelho higienizador dentro da ambulância",
    },
    {
      procedure_id: 1,
      name: "Fechar todas as janelas",
      description: "Verifique se todas as frestas da ambulância estão seladas",
    },
    {
      procedure_id: 1,
      name: "Ligar aparelho",
      description: "Ligue o aparelho higienizador no interruptor lateral",
    },
    {
      procedure_id: 1,
      name: "Rotina automática",
      description: "Será disparada uma rotina automática de luz UV + ozônio",
      time: "25:00",
    },
    {
      procedure_id: 1,
      name: "Finalizar",
      description: "Desligue o aparelho higienizador no interruptor lateral",
    },
  ]);
}
