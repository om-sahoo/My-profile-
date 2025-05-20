const products = [
  { name: 'iPhone 13', category: 'Mobiles', image: 'phone.jpg', price: 799 },
  { name: 'Samsung Galaxy', category: 'Mobiles', image: 'https://via.placeholder.com/200x150?text=Galaxy', price: 699 },
  { name: 'T-Shirt', category: 'Fashion', image: 'image-6.jpg', price: 29 },
  { name: 'Jeans', category: 'Fashion', image: 'Jeans.jpg', price: 49 },
];

let cartCount = 0;

function renderProducts(filter = 'All') {
  const container = document.getElementById('products');
  container.innerHTML = '';

  const filtered = filter === 'All' ? products : products.filter(p => p.category === filter);

  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h4>${product.name}</h4>
      <button onclick="addToCart()">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

function addToCart() {
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
}

function filterCategory(category) {
  renderProducts(category);
}

function searchProducts() {
  const searchValue = document.getElementById('search').value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(searchValue));
  const container = document.getElementById('products');
  container.innerHTML = '';
  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h4>${product.name}</h4>
      <button onclick="addToCart()">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}
function renderProducts(filter = 'All') {
  const container = document.getElementById('products');
  container.innerHTML = '';

  const filtered = filter === 'All' ? products : products.filter(p => p.category === filter);

  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h4>${product.name}</h4>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

renderProducts();