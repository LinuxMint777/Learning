/**
 * 1. callback chain.
 * 2. Asynchronus Promise.
 * 3. Async function with await.
 */


// // callback chain.
// function orderFunc(customer, cbf){
//     console.log(`Order by ${customer}`)
//     cbf(customer)
// }
// function processFunc(customer, cbf){
//     console.log(`${customer}, your order is processing.`)
//     setTimeout(() => {
//         console.log('Cooked completed.')
//         console.log('Order process completed by sucessfully')
//         cbf(customer)
//     }, 3000);
// }
// function completedFunc(customer){
//     console.log(`${customer}, thanks for your order`)
// }

// orderFunc('Jahid Hasan', (customer) => {
//     processFunc(customer, (customer) => {
//         completedFunc(customer)
//     })
// })


// // promise
// let metting = false;
// let promise = new Promise((resolve, reject) => {
//     if(!metting){
//         let mettingDetails = {
//             location: 'Google Meet',
//             link: 'www.googlemeet.com/777'
//         }
//         resolve(mettingDetails)
//     }else{
//         reject(new Error('Metting allready scheduled'))
//     }
// })

// function createPromise(data) {
//     let rst = `Google Location: ${data.location} & link: ${data.link}`
//     return Promise.resolve(rst)
// }

// promise
//     .then(createPromise)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err.message))




// Async function
let metting = true;
let promise = new Promise((resolve, reject) => {
    if(!metting){
        let mettingDetails = {
            location: 'Google Meet',
            link: 'www.googlemeet.com/777'
        }
        resolve(mettingDetails)
    }else{
        reject(new Error('Metting allready scheduled'))
    }
})

function createPromise(data) {
    let rst = `Google Location: ${data.location} & link: ${data.link}`
    return Promise.resolve(rst)
}

async function hlw(firstPromise, secondPromise){
    try{
        let fResult = await firstPromise;
        let sResult = await secondPromise(fResult)
        console.log(sResult)
    }catch{
        console.log('Error something')
    }
}
hlw(promise, createPromise)