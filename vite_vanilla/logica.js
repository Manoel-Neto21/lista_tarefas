
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
  