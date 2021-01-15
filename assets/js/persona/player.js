class Player extends Animation{
    constructor(sprite, spriteFile, x, y, spritCrop){
        //Object Variables
        super(sprite, spriteFile, x, y, spritCrop);
        this.initialX = this.x;
        this.initialY = this.y;
        this.lifeMax = 3;
        this.life = this.lifeMax;
        this.points = 0;
        this.coins = 0;
        this.bufferPoints = 0;
        this.velocity = 1;
        this.runVelocity = 2;
        this.velocityMove = 3;
        this.jumpCount = 0;
        this.jumpMax = 2;
        this.velocityJump = 0;
        this.velocityMax = 25;
        this.gravity = 3;
        this.Timer = millis();
        this.stamina = 100;
        this.canRun = true;
        this.running = false;
        this.lastHundred = 0;
        this.collided = [];
    }
    draw(){
        this.render();
        this.applyGravity();

        //pause control
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
        this.collision();
        this.velocity = this.velocity < 100 ? 
                            this.velocityMove + parseInt(this.points/(1000+(this.velocity*10))) : 100;
        if(keyIsDown(68)){//key => d
            if(this.x + this.velocityMove >= this.initialX && this.x + this.velocityMove <= width/10*8 && this.canRun == true){
                if(this.stamina > 0){
                    this.stamina--;
                    this.x = this.x + this.velocityMove;
                    this.running = true;
                    this.bufferPoints = this.points;
                    return this.velocityMove;
                }
                else{
                    this.canRun = false;
                    this.running = false;
                    this.Timer = millis();
                }
            }
        }else{
            if(this.stamina < 100){
                this.stamina += .5;
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
        let newPoint = this.velocity * ((millis()-this.Timer) / 6000);
        console.log("newPoint", newPoint)
        this.points = this.bufferPoints+int(newPoint);
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
    addCoins(value = 1){
        this.coins += value;
    }
    addLife(value = 1){
        this.life += value;
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
        enemies.forEach(enemy => {
            if(this.collided.find(element => element == enemy) == undefined){
                if(this.x + (this.getCollisionBox()[0]/2) > enemy.x - (enemy.getCollisionBox()[0]/2) &&
                this.x - (this.getCollisionBox()[0]/2) < enemy.x + (enemy.getCollisionBox()[0]/2) && 
                this.y + (this.getCollisionBox()[1]/2) > enemy.y - (enemy.getCollisionBox()[1]/2) &&
                this.y - (this.getCollisionBox()[1]/2) < enemy.y + (enemy.getCollisionBox()[1]/2)){
                    sounds.personaDeath();
                    this.collided.push(enemy);
                    this.life--;
                }
            }else{
                if(!(this.x + (this.getCollisionBox()[0]/2) > enemy.x - (enemy.getCollisionBox()[0]/2) &&
                this.x - (this.getCollisionBox()[0]/2) < enemy.x + (enemy.getCollisionBox()[0]/2) && 
                this.y + (this.getCollisionBox()[1]/2) > enemy.y - (enemy.getCollisionBox()[1]/2) &&
                this.y - (this.getCollisionBox()[1]/2) < enemy.y + (enemy.getCollisionBox()[1]/2))){
                    this.collided.splice(this.collided.indexOf(this.collided.find(element => element == enemy), 1));
                }
            }
        });
        itens.forEach(item => {
            if(this.collided.find(element => element == item) == undefined){
                if(this.x + (this.getCollisionBox()[0]/2) > item.x - (item.getCollisionBox()[0]/2) &&
                this.x - (this.getCollisionBox()[0]/2) < item.x + (item.getCollisionBox()[0]/2) && 
                this.y + (this.getCollisionBox()[1]/2) > item.y - (item.getCollisionBox()[1]/2) &&
                this.y - (this.getCollisionBox()[1]/2) < item.y + (item.getCollisionBox()[1]/2)){
                    item.doAction();
                    this.collided.push(item);
                }
            }else{
                if(!(this.x + this.getCollisionBox()[0] > item.x - (item.getCollisionBox()[0]/2) &&
                this.x - (this.getCollisionBox()[0]/2) < item.x + (item.getCollisionBox()[0]/2) && 
                this.y + (this.getCollisionBox()[1]/2) > item.y - (item.getCollisionBox()[1]/2) &&
                this.y - (this.getCollisionBox()[1]/2) < item.y + (item.getCollisionBox()[1]/2))){
                    this.collided.splice(this.collided.indexOf(this.collided.find(element => element == item), 1));
                }
            }
        });
    }
}