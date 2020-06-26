class Enemy extends Animation{
    constructor(sprite, x, y){
        super(sprite, x, y, [.5, .8]);
        this.velocity = 3;
    }
    draw(){
        this.render();

        this._collisionBox();
        this._imageBox();
    }
    move(direction){
        this.x = this.x - (this.velocity + player.velocity + direction);
        if(this.x < 0){
            this.x = width;
        }
    }
}