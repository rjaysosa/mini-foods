let cart = 0;

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

function addToCart() {
  cart++;
  document.getElementById("cartCount").innerText = cart;
  document.getElementById("cartItems").innerText = cart;
}