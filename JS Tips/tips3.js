// // question one
// let rst = [] + []
// console.log(String([]))
// console.log(String({}))
// console.log(String(NaN))
// console.log(String(Infinity))
// console.log(String(null))
// console.log(String(undefined))
// console.log(true + 1)
// console.log({} + [])
// console.log({} + undefined)
// console.log([] + null)



// // question two
// function myFunction(str){
//     console.log(str)
//     return 'Bangladesh';
// }

// let string = myFunction `hello world`;
// console.log(string)




// // how to make all text conent editable of all website.
// document.body.contentEditable = true;
// // <h2 contenteditable>Hello world</h2



// // what will be the output of below code.

// function b(){
//     console.log(`this length is: ${this.length}`)
// }
// let obj = {
//     length: 10,
//     method: function(b){
//         arguments[0]()
//     }
// }
// obj.method(b, 5)






// // what will be the output of below code.
// console.log(String(01));

// let varName = 'constructor';
// console.log(varName[varName])
// console.log(varName[varName](01))





// what will be the output of below code.
console.log(0.1 + 0.2)
// floating number add a sob somoy same result naw dite pare bcz decimal er base 10 but computer binaray orthat base 2 te convert kore sob.. ei karone kishu kishu time emon result astei pare.




// // what will be the output of below code.
// let str = 'Bangladesh'

// console.log(str.constructor)
// console.log(str.__proto__)
// console.log(str.__proto__.__proto__)
// console.log(str.__proto__.__proto__.__proto__)

// let num = 10;

// console.log(num.constructor)
// console.log(num.__proto__)
// console.log(num.__proto__.__proto__)
// console.log(num.__proto__.__proto__.__proto__)



// make a function when argument are sorted but no loop use.
function example(){
    return [].slice.call(arguments).sort((x,y) => x-y)
}
let hlw = example(12,4,63,7,43,3,2,9);
console.log(hlw)

// easy and my code.
function argumentSort(){
    return Object.values(arguments).sort((a,b) => a-b)
}
let rst = argumentSort(12,4,63,7,43,3,2,9)
console.log(rst)