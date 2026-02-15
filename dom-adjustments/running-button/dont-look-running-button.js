
function getRandomPositionEvent(event) {
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    event.target.style.position = 'absolute';
    event.target.style.left = `${randomX}px`;
    event.target.style.top = `${randomY}px`;
}

function runnerButtonClickEvent(event) {
    // do something
    document.querySelector('.scrim').style.display = 'flex';
}

document.querySelector('.pretty-button.run').addEventListener('mouseenter', getRandomPositionEvent);

document.querySelector('.pretty-button.run').addEventListener('click', runnerButtonClickEvent);

function freezeRunningButton() {
    console.log('Freezing the running button!');
    document.querySelector('.pretty-button.run').removeEventListener('mouseenter', getRandomPositionEvent);
}

document.querySelector('.pretty-button.freeze').addEventListener('click', freezeRunningButton);