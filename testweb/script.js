// Simple JS interaction
const button = document.getElementById('clickMeBtn');
const output = document.getElementById('output');

button.addEventListener('click', () => {
    const date = new Date();
    output.textContent = `Button clicked! Current time: ${date.toLocaleTimeString()}`;
});
