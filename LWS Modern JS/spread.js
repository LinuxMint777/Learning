let arr = [1,2,3]
let arr2 = [4,5,6]

let rst = [...arr, ...arr2]
console.log(rst)

console.log(...arr)



// mutable system for array.
let array = [10,20,30]
let js = array
js.push(777)

console.log(array)
console.log(js)

// immutable system for array
let array2 = [100, 200, 300]
let js2 = Array.from(array2)
js2.push(77777)

console.log(array2)
console.log(js2)

// immutable way use spread operator
let array3 = [100, 200, 300]
let js3 = [...array3]
js3.push(77777)

console.log(array2)
console.log(js3)



// Spread operator use object.
let obj1 = {
    x: 10,
    y: 20
}
let obj2 = {
    name: 'JavaScript',
    founder: 'Brendan Eich'
}

let objRst = {
    ...obj1,
    ...obj2
}
console.log(objRst)