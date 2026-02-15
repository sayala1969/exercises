console.log('Running button exercise loaded. Please check the instructions in the HTML file.');
document.querySelector('.running-button').addEventListener('hover', (event) => {
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    event.target.style.position = 'absolute';
    event.target.style.left = `${randomX}px`;
    event.target.style.top = `${randomY}px`;
});