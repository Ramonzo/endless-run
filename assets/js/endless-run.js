function preload(){
    //Default canvas configuration
    frameRate(30);

    game = new Game();
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    select('#canvas_content').child(canvas);
    game.load();
}

function draw() {
    background(255);
    if(state == stateGroup[0]){
        game.setup();
    }else if(state == stateGroup[1]){
        game.drawMenu();
    }else if(state == stateGroup[2]){
        game.move();
        game.draw();
    }
}

function keyPressed() {
    switch(key){
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