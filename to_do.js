// Get the task input field and add task button
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add event listener to the add task button
addTaskBtn.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    // Get the task text from the input field
    const taskText = taskInput.value.trim();

    // Check if the task text is not empty
    if (taskText !== '') {
        // Create a new task element
        const task = document.createElement('li');
        task.classList.add('task');

        // Create a span element to display the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Create a button element to delete the task
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteTask);

        // Append the task span and delete button to the task element
        task.appendChild(taskSpan);
        task.appendChild(deleteBtn);

        // Append the task element to the task list
        taskList.appendChild(task);

        // Clear the task input field
        taskInput.value = '';
    }
}

// Function to delete a task
function deleteTask(event) {
    // Get the task element that contains the delete button
    const task = event.target.parentNode;

    // Remove the task element from the task list
    taskList.removeChild(task);
}