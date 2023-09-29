// const symbol = Symbol('01')
// const symbol1 = Symbol('01')
// console.log(symbol === symbol1)

// const sym = Symbol.for('07') // single tone
// const sym1 = Symbol.for('07') // single tone
// console.log(sym === sym1)

// const obj = {
//     name: 'Js',
//     estd: 1995,
//     [symbol]: 'My symbol vlaue added' // symbol not accessable.
// }
// console.log(obj)





// const arr = [10,20,30]

// console.log(arr.includes(30))

// const includes = Symbol('my method')
// Array.prototype[includes] = function(){
//     return 'My symbol method running.'
// }
// console.log(arr[includes]())



// let str = 'JavaScript';
// console.log(str.search('cript'))

// class Languages{
//     constructor(name){
//         this.name = name
//     }
//     [Symbol.search](value){
//         return value.indexOf(this.name) >=0 ? 'Data Found' : 'Not Found'
//     }
// }
// let p1 = new Languages('cript')
// let rst = str.search(p1)
// console.log(rst)



function hlw(){
    const PVT = Symbol('pvt symbol')
    return {
        modify(object){
            object[PVT] = true
        },
        print(object){
            return object
        }
    }
}
let p1 = hlw()
let obj = {
    name: 'JavaScript',
    estd: '1995',
    founder: 'Brendan Eich'
}
p1.modify(obj);

let rst = p1.print(obj)
console.log(rst)