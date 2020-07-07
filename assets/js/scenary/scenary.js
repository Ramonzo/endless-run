class Scenary{
    constructor(image, y, sizeX, sizeY, velocity){
        this.image = image;
        this.x1 = 0;
        this.x2 = sizeX;
        this.y = y;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.velocity = velocity;
    }
    draw(){
        imageMode(CENTER);
        image(this.image, this.x1, this.y, this.sizeX, this.sizeY);
        image(this.image, this.x2, this.y, this.sizeX, this.sizeY);
    }
    move(direction, velocity){
        this.x1 = this.x1 - (this.velocity + velocity + direction);
        this.x2 = this.x2 - (this.velocity + velocity + direction);
        if (this.x1 < -(this.sizeX/2)){
            this.x1 = this.x2 + this.sizeX;
        }
        if (this.x2 < -(this.sizeX/2)){
        this.x2 = this.x1 + this.sizeX;;
        }
    }
}