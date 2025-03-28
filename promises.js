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