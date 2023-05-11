
const startCanvas = document.getElementById('startScreen');
const ctx= startCanvas.getContext('2d');


const image1 = new Image();
image1.src = './assests/Classroom.jpg';
image1.onload = function() {

    ctx.drawImage(image1, 0, 0, startCanvas.width / 2, startCanvas.height);

  const image2 = new Image();
  image2.src = './assests/thursday1.jpg';
  image2.onload = function() {
    ctx.drawImage(image2, startCanvas.width / 2, 0, startCanvas.width / 2, startCanvas.height);

    ctx.beginPath();
    ctx.moveTo(120, 220);
    ctx.arcTo(180, 220, 180, 190, 20);
    ctx.arcTo(180, 160, 150, 160, 20);
    ctx.arcTo(120, 160, 120, 190, 20);
    ctx.arcTo(120, 220, 150, 220, 20);
    ctx.closePath();
    ctx.fillStyle = 'white';
    ctx.fill();

    ctx.font = '14px Lobster';
    ctx.fillStyle = 'darkgreen';
    ctx.fillText('Hi! My name is Thursday. Help me to get to my class on time.', 152, 192);
  };
};

const startButton= document.getElementById('startButton');

startButton.addEventListener('click', function(){
console.log('Start button clicked!');
document.getElementById("startScreen").style.display = "none";
document.getElementById("startButton").style.display = "none";

document.getElementById("gameScreen").style.display = "block";
});