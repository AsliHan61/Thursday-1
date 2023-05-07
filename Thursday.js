
class Thursday {
    constructor (x, y, width, height, speed){
        this.x = 400,
        this.y = 240,
        this.width = width
        this.height = height
        this.speed = speed
        this.direction;
        this.nextDirection = this.direction;
        this.currentFrame = 1;
        this.frameCount = 7;

        setInterval(() => {
            this.changeAnimation ();
        }, 100);
    }

    moveProcess () {
        this.changeDirectionIfPossible();
        this.moveForwards();
        if (this.checkCollision()) {
            this.moveBackwards();
        }
    }

    eat () {

    }

    moveBackwards () {
        switch (this.direction) {
            case DIRECTION_RIGHT:
                this.x -= this.speed;
                break;
            case DIRECTION_UP:
                this.y += this.speed;
                break;
            case DIRECTION_LEFT:
                this.x += this.speed;
                break;
            case DIRECTION_BOTTOM:
                this.y -= this.speed;
                break;
        }
    }

    moveForwards () {
        switch (this.direction) {
            case DIRECTION_RIGHT:
                this.x += this.speed;
                break;
            case DIRECTION_UP:
                this.y -= this.speed;
                break;
            case DIRECTION_LEFT:
                this.x -= this.speed;
                break;
            case DIRECTION_BOTTOM:
                this.y += this.speed;
                break;
        }
    }

    checkCollision() {
        let isCollided = false;
        if (
            map [this.getMapY () ] [this.getMapX () ] == 1 ||
            map [this.getMapYRightSide () ] [this.getMapX () ] == 1 ||
            map [this.getMapY () ] [this.getMapXRightSide () ] == 1 ||
            map [this.getMapYRightSide () ] [this.getMapXRightSide () ] == 1
        ) {
            return true;
        }
            return false;
    }

    checkGhostCollision () {

    }
    
    changeDirectionIfPossible () {
        if(this.direction == this.nextDirection) return;
        let tempDirection = this.direction;
        this.direction = this.nextDirection;
        this.moveForwards();
        if (this.checkCollision()) {
            this.moveBackwards;
        }
    }

    changeAnimation () {
        this.currentFrame = this.currentFrame == this.currentFrame ? 1 : this.currentFrame + 1;
    }

    draw () {
        canvasContext.save();
        canvasContext.translate(
            this.x + oneBlockSize/ 2, 
            this.y + oneBlockSize/ 2
            );
            canvasContext.rotate((this.direction * 90 * Math.PI) / 180);

            canvasContext.translate(
                -this.x - oneBlockSize / 2, 
                -this.y - oneBlockSize / 2
            );
                
            canvasContext.drawImage(
                thursdayFrames,
                (this.currentFrame, -1) / oneBlockSize,
                0, 
                oneBlockSize, 
                oneBlockSize, 
                this.x, // this.x = 400, 
                this.y, // this.y = 240, 
                this.width, 
                this.height
            );
            canvasContext.restore();
    }

    getMapX () {
        return parseInt (this.x / oneBlockSize)
    }

    getMapY () {
        return parseInt (this.y / oneBlockSize)
    }

    getMapXRightSide () {
        return parseInt ((this.x + 0.9999 * oneBlockSize) / oneBlockSize);
    }

    getMapYRightSide () {
        return parseInt ((this.y + 0.9999 * oneBlockSize) / oneBlockSize);
    }

}
window.addEventListener("keydown", (event) => {
    let k = event.keyCode
    setTimeout(() => {
        if(k == 37 || k== 65) { // left
            thursday.nextDirection = DIRECTION_LEFT;
        } else if (k == 38 || k == 87) { // up
            thursday.nextDirection = DIRECTION_UP;
        } else if (k == 39 || k == 68) { // right
            thursday.nextDirection = DIRECTION_RIGHT;
        } else if (k == 40 || k == 83) { //bottom
            thursday.nextDirection = DIRECTION_BOTTOM;

        }
    }, 1)
})
