window.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');
    const imageSources = [
    "../assests/thursday1.jpg",
    "../assests/Classroom.jpg",
    ];
    image.addEventListener('load',function(){
      const desiredWidth=150;
      const desiredHeight=150;
      context.drawImage(image, 0, 150, desiredWidth, desiredHeight);
    });
    function startAnimation() {
    canvas.style.background = 'darkgreen';
      context.clearRect(0, 0, canvas.width, canvas.height); 
      context.fillStyle = 'gold';
      context.fillRect(25, 25, 50, 50);
    }
 const startButton = document.getElementById('startButton');

    startButton.addEventListener('click', startAnimation);

  });
  