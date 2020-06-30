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
    switch(state){
        case stateGroup[0]:
            game.setup();
        break;
        case stateGroup[1]:
            game.drawMainMenu();
        break;
        case stateGroup[2]:
            game.move();
            game.draw();
        break;
        case stateGroup[3]:
            game.draw();
        break;
    }
}

function keyPressed() {
    switch(key){
        case 'w':
            if(state == stateGroup[2]){
                player.jump();
                //jump sound play
            }
        break;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}