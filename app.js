function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value === '') {
      return;
    }
  
    const taskItem = document.createElement('li');
    taskItem.innerText = taskInput.value;
  
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = function () {
      taskItem.remove();
    };
  
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  
    taskInput.value = '';
  }
  