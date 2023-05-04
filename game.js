const canvas = document.getElementById('canvas');
const canvasContext = canvas.getContext('2d');
const pacmanFrames = document.getElementById('animation');
const ghostFrames = document.getElementById('ghosts');

let createRect = (x, y, width, height, color) => {
    canvasContext.fillStyle = color; 
    canvasContext.fillRect(x, y, width, height);
};
let fps = 30;
let oneBlockSize = 20;
let wallColor = "gold";
let wallSpaceWidth = oneBlockSize / 1.5;
let WallOffset = (oneBlockSize - wallSpaceWidth) / 2;
let WallInnerColor = "darkgreen";


let map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2],
    [1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1],
    [1, 1, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 1, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

let gameLoop = () => {
    update ()
    draw ()
};

let update = () => {
    // todo
};

let draw = () => {
    createRect(0,0, canvas.width, canvas.height, "darkgreen"); // => will turn the background black
    // todo
    drawWalls()
}

let gameInterval = setInterval(gameLoop, 1000 / fps);


let drawWalls = () => {
    for (let i = 0 ; i < map.length; i++) {
        for (let j = 0 ; j < map[0].length; j++) {
            if (map[i][j] == 1) { // then it is a wall
                createRect (
                    j * oneBlockSize, 
                    i * oneBlockSize, 
                    oneBlockSize, 
                    oneBlockSize, 
                    wallColor
                    ); // => Draw the map on the canvas
                    if (j > 0 && map [i][j - 1] == 1) {
                        createRect (
                            j * oneBlockSize, 
                            i * oneBlockSize + WallOffset,
                            wallSpaceWidth + WallOffset,
                            wallSpaceWidth, 
                            WallInnerColor,
                            ); 
                    }
                    if( j < map[0].length - 1 && map[i][j + 1] == 1) {
                        createRect(
                            j * oneBlockSize + WallOffset,
                            i * oneBlockSize + WallOffset,
                            wallSpaceWidth + WallOffset,
                            wallSpaceWidth,
                            WallInnerColor,
                        );
                    }
                    if (i > 0 && map [i -1][j] == 1) {
                        createRect (
                            j * oneBlockSize + WallOffset, 
                            i * oneBlockSize,
                            wallSpaceWidth,
                            wallSpaceWidth + WallOffset, 
                            WallInnerColor
                        ); 
                    }
                    if( i < map.length - 1 && map[i + 1][j] == 1) {
                        createRect(
                            j * oneBlockSize + WallOffset,
                            i * oneBlockSize + WallOffset,
                            wallSpaceWidth,
                            wallSpaceWidth + WallOffset,
                            WallInnerColor,
                        );
                    }
            }
        }
    }
};

//min 20:48