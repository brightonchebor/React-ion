// Global Scope

// var a = 1
// let b = 2
// const c = 3

function test(){
    // Child Scope

    var a = 4
    let b = 5
    const c = 6

    console.log('Local Scope', a, b, c)
}

let global = () => {

    // Another Global Scope
    var a = 7
    var b = 8
    var c = 9

    console.log('Another Global Scope', a, b, c)
}

// test()
// console.log('Global Scope', a, b, c)
// global()

// Asynchrounous JavaScript

let a = 5
let b = 6

function addTwoUSer(a,b){
    return a + b
}

function displaySum(){
    sum = addTwoUSer(a,b)
    console.log('sum is: ', sum)
}

displaySum()