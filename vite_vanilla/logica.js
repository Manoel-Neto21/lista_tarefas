
// Array.map(), Array.filter(): O método filter() é usado em várias funções para retornar listas filtradas de tarefas (completas ou incompletas).

// Array.reduce(): O método reduce() é utilizado no método countTasks() para contar o número total de tarefas e as tarefas concluídas.

// logica.js
export class ListaTarefas {
    constructor() {
      this.tarefas = [];
    }
  
    adicionaTarefa(tarefa) {
      this.tarefas.push({ text: tarefa, completada: false });
    }
  
    completaTarefa(index) {
      this.tarefas[index].completada = true;
    }

  // Array.map(), Array.filter(): O método filter() é usado em várias funções para retornar listas filtradas de tarefas (completas ou incompletas).
    
    deletaTarefa(index) {
      this.tarefas = this.tarefas.filter((_, i) => i !== index);
    }
  
    filtraTarefaCompletada() {
      return this.tarefas.filter(tarefa => tarefa.completada);
    }
  
    exibeTarefaIncompleta() {
      return this.tarefas.filter(tarefa => !tarefa.completada);
    }
  
    exibeTodasTarefas() {
      return this.tarefas;
    }
  
    contaTarefas() {
      return this.tarefas.reduce((acc, tarefa) => {
        acc.total++;
        if (tarefa.completada) acc.completada++;
        return acc;
      }, { total: 0, completada: 0 });
    }
  }
  