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
  const card = document.createElement('div');
  card.classList.add('card');

  // 1 - Random color for card
  card.style.backgroundColor = randomColor();
 
   
  // 2 - Set card text
  const cardText = document.createElement('p');
  cardText.textContent = 'Hello';
  card.appendChild(cardText);
  
  // 3 - Set card footer
  const cardFooter = document.createElement('div');
  cardFooter.classList.add('card-footer');
  card.appendChild(cardFooter);

  const container = document.querySelector('.container');

  //  4 - Manage footer button
  const cardButton = document.createElement('button');
  cardButton.textContent = 'Remove Card';
  cardButton.addEventListener('click', (event) => {
    container.removeChild(card);
  });
  cardFooter.appendChild(cardButton);

  // 5 - Add card to containers
  container.appendChild(card)
}


//--------------------------------------------------
// Code Start
//--------------------------------------------------

const btnCreate = document.querySelector('#create');
btnCreate.addEventListener('click', createCard);