const socket = io();

const formProducts = document.getElementById('form-products');
const title = document.getElementById('title');
const description = document.getElementById('description');
const price = document.getElementById('price');
const thumbnail = document.getElementById('thumbnail');
const code = document.getElementById('code');
const stock = document.getElementById('stock');
const category = document.getElementById('category');

socket.on('products', (products) => {
  console.log(products);
  const productList = document.getElementById('products-list');
  productList.innerHTML = `
  ${products
    .map(
      (product) => `
    <p>ID: ${product.id}</p>
    <p>Title: ${product.title}</p>
    <p>Description: ${product.description}</p>
    <p>Price: $ ${product.price}</p>
    <img src='' alt='${product.thumbnail}' />
    <p>Code: ${product.code}</p>
    <p>Stock: ${product.stock}</p>
    <p>Category: ${product.category}</p>
    <button type="button" class="btn btn-danger " onclick="deleteProduct(${product.id})">X</button>
`
    )
    .join('')}`;
});

formProducts.addEventListener('submit', (e) => {
  e.preventDefault();
  const newProduct = {
    title: title.value,
    description: description.value,
    price: price.value,
    thumbnail: thumbnail.value,
    code: code.value,
    stock: stock.value,
    category: category.value,
  };
  socket.emit('new-product', newProduct);
});

function deleteProduct(productId) {
  socket.emit('delete-product', productId);
}
