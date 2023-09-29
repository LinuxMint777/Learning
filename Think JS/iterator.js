// const arr = [10,20,30, 40,50]

// let iterator = arr[Symbol.iterator]()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())



const str = 'Java'

// // old behave on ...spred 
// let iter = str[Symbol.iterator]()
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

// console.log([...str])

// // my overide ...spred behave .
// String.prototype[Symbol.iterator] = function(){
//     let count = this.length;
//     return {
//         next(){
//             if(count > 0){
//                 count --
//                 return {done: false, value: 'JavaScript'}
//             }
//             return {done: true, value: undefined}
//         }
//     }
// }
// console.log([...str])

// let iterator = str[Symbol.iterator]()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())






function range ({start, end, step}){
    let current = start;
    return {
        [Symbol.iterator]: function(){
            return {
                next(){
                    let rst;
                    if(current <=end){
                        rst = {done: false, value: current}
                        current += step
                        return rst
                    }else{
                        return {done: true, value: undefined}
                    }
                    
                }
            }
        }
    }
}

let p1 = range({start: 1, end: 10, step: 3})[Symbol.iterator]()
console.log(p1.next())
console.log(p1.next())
console.log(p1.next())
console.log(p1.next())
console.log(p1.next())


let rst = [...range({start: 1, end: 1000000, step: 2})]

console.log(rst)