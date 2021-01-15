class Iten extends Animation{
    constructor(sprite, spriteFile, x, y, velocity, action){
        super(sprite, spriteFile, x, y, [.7, .7]);
        this.velocity = velocity;
        this.action = action instanceof Array ? action[Math.floor(Math.random() * action.length)] : action;
    }
    draw(){
        this.render();
    }
    doAction(){
        this.action();
    }
    move(direction, velocity){
        this.x = this.x - (this.velocity + velocity + direction);
        if(this.x < 0){
            this.x = width;
        }
    }
}