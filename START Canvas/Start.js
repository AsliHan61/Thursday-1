window.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');
    
    function startAnimation() {
    canvas.style.background = 'darkgreen';
      context.clearRect(0, 0, canvas.width, canvas.height); 
      context.fillStyle = 'red';
      context.fillRect(50, 50, 100, 100);
    }
 const startButton = document.getElementById('startButton');

    startButton.addEventListener('click', startAnimation);

  });
  