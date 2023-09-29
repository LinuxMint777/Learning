let obj = {
    name: 'JavaScript',
    estd: '1995',
    founder: 'Brendan Eich',
    rank: '01'
}

// function * generator(obj){
//     let myEntries = Object.entries(obj)
//     for(let value of myEntries){
//         yield value[1]
//     }
// }

// let myObjIterator = generator(obj)

// for(let element of myObjIterator){
//     console.log(element)
// }

// console.log([...myObjIterator])




// Object.prototype[Symbol.iterator] = function(){
//     let arr = Object.values(this);
//     let len = arr.length;
//     let i = 0;
//     return {
//         next(){
//             if(len > 0){
//                 let rst = {done: false, value: arr[i]}
//                 i++;
//                 len --;
//                 return rst
//             }
//             return {done: true, value: undefined}
//         }
//     }
// }
// for(let value of obj){
//     console.log(value)
// }

// console.log([...obj])




// function * generator(obj){
//     let entries = Object.entries(obj)
//     for(let value of entries){
//         yield value[1]
//     }
// }

// let rst = generator(obj)
// let rst1 = generator(obj)
// console.log([...rst])
// for(let v of rst1){
//     console.log(v)
// }



// function * generator(start, end, step){
//     while(start <= end){
//         yield  start;
//         start += step
//     }

//     // for(start; start <=end; start+=step){
//     //     yield start
//     // }
// }

// let my = generator(1, 10, 3)
// console.log([...my])



function * generator(x, y){
    let rst = yield x + y;
    let total = yield x + y + rst
    yield x + y + rst + total
}
let iter = generator(10, 20)
