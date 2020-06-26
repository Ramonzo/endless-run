class Animation{
    constructor(spriteId){
        this.spriteId = spriteId;
        this.frameCount = 0;
        
        this.x = x;
        this.y = y;
    }
    render(){
        imageMode(CENTER);
        image(playerSpriteFiles[this.spriteId], 
            this.x = 100, 
            this.y = height - skinParameters[playerSpriteNames[this.spriteId]]['h'],
            skinParameters[playerSpriteNames[this.spriteId]]['w'],
            skinParameters[playerSpriteNames[this.spriteId]]['h'],
            skinParameters[playerSpriteNames[this.spriteId]]['positionX']+(skinParameters[playerSpriteNames[this.spriteId]]['spriteW']*this.frameCount),
            skinParameters[playerSpriteNames[this.spriteId]]['positionY'],
            skinParameters[playerSpriteNames[this.spriteId]]['spriteW'],
            skinParameters[playerSpriteNames[this.spriteId]]['spriteH']
            );
        if(isDebug){
            noFill();
            rectMode(CENTER);
            rect(this.x, this.y, skinParameters[playerSpriteNames[this.spriteId]]['w'], skinParameters[playerSpriteNames[this.spriteId]]['h']);
        }
        this.animate();
    }
    animate(){
        if(frameCount % 4 == 0){
            this.frameCount < skinParameters[playerSpriteNames[this.spriteId]]['frames'] ? this.frameCount += 1 : this.frameCount = 1;
        }
        
    }
    //To change skins
    changeSprite(spriteId){
        this.spriteId = spriteId;
        this.frameCount = 0;
    }
}