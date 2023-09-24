/**
 * Higher Order Function are two rules
 * 1. Function return another function.
 * 2. function pass by another function arguments.
 */

let arr = [1,3,5,7,2,4,6]

let rst = arr.map((value, index, arr) => value * value)

console.log(rst)

function myMap(arr, cbf){
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        newArr.push(cbf(arr[i], i, arr))
    }
    return newArr
}

let newRst = myMap(arr, (value) => value * value)
console.log(newRst)