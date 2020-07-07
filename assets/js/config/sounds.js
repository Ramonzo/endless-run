class Sounds{
    constructor(effectFiles, soundFiles){
        this.isPlaying = true;
        this.soundFiles = soundFiles;
        this.effectFiles = effectFiles;
        this.actualSoundTrack = this.soundFiles[0];
    }
    switchSound(value = !this.isPlaying){
        this.isPlaying = value;
        if(this.actualSoundTrack != null){
            if(this.isPlaying && !this.actualSoundTrack.isPlaying()){
                this.actualSoundTrack.loop();
            }else if(this.actualSoundTrack.isPlaying()){
                this.stopTrack(0);
                this.stopTrack(1);
                this.stopTrack(2);
            }
        }
    }
    menuSoundPlay(){
        this.playTrack(0);
    }
    gameSoundPlay(){
        this.playTrack(1);
    }
    gameoverSoundPlay(){
        this.playTrack(2);
    }
    playTrack(id){
        if(this.actualSoundTrack != this.soundFiles[id]){
            if(this.actualSoundTrack != null && this.actualSoundTrack.isPlaying()){
                this.actualSoundTrack.stop();
            }
            this.actualSoundTrack = this.soundFiles[id];
            if(this.isPlaying){
                this.actualSoundTrack.loop();
            }
        }
    }
    stopTrack(id){
        if(this.actualSoundTrack == this.soundFiles[id]){
            if(this.actualSoundTrack.isPlaying()){
                this.actualSoundTrack.stop();
            }
        }
    }
    powerUp(type){
        if(this.isPlaying){
            this.effectFiles[type+'_powerup'].play();
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