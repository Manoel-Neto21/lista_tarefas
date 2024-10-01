
// Integração dos módulos: O main.js importa o ToDoList para gerenciar a lista e o renderTaskList para atualizar a interface conforme as ações do usuário.

// src/main.js
import { ToDoList } from './logica.js';
import { renderTaskList } from './interface.js';

const todoList = new ToDoList();
const taskInput = document.getElementById('taskInput');
const taskContainer = document.getElementById('taskContainer');
const addButton = document.getElementById('addButton');

addButton.addEventListener('click', () => {
  const taskText = taskInput.value;
  if (taskText) {
    todoList.addTask(taskText);
    taskInput.value = ''; // Limpa o campo de texto
    renderTaskList(todoList.getAllTasks(), taskContainer);
  }
});

renderTaskList(todoList.getAllTasks(), taskContainer);

