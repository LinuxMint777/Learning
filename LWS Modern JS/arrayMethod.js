let arr = [1,2,3,100,200,300,10,20,30] // use array find method.
let arr1 = [1,2,3,100,200,300,10,20,30] // use array findindex method.
let arr2 = [1,2,3,100,200,300,10,20,30] // use array filter method.
let arr3 = [1,2,3,100,200,300,10,20,30] // use array slice method
let arr4 = [1,2,3,100,200,300,10,20,30] // use array splice method
let arrConcat1 = [1,2,3,] // use array concat method
let arrConcat2 = [777,888,999] // use array concat method
let arrPushPopUnshiftShift = [7,5,3,2] // use push, pop, shift, unshif
let arrMap = [7,5,3,2,6,8,9,10] // use array map method.
let arrReduce = [1,2,3,4,5] // use array reduce method.


let arrFind = arr.find((value, i, arr) => value === 200)
console.log(arr)
console.log(arrFind)


let arrFindIndex = arr1.findIndex((value, i, arr) => value >= 10)
console.log(arr1)
console.log(arrFindIndex) // let side to right side run, so 100 value index 3.


let arrFilter = arr2.filter((value, i, arr) => value%2 === 0)
console.log(arr2)
console.log(arrFilter)


let arrSlice = arr3.slice(3, 6) // start 0 to end.
console.log(arr3)
console.log(arrSlice)


let arrSplice = arr4.splice(5, 2, 777, 999, 888) // array splice return delete data.
console.log(arr4)
console.log(arrSplice)


let arrConcatResult = arrConcat1.concat(arrConcat2)
console.log(arrConcat1)
console.log(arrConcat2)
console.log(arrConcatResult)


let arrPushRst = arrPushPopUnshiftShift.push(777)
console.log(arrPushPopUnshiftShift)
console.log(arrPushRst) // array length show.

let arrPopRst = arrPushPopUnshiftShift.pop()
console.log(arrPushPopUnshiftShift)
console.log(arrPopRst) // delete value show.

let arrUnshiftRst = arrPushPopUnshiftShift.unshift(999)
console.log(arrPushPopUnshiftShift)
console.log(arrUnshiftRst) // Array length show.

let arrShiftRst = arrPushPopUnshiftShift.shift()
console.log(arrPushPopUnshiftShift)
console.log(arrShiftRst) // delete value show



let arrMapRst = arrMap.map((value, index, arr) => {
    return value * value;
})
console.log(arrMap)
console.log(arrMapRst)


let arrReduceRst = arrReduce.reduce((prev, current, i, arr) => {
    return prev + current;
}, 0)
console.log(arrReduce)
console.log(arrReduceRst)

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

class Person {
    consturctor(name, age){
        this.name = name
        this.age = age
    }
    test(value){
        console.log('Hello World: ' +value)
    }
    exmFunc(){
        let newArr = [1,2,3,4,5]
        newArr.find((value) => {
            this.test(value)
        })
    }
}
let per = new Person('Jahid Hasan', '26')
per.exmFunc()


// Copywithin array method

let xyz = ['one', 'two', 'three', 'four', 'five', 'six', 'seven']

let xyzRst = xyz.copyWithin(3, 2,4)
console.log(xyz)