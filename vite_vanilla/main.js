
// Integração dos módulos: O main.js importa o ListaTarefas para gerenciar a lista e o mostraListaTarfas para atualizar a interface conforme as ações do usuário.

// src/main.js
import { ListaTarefas } from './logica.js';
import { mostraListaTarefas } from './interface.js';

const listaTarefas = new ListaTarefas();
const criaTarefa = document.getElementById('criaTarefa');
const conteinerTarefa = document.getElementById('conteinerTarefa');
const addBotao = document.getElementById('addBotao');

addBotao.addEventListener('click', () => {
  const taskText = criaTarefa.value;
  if (taskText) {
    listaTarefas.adicionaTarefa(taskText);
    criaTarefa.value = ''; // Limpa o campo de texto
    mostraListaTarefas(listaTarefas.exibeTodasTarefas(), conteinerTarefa);
  }
});

mostraListaTarefas(listaTarefas.exibeTodasTarefas(), conteinerTarefa);

