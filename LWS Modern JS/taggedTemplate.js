let per1 = 'Sakib'
let per2 = 'Tamim'

console.log(modifierFunc`We have ${per1} and ${per2} in our cricket team.`)

function modifierFunc(string, ...values){
    console.log(string)
    console.log(values)
    let mValue = string.reduce((prev, current) => {
        return prev + current + (values.length ? 'Mr.' +values.shift() : '')
    }, '')
    return mValue;
}


// deep example for tagged template literals.
let player1 = 'Mehidy Hasan'
let player2 = 'Mustafizur Rahman'
let player3 = 'Liton Das'
let player4 = 'Najmul Hossain Shanto'
let player5 = 'Mushfiqur Rahim'
let player6 = 'Nasum Ahmed'
let player7 = 'Anamul Haque'
let player8 = 'Hasan Mahmud'
let player9 = 'Mohammad Naim'
let player10 = 'Mahmudullah'
let player11 = 'Shakib Al Hasan'


console.log(mod`We have player ${player1}, ${player2}, ${player3}, ${player4}, ${player5}, ${player6}, ${player7}, ${player8}, ${player9}, ${player10} and ${player11} in our cricket team.`)

function mod(str, ...value){
    let rst = str.reduce((prev, curr) => {
        return prev + curr + (value.length ? 'Mr. ' +value.shift(): '')
    }, '')
    return rst
}