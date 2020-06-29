class Sounds{
    constructor(effectFiles, soundFiles){
        this.isPlaying = true;
        this.soundFiles = soundFiles;
        this.effectFiles = effectFiles;
    }
    switchSound(value = !this.isPlaying){
        this.isPlaying = value;
        if(this.isPlaying){
            this.menuSoundPlay();
            this.gameSoundPlay();
            this.gameoverSoundPlay();
        }else{
            this.menuSoundStop();
            this.gameSoundStop();
            this.gameoverSoundStop();
        }
    }
    menuSoundPlay(){
        if(this.isPlaying){
            if(!this.soundFiles[0].isPlaying()){
                this.soundFiles[0].loop();
            }
        }
    }
    menuSoundStop(){
        if(this.soundFiles[0].isPlaying()){
            this.soundFiles[0].stop();
        }
    }
    gameSoundPlay(){
        if(this.isPlaying){
            if(!this.soundFiles[1].isPlaying()){
                this.soundFiles[1].loop();
            }
        }
    }
    gameSoundStop(){
        if(this.soundFiles[1].isPlaying()){
            this.soundFiles[1].stop();
        }
    }
    gameoverSoundPlay(){
        if(this.isPlaying){
            if(!this.soundFiles[2].isPlaying()){
                this.soundFiles[2].loop();
            }
        }
    }
    gameoverSoundStop(){
        if(this.soundFiles[2].isPlaying()){
            this.soundFiles[2].stop();
        }
    }
    playerJump(){
        if(this.isPlaying){
            this.effectFiles['jump'].play();
        }
    }
    playerHundredPoints(){
        if(this.isPlaying){
            this.effectFiles['hundred_points'].play();
        }
    }
    personaDeath(){
        if(this.isPlaying){
            this.effectFiles['death'].play();
        }
    }
}