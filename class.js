class Pendrive{
    constructor(capacity,color,price){
        this.capacity = capacity;
        this.color = color;
        this.price = price;
    }
}

const ssd = new Pendrive('120GB','White',1200);
console.log(ssd);
const hdd = new Pendrive('125GB','red',1300);
console.log(hdd);
const rdd = new Pendrive('120GB','Blue',1200);
console.log(rdd);