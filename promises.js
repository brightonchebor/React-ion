cart = ['shoes', 'pants', 'accessories'];

createOrder(); // generates orderId
processPayment();

createOrder(cart,
    function (orderId) {
        processPayment(orderId)
    }
);

// using promises
const promise = createOrder(cart);
promise.then(
    function (orderId) {
        processPayment(orderId)
    }
);

// real example
const GITHUB_API = 'https://api.github.com/users/brightonchebor'

const user = fetch(GITHUB_API)

console.log(user)

user.then(function (data) {
    console.log(data)
})

api.createOrder(cart)
api.makePayment(orderId)
api.showOrderSummary(paymentInfo)
api.updateWallet(paymentInfo)

// promise chaining helping us to get out of callbck hell
createOrder(cart)
    .then(orderId => makePayment(orderId))
    .then(paymentInfo => showOrderSummary(paymentInfo))
    .then(paymentInfo => updateWallet(paymentInfo))
    