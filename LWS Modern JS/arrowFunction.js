function normalFunction(name){
    console.log(name)
}
normalFunction('Jahid Hasan')

// Arrow function use
let arrowFunc = (name) => console.log(name)
arrowFunc('Linux Mint')

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

let obj = {
    name: 'JavaScript',
    est: '1995',
    founder: 'Brendan Eich',
    lib: ['React', 'Angular', 'Vue'],
    rank: '01',
    print: function(){
        this.lib.forEach(function(value){
            console.log(`${this.name} is create ${value} library.`)
        }, this)
    }
}
obj.print()

// Arrow function use.
let objArrowFuncUse = {
    name: 'JavaScript',
    est: '1995',
    founder: 'Brendan Eich',
    lib: ['React', 'Angular', 'Vue'],
    rank: '01',
    print(){
        this.lib.forEach((value) => {
            console.log(`${this.name} is create ${value} library.`)
        })
    }
}
objArrowFuncUse.print()

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function Person(name, age){
    this.name = name
    this.age = age
    this.print = function(){
        console.log(this.name, this.age)
    }
}
let per = new Person('Jahid Hasan', '26');
per.print()

// arrow function use (Error bcz Arrow function not a constructor function.)
    // const PersonArrowFunc = (name, age) => {
    //     this.name = name
    //     this.age = age
    //     this.print = function(){
    //         console.log(this.name, this.age)
    //     }
    // }
    // let perArr = new PersonArrowFunc('Jahid Hasan', '26')
    // perArr.print()
