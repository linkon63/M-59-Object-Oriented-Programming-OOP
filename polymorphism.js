class Circle{
    constructor(redious){
        this.redious = redious;
    }
    area(){
        this.area = Math.PI * Math.pow(this.redious, 2);
        return this.area;
    }
}

class Tringle{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
    area(){
        this.area = this.height * this.width / 2;
        return this.area;
    }
}

class Retraingle{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
    area(){
        this.area = this.height*this.width;
        return this.area;
    }
}

const area = [new Circle(10), new Tringle(10,5), new Retraingle(5,5)];

for (let i = 0; i < area.length; i++) {
    const singleArea = area[i];
    console.log(singleArea.area());
}
