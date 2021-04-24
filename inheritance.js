class SmartDevice{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    charging(){
        console.log('I am Eating Electron..... Its Yammmy');
    }
}

class Phone extends SmartDevice{
    constructor(name,price,camera){
        super(name,price);
        this.camera = camera;
    }
    sendSms(){
        console.log('Im Sending SMS');
    }
}

class Watch extends SmartDevice{
    constructor(name,price,distance){
        super(name,price);   // this.name = price; // this.name = name;
        this.camera = distance;
    }
}

class Tablet extends SmartDevice{
    constructor(name,price,isWifi){
        super(name,price);    // this.name = name; this.name = price;
        this.camera = isWifi;
    }
}

const samsung = new Phone('AVG', 16000, '16MG');
console.log(samsung.name);
samsung.charging();
samsung.sendSms();





