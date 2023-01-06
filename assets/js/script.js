//add task button
const addTaskButton = document.getElementById("submit");
addTaskButton.addEventListener("click", addTask);
//clear all tasks button
const clearButton = document
  .getElementById("clearBtn")
  .addEventListener("click", clearTask);
//mark-as-complete button
const checkButton = document
  .getElementById("check")
  .addEventListener("click", checkTask);
//button for removing specific tasks
const trashButton = document
  .getElementById("trash")
  .addEventListener("click", trashTask);

//variables for dynamic list items
const taskItem = document.getElementById('taskItem');
const taskDescriptionItem = document.getElementById('taskDescription');
const assignedNameItem= document.getElementById('assignedName');
const dateItem = document.getElementById('dateItem');

//for validating task form field
const newTaskNameInput = document.querySelector("#newTaskName");
const taskName = newTaskNameInput.value;
console.log("Task name:" + taskName); //displays the new task field input to the console log testing

const nameInput = document.querySelector("#inputName");
const assignedName = nameInput.value;
console.log("Assigned name:" + assignedName); //displays the assigned to field input to the console log testing

const newTaskDescription = document.querySelector("#description");
const taskDescription = newTaskDescription.value;
console.log("Description:" + taskDescription); //displays the task description field input to the console log testing

const newTaskDate = document.querySelector("#date");
const date = newTaskDate.value;
console.log("Date:" + date); //displays selected date from field input to the console log for testing 

function addTask() { //sends an alert to the browser when this button is pressed for testing
}
  alert("Add Task!"); 

function clearTask() { //sends an alert to the browser when this button is pressed for testing
  alert("Cleared Task");
}

function checkTask() { //sends an alert to the browser when this button is pressed for testing
  alert("Task Complete!");
 taskItem.style.setProperty("text-decoration", "line-through") //adds 'strike-through' to text decoration
}
function trashTask() { //sends an alert to the browser when this button is pressed for testing


  alert("Task Removed!");
}