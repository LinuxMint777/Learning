function stopWatch(){
    let oldTime = Date.now()
    function getDealy(){
        console.log(Date.now() - oldTime)
    }
    return getDealy;
}
let p = stopWatch()

let rst = 0
for(let i=0; i<=10000000000; i++){
    rst += i
}
console.log(rst)

p()



let xyz = 1000
function firstFunction(){
    let ppp = 777;
    return function(){
        console.log(xyz, ppp) // let ppp=777 is closure and let xyz= 1000 is Script.
    } 
}