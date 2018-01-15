var cart = [];

function getCart(item) {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var itemPrice = Math.floor(Math.random()*100)+1;
 var item = {};
 item[itemName] = itemPrice;
 cart.push(item);
 console.log (`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
   if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
   }
  var list = [];
  for (var i=0; i<cart.length; i++) {
    var itemName = Object.keys(cart[0]);
    var price = Object.values(cart[0]);
    list.push(`${itemName} at $${price}`);
    
   if (cart === 1) {
     console.log(`In your cart, you have ${list}.`);
   }
   }   
}

function total() {
  var cost = Object.values(cart);
  var sum = 0;
  for (var i=0; i<cart.length; i++) {
    sum += cost[i];
  } 
}

function removeFromCart(item) {
  if (cart.hasOwnProperty(item) === true) {
    delete cart['item'];
    return cart;
  }
  else {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === false) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    console.log`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  }
}
