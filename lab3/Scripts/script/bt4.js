
    let tasks = JSON.parse(localStorage.getItem('todo_tasks')) || [
    {id: 1, text: 'Việc 1', completed: true },
    {id: 2, text: 'Việc 2', completed: false },
    {id: 3, text: 'Việc 3', completed: false }
    ];


    function renderTasks() {
      const taskList = document.getElementById('taskList');
    const emptyState = document.getElementById('emptyState');
    const taskCounter = document.getElementById('taskCounter');

    taskList.innerHTML = '';

    if (tasks.length === 0) {
        emptyState.classList.remove('hidden');
    emptyState.classList.add('flex');
      } else {
        emptyState.classList.add('hidden');
    emptyState.classList.remove('flex');
      }

      tasks.forEach(task => {
        const li = document.createElement('li');
    li.className = 'task-item flex items-center justify-between px-6 py-4 hover:bg-gray-50/50';

    li.innerHTML = `
    <div class="flex items-center space-x-4 flex-1 mr-2 min-w-0">
        <input
            type="checkbox"
            class="custom-checkbox flex-shrink-0"
            ${task.completed ? 'checked' : ''}
            onchange="toggleTask(${task.id})"
        >
            <span class="task-text text-lg font-semibold text-gray-800 ${task.completed ? 'completed' : ''} truncate">
                ${escapeHtml(task.text)}
            </span>
    </div>
    <button
        onclick="deleteTask(${task.id})"
        class="text-gray-300 hover:text-red-500 transition-colors p-1"
        title="Xóa công việc"
    >
        <i class="fa-solid fa-trash-can"></i>
    </button>
    `;

    taskList.appendChild(li);
      });


      const activeCount = tasks.filter(t => !t.completed).length;
    taskCounter.textContent = `${activeCount} công việc chưa hoàn thành`;
    localStorage.setItem('todo_tasks', JSON.stringify(tasks));
    }

    function addTask() {
      const input = document.getElementById('taskInput');
    const text = input.value.trim();

    if (text === '') return;

    const newTask = {
        id: Date.now(),
    text: text,
    completed: false
      };

    tasks.push(newTask);
    input.value = '';
    renderTasks();
    }


    function handleKeyPress(event) {
      if (event.key === 'Enter') {
        addTask();
      }
    }


    function toggleTask(id) {
        tasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
    renderTasks();
    }

    function deleteTask(id) {
        tasks = tasks.filter(task => task.id !== id);
    renderTasks();
    }


    function clearCompleted() {
        tasks = tasks.filter(task => !task.completed);
    renderTasks();
    }


    function escapeHtml(text) {
      const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
    }


    window.onload = function() {
        renderTasks();
    };
