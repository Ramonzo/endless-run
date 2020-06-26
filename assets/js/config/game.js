class Game{
    constructor(){
    }
    load(){
        soundFormats(soundFormat);
        //loading enemy sprites
        enemySpriteNames.forEach((name) => {
            let file = spritePersonaPath+enemySpritePrefix+name+spriteFormat;
            enemySpriteFiles[name] = loadImage(file);
            if(isDebug){
                console.log(file);
            }
        });
        //loading player sprites
        playerSpriteNames.forEach((name) => {
            let file = spritePersonaPath+playerSpritePrefix+name+spriteFormat;
            playerSpriteFiles[name] = loadImage(file);
            if(isDebug){
                console.log(file);
            }
        });
        //loading scenary sprites
        scenarySpriteNames.forEach((name) => {
            let file = spriteScenaryPath+scenarySpritePrefix+name+spriteFormat;
            scenarySpriteFiles.push(loadImage(file));
            if(isDebug){
                console.log(file);
            }
        });
        //loading sound tracks
        soundTrackNames.forEach((name) => {
            let file = soundPath+soundTrackPath+name;
            soundTrackFiles.push(loadSound(file));
            if(isDebug){
                console.log(file);
            }
        });
        //loading sound effects
        soundEffectNames.forEach((name) => {
            let file = soundPath+soundEffectPath+name;
            soundEffectFiles.push(loadSound(file));
            if(isDebug){
                console.log(file);
            }
        });
        state = stateGroup[0];
    }
    play(){
        if(!soundTrackFiles[1].isPlaying()){
            soundTrackFiles[0].stop();
            soundTrackFiles[1].loop();
        }
        state = stateGroup[1];
    }
    drawLoad(){
    }
    setup(){
        player = new Player(playerSpriteNames[0], 100, height);

        scenaries = [
                    new Scenary(scenarySpriteFiles[0], height/2, width, height, 3),
                    new Scenary(scenarySpriteFiles[1], height*60/100, width, height/7*4, 5),
                    new Scenary(scenarySpriteFiles[2], height*95/100, width, height/15*2, 4)
                ];

        soundTrackFiles[0].loop();
        enemies[0] = new Enemy(playerSpriteNames[0], width, height);
    }
    draw(){
        //Back draw
        scenaries[0].draw();
        scenaries[1].draw();
        //Middle draw
        player.draw();

        enemies.forEach((enemy) => {
            enemy.draw();
        });
        //Top draw
        scenaries[2].draw();
    }
    move(){
        let direction = player.move();
        scenaries.forEach((item) => {
            item.move(direction, player.velocity);
        });
        enemies.forEach((enemy) => {
            enemy.move(direction, player.velocity);
        });
    }
    reset(){
        player = new Player(0, 100, height - skinParameters[playerSpriteNames[0]]['h']);
        enemies = [];
    }
}