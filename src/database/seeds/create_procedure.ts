import knex, { Knex } from "knex";

export async function seed(knex: Knex) {
    await knex('procedure').insert([
        {title: 'Esterelização Completa', description: 'Procedimento completo de limpeza que leva 25 minutos para ser finalizado.', executionTime: 25},
        {title: 'Esterelização Rápida', description: 'Procedimento rapido de limpeza que leva 15 minutos para ser finalizado.', executionTime: 15},
        {title: 'Esterelização com Ozônio', description: 'Procedimento rapido de limpeza que utiliza apenas o gás de ozônio', executionTime: 25},
    ]);
}