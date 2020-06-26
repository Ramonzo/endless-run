class Player extends Animation{
    constructor(spriteId, x, y){
        super(spriteId, x, y, [5, 8]);
        this.initialX = this.x;
        this.initialY = this.y;
        this.life = 3;
        this.points = 0;
        this.velocityMove = 0;
        this.jumpCount = 0;
        this.jumpMax = 2;
        this.velocityJump = 0;
        this.velocityMax = -20;
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
            this.velocityJump = this.velocityMax;
            this.actualAction = 'jump';
        }
    }
    applyGravity(){
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
    move(){
    }
    collision(){
    }
}