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
    scenaries = [
                new Scenary(scenarySpriteFiles[0], height/2, width, height, 3),
                new Scenary(scenarySpriteFiles[1], height*60/100, width, height/7*4, 5),
                new Scenary(scenarySpriteFiles[2], height*95/100, width, height/15*2, 4)
            ];
}

function draw() {
    background(155);
    game.move();
    game.draw();
}

function keyPressed() {
    switch(key){
        case 'w':
            player.jump();
            //jump sound play
        break;
    }
}