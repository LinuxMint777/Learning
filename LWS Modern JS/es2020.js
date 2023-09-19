console.log('I am console method.')
// globalThis (global+window) - node and browser both support.
globalThis.setTimeout(() => console.log('I am print after 3 sec.'), 3000)

// Bigint
let numbers = Number.MAX_SAFE_INTEGER
console.log(numbers)
numbers += 1
console.log(numbers)
numbers += 1
console.log(numbers)

numbers = BigInt(numbers) + 1n

console.log(numbers)
console.log(typeof numbers)

console.log(10 == BigInt(10))
console.log(10 === BigInt(10))
console.log(10n === BigInt(10))


// Optional Chaning...
let optionObj = {
    name: 'JavaScript',
    founder: 'Brendan Eich',
    lib: {
        // react: {
        //     company: 'Facebook'
        // }
    }
}
// let companyRst = optionObj.lib.react.company
// console.log(companyRst)
// let {lib: {react:{company} = {}} = {}} = optionObj
// console.log(company)


// optional chaning use that's why no error throw.
let comRst = optionObj?.lib?.react?.company;
console.log(comRst)

let optArr = [1, 3, 5]
// optArr = null
let optArrRst = optArr?.[2]
console.log(optArrRst)


// Nullish Coalescing Operator ??
// check this value of language: null, undefined, 0, false, NaN
let language = false;
console.log( language ?? 'Nullish Coalesecing Oprator')
console.log( language || 'Logical OR Operator')

// // Dynamic Import support Browser import util.js file
// import ('./util.js')
//     .then(({add, remove}) => {
//         add();
//         remove()
//     })
//     .catch((err) => {
//         console.log(err)
//     })


let promise1 = new Promise((resolve) => resolve('Burger'))
let promise2 = new Promise((_, reject) => reject('Apple'))
let promise3 = new Promise((resolve) => resolve('water'))

Promise.allSettled([promise1, promise2, promise3])
    .then((res) => console.log(res))
    .catch((err) => console.log(err))