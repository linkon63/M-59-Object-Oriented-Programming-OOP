class Animal {
    static category = 'Dog';
    location = 'Dhaka';
    constructor(name,speed){
        this.name = name;
        this.speed = speed;
    }
    static compare(animal1,animal2){
        if(animal1.speed > animal2.speed){
            return `${animal1.name} is Faster`;
        }
        return `${animal2.name} is Faster`;
    }
}

const myRat = new Animal('Rat', 12);
const myDog = new Animal('Dog', 13);

console.log(Animal.compare(myRat,myDog));

// console.log(myRat);
// console.log(myRat.category); //O/p Undefine

// console.log(myRat.category);
// console.log(myRat.location);
// console.log(Animal.category);
// console.log(Animal.location);


