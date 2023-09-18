let hlwset = new Set([1,2,3,3,4,5]) // Set declare
console.log(hlwset)
for (let value of hlwset){
    console.log(value)
}

// set method 
let mySet = new Set()
mySet.add(10).add('Bangladesh').add(20)
mySet.add(30)
mySet.add(30)
mySet.add(30)
console.log(mySet)
console.log(mySet.has(20))
mySet.delete('Bangladesh')
console.log(mySet)
console.log(mySet.size)
mySet.clear()
console.log(mySet)

// string use set
let newSet = new Set('Bangladesh')
console.log(newSet)
for(let v of newSet){
    console.log(v)
}


// array to set and set to arr convert
let arrToSet = [1,3,4,2,5,3,10, 2]

let rr = new Set(arrToSet)
console.log(rr)

let rrrArr = [...rr]
console.log(rrrArr)

for(let v of rrrArr){
    console.log(v)
}

console.log(arrToSet)
let yyyrrr = [...new Set(arrToSet)] // array => set => array convert (Short form).
console.log(yyyrrr)

// set reference type

let jsSet = new Set()
jsSet.add(10).add(20).add(30)
jsSet.add({
    a:777,
    b: 999
})
jsSet.add({
    a:777,
    b: 999
})
console.log(jsSet)

let ppp = {
    x: 111,
    y: 222
}
jsSet.add(ppp)
jsSet.add(ppp)
console.log(jsSet);


// Union, intersection, difference

let ab = new Set([1,2,3])
let ba = new Set([4,3,2])

let union = new Set([...ab, ...ba])
console.log(union)

let interSection = new Set([...ab].filter((value) => ba.has(value)))
console.log(interSection)

let difference = new Set([...[...ab].filter(value => !ba.has(value)), ...[...ba].filter(value => !ab.has(value))])
console.log(difference)