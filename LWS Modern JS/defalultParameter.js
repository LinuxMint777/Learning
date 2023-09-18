function hlw(name= 'Mr. Demo Name', age='18'){
    if(age > 18){
        console.log(`${name}! you are adult : ${age}`)
    }
}

hlw('Jahid Hasan', 20)


function none(){
    console.log(arguments);
    for(value of arguments){
        console.log(value)
    }
}

none(1,2,3,4,5)