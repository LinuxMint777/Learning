"use strict";
/**
 * 1. Scope: global scope, local scope,
 * 2. global scope er sokol data local scope access and change korte pare.
 * 3. local scope er kono datai global scope er access nai so change oo korte pare nah
 * 
 * $$$ var holo function scope. age only function er maddhome scope create kora jaito.
 * $$$ let & const ashai block scoping kora jai. {}
 * 1. global scope er sokol data block scope access and change korte pare.
 * 2. block scope er kono datai global scope er access nai so change oo korte pare nah
 * 
 */

// Scope
let x = 10;
function scopeFunc(){
    let y = 20;
    // let x = 777
    x = 777;
    console.log(x)
    console.log(y)
}
scopeFunc()
console.log(x)



var  a = 10;
function abc (){
    var b = 777
    console.log(a)
}
abc()
console.log(a)
// console.log(b) // No access

if(true){
    let p = 779997
    console.log(p)
}
// console.log(p) // no access

let  jahid = 'Jahid Hasan'

function hlw(){
    jahid = 'Linuxmint'
    console.log(jahid)
}
hlw()
console.log(jahid)