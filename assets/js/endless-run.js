function preload(){
    //Default canvas configuration
    frameRate(30);

    game = new Game();
    game.load();
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    select('#canvas_container').child(canvas);

    player = new Player(0, 100, height);
}

function draw() {
    background(155);
    //game.move();
    game.draw();
}

function keyPressed() {
    if (key === 'ArrowUp') {
        player.jump();
        //jump sound play
    }
}