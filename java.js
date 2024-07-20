let display = document.getElementById('display');

// Function to handle input when a button is pressed
function input(value) {
    if (display.value === '0') {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Function to clear the display when the 'DEL' button is pressed
function clearDisplay() {
    display.value = '0';
}

// Function to perform the square root calculation
function squareRoot() {
    try {
        // Calculate the square root of the current value
        display.value = Math.sqrt(eval(display.value));
    } catch (e) {
        display.value = 'Error';
    }
}

// Function to perform the calculation when the '=' button is pressed
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function modechange() {
    var body = document.body;
    var currentColor = body.style.backgroundColor;

    
    if (currentColor === 'white' || currentColor === '') {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
}

