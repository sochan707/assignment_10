let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");

//  1- Move the item 3 to the second container
let item3 = container1.children[2];
container2.appendChild(item3);

//  2- Remove item 4
let item4 = container2.children[0];
container2.removeChild(item4);

// 3- Create a new item 10 and add it to container 3
let newItem10 = document.createElement("div");
newItem10.className = "item";
newItem10.textContent = "10";
container3.appendChild(newItem10);

//  4- Set all item in blue containers  background color to  red
let allItemsInBlue = document.querySelectorAll(".containerBlue .item");
for (element of allItemsInBlue) {
  element.style.color = "red";
}
