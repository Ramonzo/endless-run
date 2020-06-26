class Player extends Animation{
    constructor(spriteId, x, y){
        super(spriteId, x, y, [5, 8]);
        this.initialX = this.x;
        this.initialY = this.y;
        this.life = 3;
        this.points = 0;
        this.velocityMove = 2;
        this.jumpCount = 0;
        this.jumpMax = 2;
        this.velocityJump = 0;
        this.velocityMax = 20;
        this.gravity = 3;
    }
    draw(){
        this.render(this.actualAction);
        this.applyGravity();

        if(isDebug){
            noFill();
            rectMode(CENTER);
            rect(this.x, this.y, skinParameters[playerSpriteNames[this.spriteId]][this.actualAction]['w'], skinParameters[playerSpriteNames[this.spriteId]][this.actualAction]['h']);
        }
    }
    jump(){
        if(this.jumpCount < this.jumpMax){
            this.jumpCount++;
            this.velocityJump = -this.velocityMax;
            this.actualAction = 'jump';
        }
    }
    applyGravity(){
        if(this.velocityJump < this.velocityMax*2){
            this.y = this.y + this.velocityJump;
            this.velocityJump = this.velocityJump + this.gravity;
            
            if(this.velocityJump > 0){
                this.actualAction = 'falling';
            }
            if(this.y > this.initialY){
                this.y = this.initialY;
                this.jumpCount = 0;
                this.actualAction = 'walk';
            }
        }
    }
    move(){
        let direction = 0;
        if(keyIsDown(68)){//key => d
            direction = this.velocityMove;
        }else if(keyIsDown(65)){//key => a
            direction = -this.velocityMove;
        }
        if(this.x + direction >= this.initialX && this.x + direction <= width/10*8){
            this.x = this.x + direction;
        }
        return direction;
    }
    collision(){
    }
}