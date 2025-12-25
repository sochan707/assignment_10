 

// Generate a random hexadecimal color
function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// Event handling
 
const randomButton = document.querySelector('button');


randomButton.addEventListener('click', function() {
    let generateColor = getRandomHexColor();

    // 1 - Update the label
    const colorLabel = document.querySelector('#result-color');
    colorLabel.textContent = generateColor;
    colorLabel.style.color = generateColor;

    // 2 - UPdate the body bakcgroun
    document.body.style.backgroundColor = generateColor;
});

