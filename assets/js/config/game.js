class Game{
    constructor(){
        this.player;
        this.enemy = [];
    }
    load(){
        //loading enemy sprites
        enemySpriteNames.forEach((name) => {
            enemySpriteFiles.push(loadImage(spritePath+enemySpritePrefix+name+spriteFormat));
        });
        //loading player sprites
        playerSpriteNames.forEach((name) => {
            playerSpriteFiles.push(loadImage(spritePath+playerSpritePrefix+name+spriteFormat));
        });
        //loading sound tracks
        soundTrackNames.forEach((name) => {
            soundTrackFiles.push(loadSound(soundPath+soundTrackPath+name+soundFormat));
        });
        //loading sound effects
        soundEffectNames.forEach((name) => {
            soundEffectFiles.push(loadSound(soundPath+soundEffectPath+name+soundFormat));
        });
    }
    drawLoad(){
        
    }
    setup(){

    }
    draw(){

    }
}