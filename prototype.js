function Cat(name) {
    this.name = name;
}

Cat.prototype.talk = function () {
    console.log("mew mew");
}

const myCat = new Cat('Tiger');
console.log(myCat);
myCat.talk();

//https://sourcemaking.com/design_patterns
//https://springframework.guru/gang-of-four-design-patterns/
//https://www.dofactory.com/net/design-patterns