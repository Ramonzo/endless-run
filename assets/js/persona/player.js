class Player extends Animation{
    constructor(defaultSpriteId){
        super(defaultSpriteId);
        //sprite, x, y, w, h, spriteW, spriteH, maxFrame
        this.defaultSprite = defaultSpriteId;
        this.initialX = this.x;
        this.initialY = this.y;
        this.life = 3;
        this.points = 0;
        this.velocityMove = 0;
        this.velocityJump = 0;
        this.gravity = 3;
    }
    draw(){
        this.render();
        //this.gravity();
    }
    jump(){
    }
    gravity(){
    }
    move(){
    }
}