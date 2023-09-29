// const object = {
//     name: 'JavaScript',
//     estd: '1995',
//     founder: 'Brendan Eich',
//     print(){
//         console.log(`Language: ${this.name}, this languages founder is ${this.founder}`)
//         return this;
//     },
//     estdFunc(){
//         console.log(`${this.name} estd by ${this.estd}.`)
//         return this
//     },
//     fn(){
//         console.log(`Hello world. I am learning ${this.name}`);
//         // console.log(this)
//         return this
//     }
// }

// object.print().estdFunc().fn() // is called method chaining



class Person {
    constructor(name, est, founder){
        this.name = name;
        this.est = est;
        this.founder = founder;
    }
    print(){
        console.log(`Language: ${this.name}, this languages founder is ${this.founder}`)
        return this;
    }
    estdFunc(){
        console.log(`${this.name} estd by ${this.estd}.`)
        return this
    }
    fn(){
        console.log(`Hello world. I am learning ${this.name}`);
        // console.log(this)
        return this
    }
}

let p1 = new Person('JavaScript', '1995', 'Brendan Eich')
p1.print().estdFunc().fn()