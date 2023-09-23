/**
 * 1. implicit binding this keyword
 * 2. explicit binding this keyword
 * 3. new binding this keyword
 * 4. window/global binding this keyword
 */

// // implicit binding
// let obj = {
//     x: 10,
//     y: 20,
//     print(){
//         console.log('Implicit binding: this keyword - ' + this.x + this.y)
//     }
// }
// obj.print()



// explicit binding

function print(){
    console.log('Explicit binding: this keyword - ' + this.x + this.y)
}

let obj2 = {
    x: 777,
    y: 
}