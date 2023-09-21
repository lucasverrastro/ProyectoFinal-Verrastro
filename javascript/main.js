// Obtén una referencia al contenedor del carrito y al elemento del total
const carrito = document.getElementById("productos-carrito");
const totalCarrito = document.getElementById("total-carrito");



// Variables para mantener el estado del carrito
const cart = [];
let total = 0;

// Función para agregar un producto al carrito
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
}

const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

addToCartButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    const productId = event.target.getAttribute("data-product-id");
    const productDescriptionElement = document.querySelector(`.list-group-item[data-product-id="${productId}"]`);
    const productNameElement = document.querySelector(`.card-title[data-product-id="${productId}"]`);

    if (productDescriptionElement && productNameElement) {
      const productPrice = parseInt(productDescriptionElement.textContent.match(/\d+/)[0])
      const productName = productNameElement.textContent.trim();
      addToCart(productName, productPrice);
      updateCart();
    } else {
      console.error(`Producto con ID: ${productId} no encontrado`);
    }
  });
});
// Función para actualizar el contenido del carrito
function updateCart() {
    // Limpia el contenido del carrito
    carrito.innerHTML = '';

    // Inicializa el total del carrito
    let total = 0;

    // Recorre los elementos en el carrito y muestra cada uno
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;

        // Agrega un botón "Eliminar" para cada elemento
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => {
            removeFromCart(index); // Llama a la función para eliminar
        });

        // Agrega el botón al elemento de la lista
        listItem.appendChild(deleteButton);

        carrito.appendChild(listItem);
        total += item.price;
    });

    // Actualiza el total del carrito
    totalCarrito.textContent = total.toFixed(2);
}

// Add a click event listener to each button


// Función para eliminar un producto del carrito
function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1); // Elimina el elemento del arreglo
        updateCart(); // Actualiza la vista del carrito
    }
}
// Función para actualizar el contenido del carrito


function updateCart() {
  const cartItemsElement = document.getElementById("productos-carrito");
  cartItemsElement.innerHTML = "";

    // Inicializa el total del carrito
    let total = 0;

    // Recorre los elementos en el carrito y muestra cada uno
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;

        // Agrega un botón "Eliminar" para cada elemento
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => {
            removeFromCart(index); // Llama a la función para eliminar
        });

        // Agrega el botón al elemento de la lista
        listItem.appendChild(deleteButton);

        carrito.appendChild(listItem);
        total += item.price;
    });

    // Actualiza el total del carrito debajo de la lista
    totalCarrito.textContent = total.toFixed(2);
}
 const listItemTotal = document.createElement("li");
  listItemTotal.textContent = `Total : $${total.toFixed(2)}`;
  cartItemsElement.appendChild(listItemTotal)

  


