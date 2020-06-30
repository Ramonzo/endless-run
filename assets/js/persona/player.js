class Player extends Animation{
    constructor(sprite, x, y){
        //Object Variables
        super(sprite, x, y, [.5, .8]);
        this.initialX = this.x;
        this.initialY = this.y;
        this.lifeMax = 3;
        this.life = this.lifeMax;
        this.points = 0;
        this.coins = 0;
        this.bufferPoints = 0;
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
        this.lastHundred = 0;
    }
    draw(){
        this.render();
        this.applyGravity();

        if(state == stateGroup[3]){
            this.startTime = millis();
            this.bufferPoints = this.points;
        }

        if(isDebug){
            console.log('velocity: '+ this.velocity);
            console.log('points: '+ this.points);
            console.log('stamina: '+ this.stamina);
        }
    }
    jump(){
        if(this.jumpCount < this.jumpMax){
            sounds.playerJump();

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
    pointCounter(){
        this.velocity = this.velocity < 100 ? parseInt(this.points/(1000+(this.velocity*10)))+this.velocityMove : 100;
        let newPoint = (this.velocity * ((millis()-this.startTime) / 60000))/2;
        this.points = int(newPoint*100)+this.bufferPoints;
        if(this.points >= 1000){
            if(int(this.points/1000) > this.lastHundred){

                sounds.playerHundredPoints();

                this.lastHundred = int(this.points/1000);
            }
        }else{
            if(int(this.points/100) > this.lastHundred){

                sounds.playerHundredPoints();

                this.lastHundred = int(this.points/100);
            }
        }
    }
    getPoints(){
        return this.points;
    }
    getCoins(){
        return this.coins;
    }
    getLifeMax(){
        return this.lifeMax;
    }
    getLifes(){
        return this.life;
    }
    collision(){
        sounds.personaDeath();
    }
}