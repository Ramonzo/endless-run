function preload(){
    //Default canvas configuration
    frameRate(30);

    game = new Game();
    game.load();
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    select('#canvas_container').child(canvas);
    game.setup();
}

function draw() {
    background(255);
    if(state == stateGroup[0]){
        game.play();
    }else{
        game.move();
        game.draw();
    }
}

function keyPressed() {
    switch(key){
        case 'p':
            state = stateGroup[1];
        break;
        case 'w':
            if(state == stateGroup[1]){
                player.jump();
                //jump sound play
            }
        break;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}