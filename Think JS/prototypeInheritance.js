// // Older format Prototype inheritance
// function Person(name, age){
//     this.name = name;
//     this.age = age
// }

// function Crickter(name, age, type, email){
//     Person.call(this)
//     this.name = name;
//     this.age = age;
//     this.type= type;
//     this.email = email;
// }

// Person.prototype = {
//     eat(){
//         console.log(`${this.name} is eating, her age is: ${this.age}`)
//     }
// }

// Crickter.prototype = Object.create(Person.prototype)
// Crickter.prototype.constructor = Crickter

// Crickter.prototype.play = function(){
//     console.log(`${this.name} is a ${this.type}. ${this.name} age is: ${this.age} & email: ${this.email} `)
// }

// let sakib = new Crickter('Sakib al hasan', 35, 'all-rounder', 'sakibdemo@gmail.com')
// sakib.eat()
// sakib.play()






// new Format ES6
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    eat(){
        console.log(`${this.name} is eating, her age is: ${this.age}`)
    }
}

class Crickter extends Person{
    constructor(name, age, type, email){
        super(name, age)
        this.type = type
        this.email = email
    }
    play(){
        console.log(`${this.name} is a ${this.type}. ${this.name} age is: ${this.age} & email: ${this.email} `)
    }

    get getMethod(){
        return this.play()
    }

    set setMethod(email){
        return this.email = email
    }

    static staticMethod(){
        console.log('I am static method. ' +this.name)
    }
}

let sakib = new Crickter('Sakib al hasan', 35, 'all-rounder', 'sakibdemo@gmail.com')
let p1 = new Person ('Jahid Hasan', 26)
sakib.eat()
sakib.play()
p1.eat()

console.log(' ------------- Hello get & set & static method --------------')
sakib.getMethod
console.log(sakib.setMethod = 'gsvmch777@gmail.com')
Crickter.staticMethod()