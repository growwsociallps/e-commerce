fetch("https://script.google.com/macros/s/AKfycbxyXQonPDzy9PRo8MmPBmdRL-2MF2OnwbCbDyrYqVVvCfA4j9sPGgxjg-huuCBhnLEB/exec")
  .then(response => response.json())
  .then(data => {
    let productContainer = document.getElementById("products");
    data.forEach(product => {
      let div = document.createElement("div");
      div.innerHTML = `
        <img src="${product.image}" width="150">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
      `;
      productContainer.appendChild(div);
    });
  });

function addToCart(id, name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ id, name, price, quantity: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}
