class Game{
    constructor(){
        this.soundButton = new VolumeButton();
        this.shareButton = select('#share_button');
        this.shareButton.hide();

        this.loadBar = new LoadBar();
        this.loadBar.createScreen();

        this.mainMenu = new MainMenu();
        this.mainMenu.createMainMenu([
                                        ['Jogar', this.play],
                                        ['Instruções', this.play],
                                        ['Sobre', this.play]
                                    ]);
        
        this.totalAssets = enemySpriteNames.length + 
                            playerSpriteNames.length + 
                            scenarySpriteNames.length + 
                            soundTrackNames.length + 
                            soundEffectNames.length;
        this.loadedAssets = 0;
        state = stateGroup[0];
    }
    load(){
        soundFormats(soundFormat);
        //loading enemy sprites
        enemySpriteNames.forEach((name) => {
            let file = spritePersonaPath+enemySpritePrefix+name+spriteFormat;
            enemySpriteFiles[name] = loadImage(file, () => {this.loadedAssets++;});
            if(isDebug){
                console.log(file);
            }
        });
        //loading player sprites
        playerSpriteNames.forEach((name) => {
            let file = spritePersonaPath+playerSpritePrefix+name+spriteFormat;
            playerSpriteFiles[name] = loadImage(file, () => {this.loadedAssets++;});
            if(isDebug){
                console.log(file);
            }
        });
        //loading scenary sprites
        scenarySpriteNames.forEach((name) => {
            let file = spriteScenaryPath+scenarySpritePrefix+name+spriteFormat;
            scenarySpriteFiles.push(loadImage(file, () => {this.loadedAssets++;}));
            if(isDebug){
                console.log(file);
            }
        });
        //loading sound tracks
        soundTrackNames.forEach((name) => {
            let file = soundPath+soundTrackPath+name;
            soundTrackFiles.push(loadSound(file, () => {this.loadedAssets++;}));
            if(isDebug){
                console.log(file);
            }
        });
        //loading sound effects
        soundEffectNames.forEach((name) => {
            let file = soundPath+soundEffectPath+name;
            soundEffectFiles[name] = loadSound(file, () => {this.loadedAssets++;});
            if(isDebug){
                console.log(file);
            }
        });
    }
    setup(){
        this.loadBar.showScreen();
        this.loadBar.update((this.loadedAssets/this.totalAssets)*100);
        if(this.loadedAssets >= this.totalAssets){
            sounds = new Sounds(soundEffectFiles, soundTrackFiles);

            sounds.menuSoundPlay();

            player = new Player(playerSpriteNames[0], 100, height);

            scenaries = [
                        new Scenary(scenarySpriteFiles[0], height/2, width, height, 3),
                        new Scenary(scenarySpriteFiles[1], height*60/100, width, height/7*4, 5),
                        new Scenary(scenarySpriteFiles[2], height*95/100, width, height/15*2, 4)
                    ];

            enemies[0] = new Enemy(playerSpriteNames[0], width, height);

            this.loadBar.hideScreen();
            state = stateGroup[1];
        }
    }
    drawMenu(){
        this.shareButton.show();
        this.soundButton.show();

        this.mainMenu.showMainMenu();

        sounds.menuSoundPlay();
        sounds.gameSoundStop();
    }
    play(){
        sounds.menuSoundStop();
        sounds.gameSoundPlay();

        game.shareButton.hide();
        game.mainMenu.hideMainMenu();

        state = stateGroup[2];
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