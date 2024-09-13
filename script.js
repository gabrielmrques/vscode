const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
  const newTask = taskInput.value;
  if (newTask !== '') {
    const li = document.createElement('li');
    li.textContent = newTask;
    taskList.appendChild(li);
    taskInput.value = '';

    
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    li.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      li.remove();
    });
  }
});

const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(Array.from(taskList.children).map(li => li.textContent)));
  };
  
  const loadTasks = () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      storedTasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
        
      });
    }
  };
  

  li.addEventListener('dblclick', () => {
    const input = document.createElement('input');
    input.value = li.textContent;
    li.textContent = '';
    li.appendChild(input);
    input.focus();
  
    input.addEventListener('blur', () => {
      li.textContent = input.value;
      saveTasks();
    });
  });
  
  loadTasks();