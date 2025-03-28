cart = ['shoes', 'pants', 'accessories'];

createOrder(); // generates orderId
processPayment();

createOrder(cart,
    function () {
        processPayment(orderId)
    }
);

// using promises
const promise = createOrder(cart);
promise.then(
    function () {
        processPayment(orderId)
    }
);

