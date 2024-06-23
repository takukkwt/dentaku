let currentInput = '0';

function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    document.getElementById('display').textContent = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    document.getElementById('display').textContent = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('display').textContent = currentInput;
    } catch (error) {
        currentInput = 'Error';
        document.getElementById('display').textContent = currentInput;
    }
}
