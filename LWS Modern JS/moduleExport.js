export const pi= 3.1416;
export const txt = 'Hello World'


export const fullName = 'Jahid Hasan'
const myFunc = () => {
    console.log('I am my function.')
}
async function orderProcess(customer){
    console.log('Order by, '+customer);
    console.log('Your order is processing! '+customer)
    let com = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Cooking completed.')
                console.log(customer + ' your order process sucessfully done.')
            }, 3000)
        })
    }
    let rst = await com()
}

export default{
    myFunc,
    orderProcess
}