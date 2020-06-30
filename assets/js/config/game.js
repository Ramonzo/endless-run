class Game{
    constructor(){
        this.soundButton = new VolumeButton();
        this.pauseButton = new PauseButton();
        this.pauseButton.onClicked(this.pause);
        this.shareButton = select('#share_button');
        this.shareButton.hide();

        this.loadScreen = new LoadScreen();
        this.loadScreen.createScreen();

        this.mainMenu = new MainMenu();
        this.mainMenu.createMenu([
                                        ['Jogar', this.play],
                                        ['Instruções', this.play],
                                        ['Sobre', this.play]
                                    ]);
        this.pauseMenu = new PauseMenu('Pause');
        this.pauseMenu.createMenu([
                                            ['Voltar', this.resume],
                                            ['Reiniciar', this.play],
                                            ['Instruções', this.play],
                                            ['Sair', this.quit]
                                        ]);
        this.totalAssets =  playerSpriteNames.length + 
                            enemySpriteNames.length + 
                            scenarySpriteNames.length + 
                            iconsSpriteNames.length +
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
        //loading icons sprites
        iconsSpriteNames.forEach((name) => {
            let file = spriteIconPath+name+spriteFormat;
            iconsSpiteFiles.push(loadImage(file, () => {this.loadedAssets++;}));
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
        this.loadScreen.showScreen();
        this.loadScreen.update((this.loadedAssets/this.totalAssets)*100);
        if(this.loadedAssets >= this.totalAssets){
            sounds = new Sounds(soundEffectFiles, soundTrackFiles);

            sounds.menuSoundPlay();

            this.loadScreen.hideScreen();
            state = stateGroup[1];
        }
    }
    drawMainMenu(){
        this.shareButton.show();
        this.soundButton.show();

        this.mainMenu.showMenu();
        this.pauseMenu.hideMenu();

        sounds.menuSoundPlay();
    }
    drawPauseMenu(){
        this.shareButton.show();
        this.soundButton.show();
        game.pauseButton.hide();

        this.pauseMenu.showMenu();

        sounds.menuSoundPlay();
    }
    resume(){
        game.shareButton.hide();
        game.mainMenu.hideMenu();
        game.pauseMenu.hideMenu();
        game.soundButton.show();
        game.pauseButton.show();

        sounds.gameSoundPlay();

        state = stateGroup[2];
    }
    play(){
        game._createGame();

        game.shareButton.hide();
        game.mainMenu.hideMenu();
        game.pauseMenu.hideMenu();
        game.soundButton.show();
        game.pauseButton.show();

        sounds.gameSoundPlay();

        state = stateGroup[2];
    }
    pause(){
        state = stateGroup[3];
        game.drawPauseMenu();
    }
    quit(){
        state = stateGroup[1];
        game.pauseMenu.hideMenu();
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
        player.pointCounter();
        let direction = player.move();
        scenaries.forEach((item) => {
            item.move(direction, player.velocity);
        });
        enemies.forEach((enemy) => {
            enemy.move(direction, player.velocity);
        });
    }
    _createGame(){
        player = new Player(playerSpriteNames[0], 100, height);

        scenaries = [
                    new Scenary(scenarySpriteFiles[0], height/2, width, height, 3),
                    new Scenary(scenarySpriteFiles[1], height*60/100, width, height/7*4, 5),
                    new Scenary(scenarySpriteFiles[2], height*95/100, width, height/15*2, 4)
                ];

        enemies[0] = new Enemy(playerSpriteNames[0], width, height);
    }
}