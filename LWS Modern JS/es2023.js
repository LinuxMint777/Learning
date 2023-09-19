// arr.reverse() are mutable system.
let arr = [1,2,3,4,5,6,7]
let revArr = arr.reverse()
console.log(revArr)
console.log(arr)

// arr.toReversed() are immutable system - es2023
let myArr = [1,2,3,45,6,7]
let revMyArr = myArr.toReversed()
console.log(revMyArr)
console.log(myArr)


// arr.splice() are mutable system.
let arr1 = [1,2,3,4,5]
let arr1Rst = arr1.splice(2,2, 300, 400)
console.log(arr1Rst)
console.log(arr1)

// arr.toSpliced() are immutable system - es2023
let myArr1 = [1,2,3,4,5]
let myArr1Rst = myArr1.toSpliced(2, 2, 300,400)
console.log(myArr1Rst)
console.log(myArr1)



// arr.with() are immutable system - es2023
let esArr = [1,2,3,4,5]
let esArrRst = esArr.with(2,777)
console.log(esArrRst)

console.log(esArr)


// arr.toSorted() method - es2023 -- arr.sort() method work string compair.

let sortArr = [1,45,30,4,7,3,5, 10,20,8,2]
let sortArrRst = sortArr.toSorted((a, b) => a-b)
console.log(sortArrRst)
console.log(sortArr)

const ppp = [
    {
        name: 'JavaScript',
        estd: 1995
    },
    {
        name: 'PHP',
        estd: 1993
    },
    {
        name: 'C',
        estd: 1972
    },
]

let pppSorted = ppp.toSorted((a, b) => {
    return a.estd - b.estd
})
console.log(pppSorted)


let pppSortedStr =  ppp.toSorted((a,b) => {
    let x = a.name.toLowerCase()
    let y = b.name.toLowerCase()
    
    if(x < y){
        return -1;
    }else if(x > y){
        return 1;
    }else{
        return 0
    }
})
console.log(pppSortedStr)
console.log(ppp)