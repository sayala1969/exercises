// This will run as soon as the DOM is fully loaded
// MEDIUM: Display the current dimensions of the box inside the box itself (e.g., "100x100")
const box = document.querySelector('.box'); // select the box element
const boxWidth = box.offsetWidth; // get the current width of the box
const boxHeight = box.offsetHeight; // get the current height of the box
box.textContent = boxWidth + 'x' + boxHeight; // set the text content of the box to display its dimensions


// Add event listeners to the sliders to adjust the width and height of the box
document.querySelector('._width').addEventListener('input', (event) => {
    // EASY: Adjust the width of the box based on the slider value
    const width = event.target.value;
    document.querySelector('.box').style.width = `${width}px`;
    // HARD: Ensure that the dimensions update in real-time as the sliders are adjusted
    const boxText = document.querySelector('.box').textContent;
    const currentDimensionArray = boxText.split('x');
    const currentHeight = currentDimensionArray[1];
    document.querySelector('.box').textContent = `${width}x${currentHeight}`;
});

// Add event listeners to the sliders to adjust the width and height of the box
document.querySelector('._height').addEventListener('input', (event) => {
    // EASY: Adjust the height of the box based on the slider value
    const height = event.target.value;
    document.querySelector('.box').style.height = `${height}px`;
    // HARD: Ensure that the dimensions update in real-time as the sliders are adjusted
    const boxText = document.querySelector('.box').textContent;
    const currentDimensionArray = boxText.split('x');
    const currentWidth = currentDimensionArray[0];
    document.querySelector('.box').textContent = `${currentWidth}x${height}`;
});