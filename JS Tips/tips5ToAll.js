// const button = document.querySelector('#button')
// function debounce(fn, dealy=2000){
//     let timeOut;
//     return function(){
//         if(timeOut){
//             clearTimeout(timeOut)
//         }
//         timeOut = setTimeout(() => {
//             fn()
//         }, dealy)
//     }
// }
// function fn(){
//     console.log('Jahid Hasan')
// }
// button.addEventListener('click', debounce(fn, 500))






// const arr = ['one', 'three', 'two', 'two', 'one', 'three', 'three']
// function duplicateArray(arr){
//     let obj = {}
//     arr.map((list) => {
//         obj[list] = (obj[list] || 0) + 1
//     })
//     return obj
// }
// let rst = duplicateArray(arr)
// console.log(rst)






// let str = 'I love bangladesh'
// function converStr(str){
//     let rst = str.split(" ")
//     let finalRst = rst.map((list) => {
//         return list.split('').reverse().join('')
//     })
//     return finalRst.join(" ")
// }
// console.log(converStr(str))







// let string = 'Java is a programming language'
// function str(str){
//     let rst = string.split(' ');
//     return rst.sort((a,b) => {
//         return a.length-b.length
//     }).join(' ')
// }
// console.log(str(string))





// function dealy(i){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(i)
//         }, i * 1000)
//     })
// }

// let number = 3;
// async function count(number){
//     console.log('Start Time');
//     for(let i=1; i<=number; i++){
//         let rst = await dealy(i)
//         console.log(rst)
//     }
//     console.log('End Time');
// }
// count(number)


// const startTime = performance.now()
// const circles = document.querySelectorAll('.circle');

// const observer = new IntersectionObserver((circles) => {
//     circles.forEach((list) => {
//         if(list.isIntersecting){
//             list.target.classList.add('visibility')
//         }else{
//             list.target.classList.remove('visibility')
//         }
//     })
// }, {
//     threshold: 0.5
// })

// circles.forEach((list) => {
//     observer.observe(list)
// })
// const endTime = performance.now()

// console.log(endTime - startTime)





// function add(x){
//     return x + x;
// }

// function memo(func){
//     let cached = {}
//     return function(x){
//         if(cached[x]){
//             console.log('Data filter in cached')
//             return cached[x]
//         }else{
//             console.log('Calculate New system')
//             let rst = func(x)
//             cached[x] = rst
//             console.log(cached)
//             return rst

//         }
//     }
// }

// let cal = memo(add)
// console.log(cal(10))
// console.log(cal(10))
// console.log(cal(10))
// console.log(cal(10))
// console.log(cal(10))
// console.log(cal(5))
// console.log(cal(5))
// console.log(cal(5))





// function add (...value){
//     return value.reduce((prev, current) => prev + current)
// }


// function memo(fun){
//     let cached = {}
//     return function(...value){
//         let key = JSON.stringify(value)
//         if(cached[key]){
//             console.log('cashed data')
//             return cached[key]
//         }else{
//             let rst = fun(...value)
//             cached[key] = rst
//             return rst;
//         }
//     }
// }

// let cal = memo(add)
// console.log(cal(1,2,3))
// console.log(cal(1,2,3))