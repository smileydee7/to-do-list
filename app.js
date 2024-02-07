const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask();
});

function addTask() {
    const task = taskInput.value.trim();
    if (task) {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = `
            <input type="checkbox">
            <span>${task}</span>
            <button>Delete</button>
        `;
        taskList.appendChild(taskElement);
        taskInput.value = "";
        addDeleteEventToTask(taskElement);
    }
}

function addDeleteEventToTask(taskElement) {
    const deleteButton = taskElement.querySelector("button");
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskElement);
    });
}