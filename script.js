

// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add task function
addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim(); // Get and trim the input value
    if (taskText !== '') {
        addTask(taskText); // Add task if input is not empty
        taskInput.value = ''; // Clear the input
    }
});

// Function to create a new task element
function addTask(taskText) {
    const li = document.createElement('li'); // Create a new list item
    li.textContent = taskText; // Set the text content

    // Create a delete button for the task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        li.remove(); // Remove the task when delete button is clicked
    });

    // Add event listener to mark task as completed
    li.addEventListener('click', function() {
        li.classList.toggle('completed'); // Toggle the 'completed' class
    });

    li.appendChild(deleteBtn); // Append delete button to the task
    taskList.appendChild(li); // Append the task to the task list
}
