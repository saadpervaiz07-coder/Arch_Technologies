
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

        const li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <span class="task-text">${task.text}</span>

            <div class="task-actions">

                <button onclick="toggleTask(${index})">
                    ${task.completed ? "Undo" : "Complete"}
                </button>

                <button onclick="editTask(${index})">
                    Edit
                </button>

                <button onclick="deleteTask(${index})">
                    Delete
                </button>

            </div>
        `;

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

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }


    const newTask = {
        text: taskText,
        completed: false
    };


    tasks.push(newTask);

    saveTasks();

    taskInput.value = "";

    displayTasks();

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


    if (newText === null) {
        return;
    }


    const updatedText = newText.trim();


    if (updatedText === "") {
        alert("Task cannot be empty.");
        return;
    }


    tasks[index].text = updatedText;

    saveTasks();

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
