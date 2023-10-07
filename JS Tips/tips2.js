// let arr = [1,2,3,4,5];

// // let temp = arr[0]
// // arr[0] = arr[4]
// // arr[4] = temp
// // console.log(arr)

// [arr[0], arr[4]] = [arr[4], arr[0]];
// console.log(arr)


// let a = 1;
// let b = 10;

// // [a,b] = [b,a]
// // console.log(a,b)

// // mathmetical terms use
// b = a + (a=b) -b;
// console.log(a,b)










// const copy = document.getElementById('copy')
// copy.addEventListener('click', getFunction)

// function getFunction(){
//     let text = document.getElementById('text')
//     let newTextArea = document.createElement('textarea');
//     newTextArea.value = text.innerText;
//     document.body.appendChild(newTextArea);
//     newTextArea.select();
//     document.execCommand('copy');
//     document.body.removeChild(newTextArea)
// }




// let obj = {
//     name: 'JavaScript',
//     founded: '1995',
//     founder: 'Brendan Eich'
// }

// const {name, founder, founded: js} = obj

// console.log(name, founder, js)





// const number = document.querySelector('#numberInput').valueAsNumber;
// console.log(number)
// console.log(typeof number)




// const arr = [1,2,3,4,5,1,2,3,6,7,8]

// console.log([...new Set(arr)])



// let arr = [1,2,3,4,5]
// let arr2 = [1,2,3,4,5]

// // console.log(JSON.stringify({...arr}) === JSON.stringify({...arr2}))
// function hasElementCheck(a, b){
//     return arr.every((value, index) => {
//         return value === arr2[index]
//     })
// }

// console.log(hasElementCheck(arr, arr2))





// const array = [10,24,2,6,78,53,49];

// const bijoy = array.sort((a, b) => Math.random() - .5);

// console.log(bijoy)



let x = 1
x = (x++, x)
console.log(x)

let y = (5, 7);
console.log(y)


let arr = [[1,2,3,4,5], [5,6,7,8], [9,10,11], [12, 13], [14]]

for(let i=0, j=4; i<arr.length; i++, j--){
    console.log(`a[${i}]=> j[${j}] === ${arr[i][j]}`)
}