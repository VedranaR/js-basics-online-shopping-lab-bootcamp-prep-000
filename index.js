var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = (Math.floor(Math.random() * 100+1));
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var x = [];
  var y = 'In your cart, you have';
  for (var i = 0; i < cart.length; i++){
    var itemName = Object.keys(cart[i]);
    var priceNum = cart[i][itemName];
        x.push(`${itemName} at $ ${priceNum}`);
    }
  var middle = x.join(' and ');
  var beginning = x.slice(0, -1).join(', ');
  var end = x.slice(-1);

  if (cart.length === 0){console.log('Your shopping cart is empty.')}
  else if (cart.length === 1){console.log(`${y} ${x}.`)}
  else if (cart.length === 2){console.log(`${y} ${middle}.`)}
  else if (cart.length > 2){return(`${y} ${beginning}, and ${end}.`)}
  }
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
