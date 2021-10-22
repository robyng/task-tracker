var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");



 var taskFormHandler = function(event) {

    event.preventDefault()
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    var taskNameInput = document.querySelector("input[name='task-name']").value;
  
     
// package data as an object
var taskDataObj = {
  name: taskNameInput,
  type: taskTypeInput
}

//send as argument to createTaskEl
createTaskEl(taskDataObj)
 }

 var createTaskEl = function(taskDataObj) {
 
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    
    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);
    
    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
  
 }
   
 

formEl.addEventListener("submit", taskFormHandler)