class Enemy extends Animation{
    constructor(sprite, spriteFile, x, y, spritCrop){
        super(sprite, spriteFile, x, y, spritCrop);
        this.velocity = 3;
    }
    draw(){
        this.render();
    }
    move(direction, velocity){
        this.x = this.x - (this.velocity + velocity + direction);
        if(this.x < 0){
            this.x = width;
        }
    }
}