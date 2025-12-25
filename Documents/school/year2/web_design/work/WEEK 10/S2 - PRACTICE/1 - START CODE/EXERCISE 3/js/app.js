const COLORS = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "gray"];

//
// Get a random color among the list of available colors
//
function randomColor() {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
}

//
// Create a new card
//
function createCard() {
  // 1 - Random color for card
  const card = document.createElement("div");
  card.className = "card";
  card.style.backgroundColor = randomColor();

  // 2 - Set card text
  const p = document.createElement("p");
  p.textContent = "Hello";
  card.appendChild(p);

  // 3 - Set card footer
  const demoFooter = document.querySelector(".card-footer");
  const footer = document.createElement("div");
  footer.className = demoFooter.className;
  card.appendChild(footer);

  //  4 - Manage footer button
  const footer_btn = document.createElement("button");
  footer_btn.textContent = "Remove Card";
  footer_btn.addEventListener("click", () => {
    card.remove();
  })
  footer.appendChild(footer_btn);
  card.appendChild(footer);


  // 5 - Add card to containers
  const container = document.querySelector(".container");
  container.appendChild(card);
}


//--------------------------------------------------
// Code Start
//--------------------------------------------------

const btnCreate = document.querySelector('#create');
const demo = document.querySelector(".card");
demo.style.display = "none";
btnCreate.addEventListener('click', createCard);