let myweakSet = new WeakSet([{a: 2}, {b:3}])

console.log(myweakSet)


// weakset uses example

let checkThis = new WeakSet()

class Student {
    constructor(){
        checkThis.add(this)
    }
    print(){
        if(!checkThis.has(this)){
            throw new Error('Do not access.')
        }else{
            console.log('I am print method')
        }
    }
}

// Student.prototype.print() // It's danger access .
let std = new Student()
std.print()