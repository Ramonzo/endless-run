class Game{
    constructor(){
    }
    load(){
        soundFormats(soundFormat);
        //loading enemy sprites
        enemySpriteNames.forEach((name) => {
            let file = spritePersonaPath+enemySpritePrefix+name+spriteFormat;
            enemySpriteFiles.push(loadImage(file));
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
    }
    drawLoad(){
    }
    setup(){
    }
    draw(){
        scenaries[0].draw();
        scenaries[1].draw();

        player.draw();

        scenaries[2].draw();
    }
    move(){
        scenaries.forEach((item) => {
            item.move();
        });
        player.move();
    }
    reset(){
        player = new Player(0, 100, height - skinParameters[playerSpriteNames[0]]['h']);
        enemies = [];
    }
}