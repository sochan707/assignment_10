 

// Generate a random hexadecimal color
function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// When clicking on the RANDOM COLOR button:
// -	Generate a random color
// -	Set the body background color with this color
// -	Set the color label with the value of this color

const color_btn = document.querySelector("button");
const ran_color = document.getElementById("result-color");

color_btn.addEventListener("click", () => {
    const new_color = getRandomHexColor();
    document.body.style.backgroundColor = new_color;
    ran_color.textContent = new_color;
    
});



 

