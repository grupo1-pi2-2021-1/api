import knex, { Knex } from "knex";

export async function seed(knex: Knex) {
  await knex("procedure").insert([
    {
      title: "Esterelização completa",
      description:
        "Procedimento completo de limpeza de ambulâncias com tempo mais demorado",
      type: "Ozônio + UV",
      time: "25:00",
      steps: JSON.stringify([
        {
          name: "Posicionar o aparelho",
          description: "Coloque o aparelho higienizador dentro da ambulância",
        },
        {
          name: "Fechar todas as janelas",
          description:
            "Verifique se todas as frestas da ambulância estão seladas",
        },
        {
          name: "Ligar aparelho",
          description: "Ligue o aparelho higienizador no interruptor lateral",
        },
        {
          name: "Rotina automática",
          description:
            "Será disparada uma rotina automática de luz UV + ozônio",
          time: "25:00",
        },
        {
          name: "Finalizar",
          description:
            "Desligue o aparelho higienizador no interruptor lateral",
        },
      ]),
    },
    {
      title: "Esterelização com Ozônio",
      description: "Procedimento rápido apenas utilizando gás ozônio",
      type: "Somente ozônio",
      time: "15:00",
      steps: JSON.stringify([
        {
          name: "Posicionar o aparelho",
          description: "Coloque o aparelho higienizador dentro da ambulância",
        },
        {
          name: "Fechar todas as janelas",
          description:
            "Verifique se todas as frestas da ambulância estão seladas",
        },
        {
          name: "Ligar aparelho",
          description: "Ligue o aparelho higienizador no interruptor lateral",
        },
        {
          name: "Rotina automática",
          description:
            "Será disparada uma rotina automática de luz UV + ozônio",
          time: "15:00",
        },
        {
          name: "Finalizar",
          description:
            "Desligue o aparelho higienizador no interruptor lateral",
        },
      ]),
    },
    {
      title: "Esterelização com Luz UV",
      description: "Procedimento rápido apenas utilizando luz UV",
      type: "Somente ozônio",
      time: "10:00",
      steps: JSON.stringify([
        {
          name: "Posicionar o aparelho",
          description: "Coloque o aparelho higienizador dentro da ambulância",
        },
        {
          name: "Fechar todas as janelas",
          description:
            "Verifique se todas as frestas da ambulância estão seladas",
        },
        {
          name: "Ligar aparelho",
          description: "Ligue o aparelho higienizador no interruptor lateral",
        },
        {
          name: "Rotina automática",
          description:
            "Será disparada uma rotina automática de luz UV + ozônio",
          time: "10:00",
        },
        {
          name: "Finalizar",
          description:
            "Desligue o aparelho higienizador no interruptor lateral",
        },
      ]),
    },
  ]);
}
