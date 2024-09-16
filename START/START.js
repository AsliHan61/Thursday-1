window.addEventListener('DOMContentLoaded', (event)=>{
    const canvas =document.getElementById('myCanvas');
    const context = canvas.getContext('2d');
    const imageSources= [
        '../assests/Classroom.jpg',
        '../assests/thursday1.jpg',
]});

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "../assests/Classroom.jpg") {
      this.image = new Image();
      this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
      ctx = myGameArea.context;
      if (type == "../assests/Classroom.jpg") {
        ctx.drawImage(this.image,
          this.x,
          this.y,
          this.width, this.height);
      } else {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    }
  }