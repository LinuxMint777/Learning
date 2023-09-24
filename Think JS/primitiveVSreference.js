/**
 * 1. Primitive Data type: Number, String, null, undefined, boolean,Symbol
 * 2. Reference Data type: Object, array, function, date
 * lodash __.cloneDeep() method use korle immutable way te all child ba nested copy hoy.
 * wrapper typed: new String(), new Number()
 */

// example-1
let abc = 'JavaScript'
let x = abc

abc = 'NodeJS'
console.log(abc)
console.log(x)

let obj = {
    name: 'Brendan Eich',
    estd: 1995
}

let myObj = obj

// obj = {} // assign, eita hip memory te new ekta object and reference create kor.
obj.est = 2023 // mutation - direct data change kore
console.log(obj)
console.log(myObj)


let ppp = 'JavaScript'
let wrapperPPP = new String('JavaScript')
console.log(ppp)
console.log(wrapperPPP)



// pass by refefence
let primitiveData = 10
function primitiveFunc(n) {
    // var n = undefined  hindden tricks
    n = 20
    console.log(n)

}
primitiveFunc(primitiveData) // pass by reference
console.log(primitiveData)


let objData = {
    name: 'Js'
}
function objFunc(n) {
    // var n = undefined  hindden tricks
    // n = 'Jahid' no change becose object value assign not mutation.
    n.name = 'JavaScript' // change the value bcz mutation.
    console.log(n)

}
objFunc(objData) // pass by reference
console.log(objData)