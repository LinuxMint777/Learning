const methodList = {
    eat(){
        console.log('I am eating')
    },
    sleep(){
        console.log('I am sleeping')
    }
}

function Person (name, age){
    const obj = {}
    obj.name = name;
    obj.age = age;
    obj.eat = methodList.eat
    obj.sleep = methodList.sleep
    return obj
}

let p1 = Person('Jahid Hasan', 26)
let p2 = Person('Amit Hasan', 28)
let p3 = Person('Nahid Hasan', 25)

console.dir(p1)
console.dir(p1)
console.dir(p1)
console.log(p1.eat === p2.eat)

