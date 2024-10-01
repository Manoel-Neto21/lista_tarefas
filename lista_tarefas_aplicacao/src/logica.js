
// Array.map(), Array.filter(): O método filter() é usado em várias funções para retornar listas filtradas de tarefas (completas ou incompletas).

// Array.reduce(): O método reduce() é utilizado no método countTasks() para contar o número total de tarefas e as tarefas concluídas.

// src/logica.js
export class ToDoList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push({ text: task, completed: false });
    }
  
    completeTask(index) {
      this.tasks[index].completed = true;
    }
  
    deleteTask(index) {
      this.tasks = this.tasks.filter((_, i) => i !== index);
    }
  
    filterCompletedTasks() {
      return this.tasks.filter(task => task.completed);
    }
  
    getIncompleteTasks() {
      return this.tasks.filter(task => !task.completed);
    }
  
    getAllTasks() {
      return this.tasks;
    }
  
    countTasks() {
      return this.tasks.reduce((acc, task) => {
        acc.total++;
        if (task.completed) acc.completed++;
        return acc;
      }, { total: 0, completed: 0 });
    }
  }
  