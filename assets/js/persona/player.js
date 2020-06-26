class Player extends Animation{
    constructor(sprite, x, y){
        super(sprite, x, y, [.5, .8]);
        this.initialX = this.x;
        this.initialY = this.y;
        this.life = 3;
        this.points = 0;
        this.velocity = 0;
        this.velocityMove = 3;
        this.jumpCount = 0;
        this.jumpMax = 2;
        this.velocityJump = 0;
        this.velocityMax = 20;
        this.gravity = 3;
        this.startTime = millis();
        this.stamina = 100;
        this.canRun = true;
    }
    draw(){
        this.render();
        this.applyGravity();

        this._collisionBox();
        this._imageBox();
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
        this.velocity = this.velocity < 100 ? parseInt(this.points/3000)+this.velocityMove : 100;
        this.points += parseInt((this.velocity * ((millis()-this.startTime) / 60000))/2);
        if(keyIsDown(68)){//key => d
            if(this.x + this.velocityMove >= this.initialX && this.x + this.velocityMove <= width/10*8 && this.canRun == true){
                if(this.stamina > 0){
                    this.stamina--;
                    this.x = this.x + this.velocityMove;
                    return this.velocityMove;
                }
                else{
                    this.canRun = false;
                }
            }
        }else{
            if(this.stamina < 100){
                this.stamina += .5
            }else{
                this.canRun = true;
            }
            if(this.x - this.velocityMove >= this.initialX && this.x - this.velocityMove <= width/10*8){
                this.x = this.x - this.velocityMove;
                return -this.velocityMove/2;
            }
        }
        return 0;
    }
    collision(){
    }
}