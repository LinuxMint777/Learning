/**
 * var number1 = undefined
 * console.log(number1) // Result: undefined
 * number1 = 777
 */

console.log(number1)
var number1 = 777
console.log(number1)

/**
 * let number2;
 * console.log(number2) // Result: Error
 * number2 = undefined
 * number2 = 999
 */

// console.log(number2)
// let number2 = 999 // jei line a let use hbe sei line ei let num = undefined bosbe
// console.log(number2)


var LANGUAGE = 'JAVA';
var language = 'JavaScript'
function getLanguage(){
    // new hoisting create. var language = undefined
    if(!language){ // this line if(!undefined) => true
        var language = LANGUAGE; // var language = 'JAVA'
        // language = LANGUAGE; // no new hoisting create
    }
    return language
}
console.log(`I LOVE ${getLanguage()}, global scope: ${language}`)


if(!undefined){
    console.log(true)
}