class Enemy extends Animation{
    constructor(sprite, x, y){
        super(sprite, x, y, [.3, .6]);
        this.velocity = 3;
    }
    draw(){
        this.render();
    }
    move(direction){
        this.x = this.x - (this.velocity + player.velocity + direction);
        if(this.x < 0){
            this.x = width;
        }
    }
}