
export function mostraListaTarefas(tarefas, container) {
    container.innerHTML = ''; // Limpa o conteúdo anterior
    tarefas.forEach((tarefa, index) => {
      const taskElement = document.createElement('div');
      taskElement.className = 'tarefa';
  
      const textElement = document.createElement('span');
      textElement.textContent = tarefa.text;
      taskElement.appendChild(textElement);
  
      if (!tarefa.completada) {
        const botaoCompleta = document.createElement('button');
        botaoCompleta.textContent = 'Completar';
        botaoCompleta.addEventListener('click', () => {
          tarefas[index].completada = true;
          mostraListaTarefas(tarefas, container);
        });
        taskElement.appendChild(botaoCompleta);
      }
  
      const botaoDeleta = document.createElement('button');
      botaoDeleta.textContent = 'Deletar';
      botaoDeleta.addEventListener('click', () => {
        tarefas.splice(index, 1); // Remove a tarefa
        mostraListaTarefas(tarefas, container);
      });
      taskElement.appendChild(botaoDeleta);
  
      container.appendChild(taskElement);
    });
  }
  