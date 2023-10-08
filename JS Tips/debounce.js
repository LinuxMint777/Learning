
// jahid.addEventListener('click', debounce(() => console.log('I am click')))

function debounce(fn = {}, dealy = 2000){
    let timeOut;
    return function(){
        if(timeOut){
            clearTimeout(timeOut)
        }
        timeOut = setTimeout(() => {
                // fn()
            }, dealy)
        }
}
let rst = debounce()
console.dir(rst)