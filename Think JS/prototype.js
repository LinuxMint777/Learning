// // part-1 Object base
// const person = {}
// person.name = 'Jahid Hasan';
// person.age = '26'
// person.print = function(){
//     console.log('I am print function')
//     console.log(`Name: ${person.name} and age: ${person.age}`)
// }
// person.print()


// // part-2 Constructor function
// function Person(name, age){
//     const person = {}
//     person.name = name;
//     person.age = age
//     person.print = function(){
//         console.log('I am print function')
//         console.log(`Name: ${person.name} and age: ${person.age}`)
//     }
//     return person
// }

// let p1 = Person('Jahid Hasan', 26)
// let p2 = Person('Amit Hasan', 28)
// console.log(p1.print === p2.print )



// // part-3 Object inheritance 
// const personMethod = {
//     print(){
//         console.log('I am print function')
//         console.log(`Name: ${this.name} and age: ${this.age}`)
//     },
//     eat(){
//         console.log('I am eating.')
//     }
// }
// function Person(name, age){
//     const person = {}
//     person.name = name;
//     person.age = age

//     person.print = personMethod.print
//     person.eat = personMethod.eat
//     return person
// }

// let p1 = Person('Jahid Hasan', 26)
// let p2 = Person('Amit Hasan', 28)
// console.log(p1.print === p2.print )
// p1.print()


// // part-4 Object.create() method use
// const personMethod = {
//     print(){
//         console.log('I am print function')
//         console.log(`Name: ${this.name} and age: ${this.age}`)
//     },
//     eat(){
//         console.log('I am eating.')
//     }
// }
// function Person(name, age){
//     const person = Object.create(personMethod)
//     person.name = name;
//     person.age = age
//     return person
// }

// let p1 = Person('Jahid Hasan', 26)
// let p2 = Person('Amit Hasan', 28)
// console.log(p1.print === p2.print )
// p1.print()


// // part-5 Prototype use
// function Person(name, age){
//     const person = Object.create(Person.prototype)
//     person.name = name;
//     person.age = age
//     return person
// }
// Person.prototype = {
//     print(){
//         console.log('I am print function')
//         console.log(`Name: ${this.name} and age: ${this.age}`)
//     },
//     eat(){
//         console.log('I am eating.')
//     }
// }

// let p1 = Person('Jahid Hasan', 26)
// let p2 = Person('Amit Hasan', 28)
// console.log(p1.print === p2.print )
// p1.print()



// // part-6 Prototype use with new keyword use.
// function Person(name, age){
//     this.name = name;
//     this.age = age
// }
// Person.prototype = {
//     print(){
//         console.log('I am print function')
//         console.log(`Name: ${this.name} and age: ${this.age}`)
//     },
//     eat(){
//         console.log('I am eating.')
//     }
// }

// let p1 = new Person('Jahid Hasan', 26)
// let p2 = new Person('Amit Hasan', 28)
// console.log(p1.print === p2.print )
// p1.print()



// Finally Class Syntex in JavaScript
class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    print(){
        console.log('I am print function')
        console.log(`Name: ${this.name} and age: ${this.age}`)
    }
    eat(){
        console.log('I am eating.')
    }
}
let p1 = new Person('Jahid Hasan', 26)
let p2 = new Person('Amit Hasan', 28)
console.log(p1.print === p2.print )
p1.print()
