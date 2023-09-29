// const getButton = document.getElementById('get-button');

function debounce(fn, dealy=500){
    let timer;
    return function(){
        if(timer){
            console.log(timer)
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn()
        }, dealy)
    }
}
// getButton.addEventListener('click', debounce(function(){console.log('Save Data successfuly.')}))