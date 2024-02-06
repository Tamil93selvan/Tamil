const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function removeTask(button) {
    const taskItem = button.parentNode;
    taskList.removeChild(taskItem);
}
