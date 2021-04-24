class Hero{
    constructor(name, power){
        this.name = name;
        this.power = power;
    }
    getPower(){
        if(this.power){
            return this.power;
        }else{
            return 'I have no Power';
        }
    }
    goForShopping(money){
        if(this.power && money > 1000){
            console.log(this.getPower())
        }
        return 'I have no enough Money';
    }
}

const ironMan = new Hero('IronMan','Arc Reactor');
// console.log(ironMan);
// console.log(ironMan.name);
// console.log(ironMan.getPower());
console.log(ironMan.goForShopping(10005));