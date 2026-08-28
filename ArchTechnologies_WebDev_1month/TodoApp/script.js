
// ArchTechnologies_WebDev_1month\TodoApp\script.js

// =========================
// TODO APP
// =========================

// Get HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const emptyMessage = document.getElementById("emptyMessage");
const currentYear = document.getElementById("currentYear");


// =========================
// LOAD SAVED TASKS
// =========================

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// =========================
// DISPLAY TASKS
// =========================

function displayTasks() {

    // Clear existing task list
    taskList.innerHTML = "";


    // Display each task
    tasks.forEach((task, index) => {

        // Create list item
        const li = document.createElement("li");

        // Apply the CSS class
        li.classList.add("task-item");

        // Add completed class if task is completed
        if (task.completed) {
            li.classList.add("completed");
        }


        // Create task text
        const taskText = document.createElement("span");
        taskText.classList.add("task-text");
        taskText.textContent = task.text;


        // Create action container
        const taskActions = document.createElement("div");
        taskActions.classList.add("task-actions");


        // Create Complete / Undo button
        const toggleButton = document.createElement("button");

        toggleButton.textContent =
            task.completed ? "Undo" : "Complete";

        toggleButton.addEventListener("click", () => {
            toggleTask(index);
        });


        // Create Edit button
        const editButton = document.createElement("button");

        editButton.textContent = "Edit";

        editButton.addEventListener("click", () => {
            editTask(index);
        });


        // Create Delete button
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", () => {
            deleteTask(index);
        });


        // Add buttons to action container
        taskActions.appendChild(toggleButton);
        taskActions.appendChild(editButton);
        taskActions.appendChild(deleteButton);


        // Add content to list item
        li.appendChild(taskText);
        li.appendChild(taskActions);


        // Add task to list
        taskList.appendChild(li);
    });


    // =========================
    // UPDATE TASK COUNT
    // =========================

    taskCount.textContent = tasks.length;


    // =========================
    // SHOW / HIDE EMPTY MESSAGE
    // =========================

    if (tasks.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}


// =========================
// ADD TASK
// =========================

function addTask() {

    const taskText = taskInput.value.trim();


    // Prevent empty tasks
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }


    // Create new task
    const newTask = {
        text: taskText,
        completed: false
    };


    // Add task to array
    tasks.push(newTask);


    // Save to LocalStorage
    saveTasks();


    // Clear input
    taskInput.value = "";


    // Refresh task list
    displayTasks();


    // Put cursor back in input
    taskInput.focus();
}


// =========================
// COMPLETE / UNDO TASK
// =========================

function toggleTask(index) {

    tasks[index].completed = !tasks[index].completed;

    saveTasks();

    displayTasks();
}


// =========================
// EDIT TASK
// =========================

function editTask(index) {

    const newText = prompt(
        "Edit your task:",
        tasks[index].text
    );


    // User cancelled
    if (newText === null) {
        return;
    }


    const updatedText = newText.trim();


    // Prevent empty task
    if (updatedText === "") {
        alert("Task cannot be empty.");
        return;
    }


    // Update task
    tasks[index].text = updatedText;


    // Save changes
    saveTasks();


    // Refresh task list
    displayTasks();
}


// =========================
// DELETE TASK
// =========================

function deleteTask(index) {

    tasks.splice(index, 1);

    saveTasks();

    displayTasks();
}


// =========================
// LOCAL STORAGE
// =========================

function saveTasks() {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}


// =========================
// ADD BUTTON
// =========================

addTaskBtn.addEventListener("click", addTask);


// =========================
// ENTER KEY
// =========================

taskInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        addTask();
    }

});


// =========================
// CURRENT YEAR
// =========================

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// =========================
// INITIAL DISPLAY
// =========================

displayTasks();
