// function currying(a, b, c){
//     return a + b + c
// }

// console.log(currying(10, 20, 30))


// function curr(a){
//     return function(b){
//         return function(c){
//             return a + b + c;
//         }
//     }
// }

// console.log(curr(10)(20)(30))
// let step1 = curr(10)
// let step2 = step1(20)
// console.log(step2(30))


// function currying(discount){
//     return function(amount){
//         return amount - (amount * discount /100);
//     }
// }
// let tenPercent = currying(10)
// let twentyPercent = currying(20)

// console.log(tenPercent(1000))
// console.log(twentyPercent(2000))
// console.log(twentyPercent(2000))
// console.log(twentyPercent(2000))
// console.log(twentyPercent(2000))
// console.log(twentyPercent(2000))



// // Basic currying function
// function currying(fn){
//     return function curried(...args){
//         if(args.length >= fn.length){
//             return fn(...args)
//         }else{
//             return function(...moreArgs){
//                 return curried(...args.concat(moreArgs))
//             }
//         }
//     }
// }
// function add(a,b,c){
//     return a + b + c;
// }

// let rst = currying(add)
// // console.log(rst(10,20, 30, 40))
// console.log(rst(10)(20)(30))
// // console.log(rst(10, 20)(30, 40))


// const multiple = (a) => (b) => (c) => a*b*c;
// function multipleCurrying(a){
//     return function(b){
//         return function(c){
//             return a*b*c;
//         }
//     }
// }
// console.log(multiple(10)(20)(30));
// console.log(multipleCurrying(10)(20)(30))












function multiple(a,b,c){
    return (a * b * c);
}

function currying(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            // return fn.apply(this, args)
            return fn(...args)
        }else{
            return function(...moreArgs){
                // return curried.apply(this, args.concat(moreArgs))
                return curried(...args.concat(moreArgs))
            }
        }
    }
}


let rst = currying(multiple)
rst(10,20,30)
console.log(rst(10)(30)(40))