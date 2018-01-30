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
  if(cart.length===0){
    console.log("Your shopping cart is empty.");
  }
  else{
    for(let i=0; i>cart.length; i++){
      
    }
    cart.length===1 ? console.log(`In your cart, you have ${item} at $ ${price}.`):
    cart.length===2? console.log(`In your cart, you have ${cart[0][item]} at $ ${cart[0][price]} and ${cart[1][item]} at $ ${cart[1][price]}.`):
    cart.length>2? console.log(`In your cart, you have ${cart[0][item]} at $ ${cart[0][price]} and ${cart[1][item]} at $ ${cart[1][price]}.`);
      
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
