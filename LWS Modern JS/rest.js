function hlw (){
    for(value of arguments){
        console.log(value)
    }
}
hlw(1,2,3,4,5)

function myFunc (first, ...params){
    console.log(first)
    console.log(params)
    params.map((value) => console.log(value))
}
myFunc(777,123,45,78,15,67)