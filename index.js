var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  item = {itemName: (Math.floor(Math.random() * 100))};
  for(i=0; i<cart.length; i++){
    cart.push(item);
}
  console.log(`$(itemName) has been added to your cart.`);
  return cart;
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
