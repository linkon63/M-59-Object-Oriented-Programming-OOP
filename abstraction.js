class Animal{
    constructor(){

    }
    talk(){
        throw new Error("You Must Implement Talk Method");
        // console.log('make Some Noise');
    }
}

class Cat extends Animal{
    talk(){
        console.log('Mew Mew');
    }
}

class Dog extends Animal{
    talks(){
        console.log('Bark Bark');
    }
    talk(){
        console.log(this.talks());
    }
}

const myCat = new Cat();
myCat.talk();

const myDog = new Dog();
myDog.talk();  //myDog.talk(); o/p: make Some Noise;
