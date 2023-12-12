const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="completeTask(this)">Complete</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
}

function completeTask(button) {
    const taskItem = button.parentElement;
    taskItem.classList.toggle('completed');
    alert('completed')
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);
    alert('deleted')
}