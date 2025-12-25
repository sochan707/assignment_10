// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function displayArray(array) {
   // 0 - Remove the old container if exists:
  let oldContainer = document.getElementById("listOfTasks");
  if (oldContainer !== null) {
    oldContainer.remove();
  }

  // 1 - From the parent body : create a new div  (class : container)
  let container = document.createElement("div");
  container.className = "container";
  container.id = "listOfTasks";

  document.body.appendChild(container);

  // 2 - For all tasks,  create a new div (class : item), and append it the container
  for (let task of array) {
    let item = document.createElement("div");
    item.className = "item";
    item.textContent = task.description;

    // the priority defines the color of your item (1 (HIGH) = red, 0 (LOW) = grey)
    let color = "red";
    if (task.priority === 0) {
      color = "grey";
    }
    item.style.backgroundColor = color;

    container.appendChild(item);
  }
}

function addItem() {
  // 1- Create a new task
  let newTask = {};

  //  2- Set the description from the text field
  descriptionValue = document.getElementById("description").value;
  newTask["description"] = descriptionValue;

  // 3- Set the priority fro from select field
  priorityValue = document.getElementById("priority").value;
  if (priorityValue === "Hight") {
    newTask["priority"] = 1;
  } else {
    newTask["priority"] = 0;
  }

  // 4- Add the new object to the array
  tasks.push(newTask);

  displayArray(tasks);
}

// function to filter the array and update the DOM depending on the value of the variable filter (0-not important or 1-important)
function show(priority) {
  // the parameter filter is equal to 0 or 1
  let filteredTasks = [];
  for (task of tasks) {
    // you want to add to your new list only the elements with the same importancy as the value of your filter = event.target (0 or 1)
    if (task.priority == priority) {
      filteredTasks.push(task);
    }
  }
  // you make the DOM with your new array filtered
  displayArray(filteredTasks);
}

// when you want to take off the filter, you just draw again with the original array of tasks that contains all the items
function showAll() {
  displayArray(tasks);
}

function showImportant() {
  show(1);
}

function showNotImportant() {
  show(0);
}
// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);

//   1 --> important item
let showImportantButton = document.getElementById("showImportantButton");
showImportantButton.addEventListener("click", showImportant);

// 0 --> not important item
let showNotImportantButton = document.getElementById("showNotImportantButton");
showNotImportantButton.addEventListener("click", showNotImportant);

// Take off the filters --> draw again
let showAllButton = document.getElementById("showAllButton");
showAllButton.addEventListener("click", showAll);
