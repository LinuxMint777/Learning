function difference (firstSet, secondSet){
    let rst = new Set([...[...firstSet].filter((value) => !secondSet.has(value)), ...[...secondSet].filter((value) => !firstSet.has(value))])
    return rst
}

let a = new Set([1,2,3])
let b = new Set([4,3,2])

let p = difference(a, b)
console.log(p)