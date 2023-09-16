async function orderProcess(customer) {
    console.log('Order by : '+customer)
    console.log('Your order is processing! '+customer)
    let promise = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Cooking Completed.')
                console.log('Your order is successfuly Completed.')
            }, 3000)
        })
    }
    await promise()
}

orderProcess('Jahid Hasan')