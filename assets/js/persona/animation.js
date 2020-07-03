class Animation{
    constructor(sprite, x, y, precision){
        this.actualAction = 'walk';
        this.spriteName = sprite;
        this.sprite = skinParameters[this.spriteName];
        this.frameCount = 0;
        this.precision = precision;
        this.x = x;
        this.y = y - (this.sprite[this.actualAction]['h']);
    }
    render(){
        imageMode(CENTER);
        image(playerSpriteFiles[this.spriteName], 
            this.x, 
            this.y,
            this.sprite[this.actualAction]['w'],
            this.sprite[this.actualAction]['h'],
            this.sprite[this.actualAction]['positionX']+(this.sprite[this.actualAction]['spriteW']*this.frameCount),
            this.sprite[this.actualAction]['positionY'],
            this.sprite[this.actualAction]['spriteW'],
            this.sprite[this.actualAction]['spriteH']
            );

        this.animate();

        if(isDebug){
            this._collisionBox();
            this._imageBox();
        }
    }
    animate(){
        if(frameCount % 4 == 0){
            this.frameCount + 1 < this.sprite[this.actualAction]['frames'] ? this.frameCount += 1 : this.frameCount = 0;
        }
        
    }
    //To change skins
    changeSprite(spriteName){
        this.spriteName = spriteName;
        this.frameCount = 0;
    }
    getCollisionBox(){
        return [this.sprite[this.actualAction]['w']*this.precision[0], this.sprite[this.actualAction]['h']*this.precision[1]];
    }
    //To debug
    _collisionBox(){
        noFill();
        stroke(color('#0A8901'));
        rectMode(CENTER);
        rect(this.x, this.y, this.sprite[this.actualAction]['w']*this.precision[0], this.sprite[this.actualAction]['h']*this.precision[1]);
        noStroke();
    }
    _imageBox(){
        noFill();
        stroke(color('#000089'));
        rectMode(CENTER);
        rect(this.x, this.y, this.sprite[this.actualAction]['w'], this.sprite[this.actualAction]['h']);
        noStroke();
    }
}