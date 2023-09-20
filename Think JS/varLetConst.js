var a = 10
let b = 20
const c = 30

// var a = 10
if(true){
    console.log(a)
    a = 777
    console.log(a)
    var d = 9999
    console.log(d)
}
console.log(a)
console.log(d)

// let b = 20
if(true){
    console.log(b)
    b = 777000
    console.log(b)
    let e = 9990009
    console.log(e)
}
console.log(b)
// console.log(e)

// const c = 30: not access redeclare, reassign 
if(true){
    console.log(c)
    // c = 40
    // console.log(c)
}

const obj = {
    name: 'js',
    estd: 1995
}
// obj = {}
obj.name = 'JavaScript'
obj['estd'] = '1995'

console.log(obj)



// $$$$$$$$$$$$$$$$$$$$$$$$$$$

var a = 10;

function hlw(){
    console.log(a)
    var b  = 11000
}
hlw()
// console.log(b)

if(true){
    let ppp = 1000000;
    console.log(ppp)
}
// console.log(ppp)