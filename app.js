// Global Scope

var a = 1
let b = 2
const c = 3

function test(){
    // Child Scope

    var a = 4
    let b = 5
    const c = 6

    console.log('Local Scope', a, b, c)
}

test()
console.log('Global Scope', a, b, c)