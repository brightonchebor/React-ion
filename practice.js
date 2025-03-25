
let addFun = a => a + 100;
// console.log(addFun(5))

let greeting = () => {
    return 'hello world'
};
// console.log(greeting())

let addTwoNums = (x, y) => {
    let result = x + y;
    return 'The sum is: ' + result
};

// console.log(addTwoNums(7, 90));

// const carBrands = ['Volvo', 'Nissan', 'Toyota']
// console.log('Printing Car Brands.....')
// carBrands.forEach((index, element, carBrands) =>
//     console.log(index, element, carBrands)
// )

// function that checks which number is bigger

function whichBigger(a, b){
    if(a > b){
        return a + ' is bigger than ' + b
    }
    else{
        return b + ' is bigger than ' + a
    }
}
// console.log(whichBigger(3, 6, 8))

function outerFunc(){
    let x = 10

    function innerFunc(){
        let y = 7

        return x + y
    }

    return innerFunc()
}


// console.log(outerFunc())

// Callback

cart = ['shoes', 'jewelery', 'phones']

// api.createOrder()
// api.makePayment()
// api.showOrderSummary()

api.createOrder(cart,
    api.makePayment()
)

function () {
    api.makePayment()
}

