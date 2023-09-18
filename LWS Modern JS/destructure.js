const obj = {
    name: 'JavaScript',
    estd: 1995,
    founder: 'Brendan Eich',
    // lib: ['React', 'Angular', 'Vue'],
    rank: 1,
    test: {
        x: 10,
        y: 20,
        education: {
            bangla: 'Bangla75',
            english: 'English85'
        }
    }
}

const {name, founder} = obj
console.log(name)
console.log(founder)

const {lib: [,sec, third] = []} = obj
console.log(sec)
console.log(third)

const {test: {education: {english, bangla} = {}} = {}} = obj
console.log(english, bangla)
 


let arr = [10,20,30, [1,2,3,4,5], 40,50]

let [, second, , [, , , four] ] = arr
console.log(second, four)