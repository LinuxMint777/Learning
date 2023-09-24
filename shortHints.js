/**
 * 1. Arrow function.
 * 
 * 2. Truthy / Falsy Value.
 * 
 * 3. Ternary Operator with logical && and logical || Operator.
 * 
 * 4. Array Method: find, findIndex, filter, slice, splice (mutable), [push,unshift,pop, shift] (mutable), concat, map, reduce, copyWithin.
 * 
 * 5. Loop: for, while, do while, for in, for of (Use Object, array, string).
 * 
 * 6. Object Default method: Object.keys(), Object.values(), Object.entries()
 * 
 * 7. Function default parameter.
 * 
 * 8. Spread Operator (Use Object, array).
 * 
 * 9. Rest Operator with function default parameter arguments (rest operator only use last parameter)
 * 
 * 10. Destructuring (Use object, array) - default value use example: const {lib: {education: {degree} = {}} = {}} = objName
 * 
 * 11. Module import export (named import with alias use && default import)
 * 
 * 12. Template literals.
 * 
 * 13. Tagged Template.
 * 
 * 14. Set and WeakSet use.
 * 
 * 15. ES11/ JS2020 - globalThis, BigInt, Optional Chaining {obj, arr}, Nullish Coalescing Operator {logical or operator as like}, Dynamic Import, Promise.allSettled.
 * 
 * 16. ES2023 Feature: toReversed(), toSpliced(), toSorted(), with() - all method are immutable way.
 */











/**
 * 1. Scope: lexical scoping => global scope , local scope: functional scope, block scope. child scope access parent scops data but parent not access child scope.
 * 
 * 2. var vs let vs const: var => functional scope, let & const => block scope,
 * var = reassign & update, let = only do update but not allow reassign, const = not allow reassign and update. const update object properties.
 * 
 * 3. Closures: parrent function er data child access closures er maddhome access korte pare.
 * function Parent(){
 *      let value1 = 777
 *      return function Child(){
 *          console.log(value1) // Value1 = 777 closure hosse. Ei karoner 
 *                                  Child value1 er data access korte partese.
 *      }
 * }
 * 
 * 4. Hoisting: Execution context => Creational Phase a - Variable k undefined and function er reference k sobar prothom a store kore, ei tai Hoisting.
 * 
 * 5. Prototype: Prototype Chain => Protoype er maddhome defalut method . dot notaion er maddhome use kora jai. 
 * Object.create(Parent.prototype),
 * class Person{
 *      constructor(name, email){
 *          this.name = name
 *          this.email = email
 *      }
 *      eat(){
 *          console.log('I am method')
 *      }
 * }
 * 
 * 6. Prototype Inheritance: Parent.call(this), Child.prototype = Object.create(Parent.prototype), Child.prototype.constructor = Child.
 * class Child extends Parrent{
 *      constructor(name, email, typed){
 *          super(name, email)
 *          this.type = type
 *      }
 *      play(){
 *          console.log('I am playing')
 *      }
 *      get getMethod(){
 *          return play()
 *      }
 *      set setMethod(email){
 *          return this.email = email
 *      }
 *      static myMethod(){
 *          console.log('I am static method')
 *      }
 * }
 * 
 * 7. this keyword: 1. implicit binding 2. explicit binding 3. new binding 4. global or window binding.
 * 
 * 8. Execution Context: 1. Global Execution Context 2. Function Execution Context
 * Global Execution Context => global=globalObject, this=global, variableObject, Scope
 * Function Execution Context => Arguments, this, variableObject, Scope
 * Execution Context => Creational Phase => Executional Phase. [Use Call Stak- Stack LIFO rules follow]
 * Execution Context Under: Scope, Closures, Hoisting.
 * 
 * 9. Higher Order Function: Higherorder function are two rules, if statisfy only one or both rules then you called higher order function.
 * Function return another function, function pass by another function arguments.
 * 
 * 10. Asynchornous Javascript: callback chain heal, promise, promise.all, promise.race, promise.allSettled, aysnc await, try & catch block, then & catch => resolve & reject.
 * 
 * 11. Recusion or Recursive Function. [Don't know about this topics]
 * 
 * 12. Event Loop: Hip, Call Stack [LIFO], Web API, EVENT LOOP => Render QUEUE [FIFO], Multitask QUEUE [FIFO] - Promise & aysnc await handle, Callback QUEUE [FIFO]
 */