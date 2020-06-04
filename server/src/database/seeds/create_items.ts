import Knex from "knex";

export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: 'lampadas', image: 'lampadas.svg'},
    { title: 'pilhas e baterias', image: 'baterias.svg'},
    { title: 'papeis e papelao', image: 'papeis-papelao.svg'},
    { title: 'residuos eletronicos', image: 'eletronicos.svg'},
    { title: 'residuos organicos', image: 'organicos.svg'},
    { title: 'oleo de cozinha', image: 'oleo.svg'},
  ]);
}