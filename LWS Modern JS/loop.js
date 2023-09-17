let arr = [1,2,3,4,5,50,40,30,20,10]

// for loop
let length = arr.length;
for(let i=0; i < length; i++){
    console.log(arr[i])
}

// While loop
let count = 0
while(true){
    if(count < length){
        console.log(arr[count])
        count++
    }else{
        break;
    }
}

// do while loop
do{
    console.log('Do forcely.')
}while(false)

// for in and for of loop for array.
let arr1 = [2,4,6,8,10]

for(element in arr1){
    console.log(`Index: ` + element)
}
for(element of arr1){
    console.log('Value: '+element)
}

// for in loop for object.
let obj = {
    name: 'JavaScript',
    estd: '1995',
    founder: 'Brendan Eich',
    rank: '01'
}

for(props in obj){
    console.log('Key: '+props)
}
for (props in obj){
    console.log('Value: ' + obj[props])
}

// for in and for of loop for string.
let str = 'I love Bangladesh'

for(element in str){
    console.log('Index: '+element )
}
for(element of str){
    console.log('Value: ' +element)
}