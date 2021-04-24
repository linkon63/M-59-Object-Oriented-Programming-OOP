class Animal{
    #speed = 100; //Private Variable;
    constructor(name){
        this.name = name;
        this.#speed = 150;
    }
    run(){
        console.log(`I'm ${this.name}, I'm Runing ${this.#speed} mph`);
    }
}

const tiger = new Animal('Tiger');
console.log(tiger);
tiger.run();