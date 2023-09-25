// simple example
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts')
xhr.responseType = 'json'
xhr.send()
xhr.onload = function(){
    let response_data = xhr.response
    console.log(response_data)
}




// // get and send data 
// const getButton = document.getElementById('get-button');
// const sendButton = document.getElementById('send-button');

// const sendRequestFunction = function(method, url, sendData){
//     const promise = new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()
//         xhr.responseType = 'json'
//         xhr.open(method, url);
//         if(sendData){
//             xhr.send(sendData)
//         }else{
//             xhr.send()
//         }
//         xhr.onload = function(){
//             if(xhr.status >= 400){
//                 reject(xhr.response)
//             }else{
//                 resolve(xhr.response)
//             }
//         }
//         xhr.onerror = function(){
//             reject('Something Wrong! Error by xhr.onError.')
//         }
//     })
//     return promise;
// }


// const getDataFunction = function(){
//     sendRequestFunction('GET', 'https://jsonplaceholder.typicode.com/todos/1')
//         .then((res) => {
//             for(let props in res){
//                 console.log(`Every Single line - ${props} => ${res[props]}`)
//             }
//         })
//         .catch((err) => console.log(err))
// }


// const sendDataFunction = function(){
//     sendRequestFunction('POST', 'https://jsonplaceholder.typicode.com/posts',JSON.stringify({
//         "userId": 777,
//         "id": 777,
//         "title": "Jahid delectus aut autem",
//         "completed": true
//     }))
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
// }

// getButton.addEventListener('click', getDataFunction)
// sendButton.addEventListener('click', sendDataFunction)