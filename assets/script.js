fetch("YOUR_GOOGLE_APPS_SCRIPT_URL")
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
