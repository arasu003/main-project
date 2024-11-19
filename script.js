// Cart array to hold items
let cart = [];

// Add item to cart
function addToCart(id, name, price) {
  const item = { id, name, price };
  cart.push(item);
  displayCart();
}

// Display cart items and total
function displayCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = ""; // Clear previous items

  let total = 0;
  cart.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(itemElement);
    total += item.price;
  });

  document.getElementById("total").textContent = `Total: $${total}`;
}

// Checkout function (simulating payment)
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Proceeding to payment...");
    cart = [];  // Clear the cart after checkout
    displayCart();
  }
}

// Combined function for "Buy Now" button
function addToCartAndPlaceOrder(id, name, price) {
  addToCart(id, name, price);
  checkout();
}

// Basic login validation (example)
function loginUser() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "user" && password === "password") {
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid login details.");
  }
}
