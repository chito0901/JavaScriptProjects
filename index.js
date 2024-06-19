class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address (...address);
    }
}

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30,
                "124 Conch st.", "Bikini Bottom", "Int. Waters");

const person2 = new Person("Patirck", 34,
                "126 Conch st.", "Bikini Bottom", "Int. Waters");

const person3 = new Person("Squidward", 45,
                "125 Conch st.", "Bikini Bottom", "Int. Waters");

console.log(person1.address);
console.log(person2.address);
console.log(person2.address);