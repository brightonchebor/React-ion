
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

const carBrands = ['Volvo', 'Nissan', 'Toyota']
console.log('Printing Car Brands.....')
carBrands.forEach((index, element, carBrands) =>
    console.log(index, element, carBrands)
)