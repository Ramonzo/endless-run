class Animation{
    constructor(spriteId, x, y, precision){
        this.spriteId = spriteId;
        this.frameCount = 0;
        this.actualAction = 'walk';
        this.precision = precision;
        this.x = x;
        this.y = y - (skinParameters[playerSpriteNames[this.spriteId]][this.actualAction]['h']);
    }
    render(){
        imageMode(CENTER);
        image(playerSpriteFiles[playerSpriteNames[this.spriteId]], 
            this.x, 
            this.y,
            skinParameters[playerSpriteNames[this.spriteId]][this.actualAction]['w'],
            skinParameters[playerSpriteNames[this.spriteId]][this.actualAction]['h'],
            skinParameters[playerSpriteNames[this.spriteId]][this.actualAction]['positionX']+(skinParameters[playerSpriteNames[this.spriteId]][this.actualAction]['spriteW']*this.frameCount),
            skinParameters[playerSpriteNames[this.spriteId]][this.actualAction]['positionY'],
            skinParameters[playerSpriteNames[this.spriteId]][this.actualAction]['spriteW'],
            skinParameters[playerSpriteNames[this.spriteId]][this.actualAction]['spriteH']
            );
        this.animate();
    }
    animate(){
        if(frameCount % 4 == 0){
            this.frameCount + 1 < skinParameters[playerSpriteNames[this.spriteId]][this.actualAction]['frames'] ? this.frameCount += 1 : this.frameCount = 0;
        }
        
    }
    //To change skins
    changeSprite(spriteId){
        this.spriteId = spriteId;
        this.frameCount = 0;
    }
}