class Game{
    constructor(){
    }
    load(){
        soundFormats(soundFormat);
        //loading enemy sprites
        enemySpriteNames.forEach((name) => {
            let file = spritePath+enemySpritePrefix+name+spriteFormat;
            enemySpriteFiles.push(loadImage(file));
            if(isDebug){
                console.log(file);
            }
        });
        //loading player sprites
        playerSpriteNames.forEach((name) => {
            let file = spritePath+playerSpritePrefix+name+spriteFormat;
            playerSpriteFiles[name] = loadImage(file);
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
        player.draw();
    }
    move(){
        player.move();
    }
    reset(){
        player = new Player(0, 100, height - skinParameters[playerSpriteNames[0]]['h']);
        enemies = [];
    }
}