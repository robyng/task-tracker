var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

 var createTaskHandler = function() {
   var listItemEl = document.createElement("li");
   listItemEl.className = "task-item";
   listItemEl.textContent = "this is new task";
   tasksToDoEl.appendChild(listItemEl);
   console.log(createTaskHandler)
 };

buttonEl.addEventListener("click", createTaskHandler)
