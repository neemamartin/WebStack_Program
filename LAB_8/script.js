const productContainer = document.getElementById('productContainer');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
let products = []; // Array to store products

// Function to make an AJAX request and fetch products.json
function fetchProducts() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'products.json', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            products = JSON.parse(xhr.responseText);
            displayProducts(products);
        } else {
            console.error('Failed to fetch products.');
        }
    };

    xhr.send();
}

// Function to display products on the webpage
function displayProducts(productsToShow) {
    productContainer.innerHTML = '';

    productsToShow.forEach((product) => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        const productImage = document.createElement('img');
        productImage.classList.add('product-image');
        productImage.src = product.image;
        productItem.appendChild(productImage);

        const productName = document.createElement('h2');
        productName.textContent = product.name;
        productItem.appendChild(productName);

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productItem.appendChild(productDescription);

        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price.toFixed(2)}`;
        productItem.appendChild(productPrice);

        productContainer.appendChild(productItem);
    });
}

// Function to filter products based on user input
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter((product) => {
        return (
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    });
    displayProducts(filteredProducts);
}

// Function to sort products based on user selection
function sortProducts() {
    const sortBy = sortSelect.value;
    const sortedProducts = [...products];

    if (sortBy === 'name') {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'price') {
        sortedProducts.sort((a, b) => a.price - b.price);
    }

    displayProducts(sortedProducts);
}

// Fetch products when the page loads
fetchProducts();
