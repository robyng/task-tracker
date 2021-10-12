
var tasksToDoEl = document.querySelector("#tasks-to-do");
var buttonEl = document.querySelector("#save-task");


var createTaskHandler = function() {
    buttonEl.addEventListener("click", function() {
        var taskItemEl = document.createElement("li");
        taskItemEl.className = "task-item";
        taskItemEl.textContent = "this is new task";
        taskItemEl;
        tasksToDoEl.appendChild(taskItemEl);
     })
}

buttonEl.addEventListener("click", createTaskHandler)
