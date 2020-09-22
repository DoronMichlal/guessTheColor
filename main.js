let numOfCircles = 6;
let colors = generateRandomColors(numOfCircles);

let circles = document.querySelectorAll('.color');
let colorDisplay = document.querySelector('#colorDisplay');
let pickedColor = pickColor();
let messageDisplay = document.querySelector('#message');
let resetButton = document.querySelector('#reset');
let modeButtons = document.querySelectorAll('.mode');
let easyBtn = document.querySelector('#easyBtn');
let hardBtn = document.querySelector('#hardBtn');

/* INITIALIZE */
colorDisplay.textContent = pickedColor;

for (let i = 0; i < circles.length; i++) {
    // Add initial colors to circles
    circles[i].style.backgroundColor = colors[i];

    // Add click listeners to circles
    circles[i].addEventListener('click', function () {
        // Grab color of clicked circle
        let clickedColor = this.style.backgroundColor;

        // Compare color to picked color
        if (clickedColor === pickedColor) {
            // CORRECT COLOR
            messageDisplay.textContent = 'Correct!';
            changeColors(clickedColor);
            resetButton.textContent = 'Play Again?';
        } else {
            // WRONG COLOR
            this.style.backgroundColor = '#333';
            messageDisplay.textContent = 'Try Again!';
        }
    });
}

function changeColors(color) {
    // Loop through all circles

    for (let i = 0; i < circles.length; i++) {
        // Change each color to match given color
        circles[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let arr = [];

    // Add num random color to array
    for (let i = 0; i < num; i++) {
        // Get random color
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    // Pick Red from 0 to 255
    let red = Math.floor(Math.random() * 256);
    // Pick Green from 0 to 255
    let green = Math.floor(Math.random() * 256);
    // Pick Blue from 0 to 255
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

/* Game Modes */
easyBtn.addEventListener('click', function () {
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
    messageDisplay.textContent = '';
    resetButton.textContent = 'New Colors';
    numOfCircles = 3;

    colors = generateRandomColors(numOfCircles);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    // Hide the last 3 circles
    document.querySelector('#container').style.height = '240px';
    circles[3].style.display = 'none';
    circles[4].style.display = 'none';
    circles[5].style.display = 'none';

    for (i = 0; i < circles.length; i++) {
        if (colors[i]) {
            circles[i].style.backgroundColor = colors[i];
        }
    }
});

hardBtn.addEventListener('click', function () {
    easyBtn.classList.remove('selected');
    hardBtn.classList.add('selected');
    messageDisplay.textContent = '';
    resetButton.textContent = 'New Colors';
    numOfCircles = 6;

    colors = generateRandomColors(numOfCircles);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    // Show the last 3 circles
    document.querySelector('#container').style.height = '460px';
    circles[3].style.display = 'block';
    circles[4].style.display = 'block';
    circles[5].style.display = 'block';

    for (i = 0; i < circles.length; i++) {
        if (colors[i]) {
            circles[i].style.backgroundColor = colors[i];
        }
    }
});

/* New Colors Button */
resetButton.addEventListener('click', function () {
    // Generate all new colors
    colors = generateRandomColors(numOfCircles);

    // Pick a new random color from array
    pickedColor = pickColor();

    // Change color display to match picked color
    colorDisplay.textContent = pickedColor;

    // Change colors of circles
    for (let i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = colors[i];
    }

    //Reset message + reset button text
    messageDisplay.textContent = '';
    resetButton.textContent = 'New Colors';
});
