const products = [
    { "id": 1, "name": "Wireless Mouse", "price": 25.99 },
    { "id": 2, "name": "Mechanical Keyboard", "price": 79.99 },
    { "id": 3, "name": "Gaming Monitor", "price": 299.99 },
    { "id": 4, "name": "External Hard Drive", "price": 89.99 },
    { "id": 5, "name": "USB-C Hub", "price": 34.99 },
    { "id": 6, "name": "Bluetooth Speaker", "price": 59.99 },
    { "id": 7, "name": "Noise Cancelling Headphones", "price": 199.99 },
    { "id": 8, "name": "Smartphone Stand", "price": 12.99 },
    { "id": 9, "name": "Wireless Charger", "price": 29.99 },
    { "id": 10, "name": "Laptop Cooling Pad", "price": 24.99 },
    { "id": 11, "name": "Portable Power Bank", "price": 45.99 },
    { "id": 12, "name": "Ergonomic Chair", "price": 249.99 },
    { "id": 13, "name": "Adjustable Standing Desk", "price": 399.99 },
    { "id": 14, "name": "Smart LED Bulb", "price": 19.99 },
    { "id": 15, "name": "4K Webcam", "price": 89.99 },
    { "id": 16, "name": "Smartwatch", "price": 149.99 },
    { "id": 17, "name": "Portable Projector", "price": 199.99 },
    { "id": 18, "name": "Fitness Tracker", "price": 99.99 },
    { "id": 19, "name": "VR Headset", "price": 349.99 },
    { "id": 20, "name": "Noise-Isolating Earbuds", "price": 49.99 }
  ];

function getProductById(id) {
    return products.find(product => product.id === id);
}

function renderProducts() {
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = ''; 

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productsContainer.appendChild(productDiv);
    });
}
