
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
// api.updateWallet()


// callback hell and pyramid of doom because the functions are nested inside one another
// we can overcpme this by using promises
// showing how to solve in promises.js
api.createOrder(cart,
    function () {
        api.makePayment(
            function () {
                api.showOrderSummary(
                    function () {
                        api.updateWallet()
                    }
                )
            }
        )
    }
    
    
)
// another way of writng it
api.createOrder(cart, 
    () => api.makePayment(
        () => api.showOrderSummary(
            () => api.updateWallet()
        )
    )
)


