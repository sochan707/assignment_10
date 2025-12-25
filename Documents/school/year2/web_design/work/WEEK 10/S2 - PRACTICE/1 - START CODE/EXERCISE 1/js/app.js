let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");

//  1- Move the item 3 to the second container
const num3 = container1.querySelector(".item:last-child");
container2.appendChild(num3);

//  2- Remove item 4
const num4 =container2.querySelector(".item");
num4.remove();

   
// 3- Create a new item 10 and add it to container 3
const num10 = document.createElement("div");
num10.className = num4.className;
num10.textContent = 10;
container3.appendChild(num10);


//  4- Set all items located in a blue container to red
[container1,container3].forEach((container)=> {
    [...container.children].forEach((item) => item.style.color = "red" )
})