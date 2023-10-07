// let arr = [1,2,5,false, 0, null, undefined, NaN, '', 0n, "", 39, ``, 777]
// let removeFalsyValue = arr.filter(Boolean)
// console.log(removeFalsyValue)

// let p = undefined;
// console.log(!!p)
// console.log(Boolean(p))


// let array = [10,20,30,40,50]
// array.length = 3;
// console.log(array)


// let arr = [1,2,3,[10,20,30,[777,999, 333],40, 50], 4, 5]
// let rst = arr.flat(Infinity)
// let ppp = rst.map((value) => {
//     console.log(value)
// })


// let name = 'JavaScript' && console.log('Loves')


// let str = 'React is a most popular Framwork, Its framwork is running, react framwork is the best framwork right now.'
// let rst = str.replace(/framwork/g, 'library');
// console.log(rst)


// const library1 = 'React';
// const library2 = 'Angular';
// const library3 = 'VUE';

// console.log({library1, library2, library3})


const startTime = performance.now()
for(let i=0; i<100; i++){
    console.log(i)
}
const endTime = performance.now()
console.log(endTime-startTime)