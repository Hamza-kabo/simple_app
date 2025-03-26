document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const addButton = document.getElementById("addTaskButton");

    // ✅ Function to add a task to the UI
    function addTaskUI() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        const li = document.createElement("li");
        li.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;
        taskList.appendChild(li);
        taskInput.value = "";
    }

    // ✅ Event listener for adding tasks
    addButton.addEventListener("click", addTaskUI); // Fix: Call addTaskUI()

    // ✅ Event delegation for deleting tasks
    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-btn")) {
            event.target.parentElement.remove();
        }
    });
});

// ✅ Task management functions (For testing)
let tasks = []; 

function addTask(task) {
    if (!task) return "Task cannot be empty"; 
    tasks.push(task);
    return tasks;
}

function deleteTask(task) {
    const index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
    }
    return tasks;
}

// ✅ Export only for testing (Only works in Node.js, not in browser)
if (typeof module !== "undefined") {
    module.exports = { addTask, deleteTask, tasks };
}
