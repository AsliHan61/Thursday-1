const canvas = document.getElementById('game-canvas');
const gameOverScreen = document.getElementById('game-over-screen');
const restartButton = document.getElementById('restart-button');



function showGameOver() {

    gameOverScreen.style.display = 'block';
}

restartButton.addEventListener('click', function() {
    canvas.style.display = 'block';
    gameOverScreen.style.display = 'none';
});

showGameOver();
