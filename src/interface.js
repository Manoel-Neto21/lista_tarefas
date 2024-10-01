
// Criação dinâmica de componentes: Aqui criamos os elementos HTML de forma manual, adicionando eventos de clique para completar e deletar tarefas. Nenhuma biblioteca de UI é usada, tudo é feito manualmente com o DOM.

// src/interface.js
export function renderTaskList(tasks, container) {
    container.innerHTML = ''; // Limpa o conteúdo anterior
    tasks.forEach((task, index) => {
      const taskElement = document.createElement('div');
      taskElement.className = 'task';
  
      const textElement = document.createElement('span');
      textElement.textContent = task.text;
      taskElement.appendChild(textElement);
  
      if (!task.completed) {
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
          tasks[index].completed = true;
          renderTaskList(tasks, container);
        });
        taskElement.appendChild(completeButton);
      }
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        tasks.splice(index, 1); // Remove a tarefa
        renderTaskList(tasks, container);
      });
      taskElement.appendChild(deleteButton);
  
      container.appendChild(taskElement);
    });
  }
  