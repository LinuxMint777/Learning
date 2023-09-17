const falsyArr = [0, false, '', NaN, undefined, null,1,2,3, Infinity, 'JS']

const rst = falsyArr.map((value) => {
    if(!value){
        console.log(`It's called falsy Value: ${value}`)
    }else{
        console.log(`Truthy Value: ${value}`)
    }
})

// Falsy value list: [0, null, undefined, NaN, false, '']
