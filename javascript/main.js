// Obtén una referencia al contenedor del carrito y al elemento del total
const carrito = document.getElementById("productos-carrito");
const totalCarrito = document.getElementById("total-carrito");

// Inicializa el carrito como un arreglo vacío
const cart = [];

// Función para agregar un producto al carrito
function addToCart(productName, productPrice) {
    const item = { name: productName, price: productPrice };
    cart.push(item);
    updateCart();
}

// Función para actualizar el contenido del carrito
function updateCart() {
    // Limpia el contenido del carrito
    carrito.innerHTML = '';

    // Inicializa el total del carrito
    let total = 0;

    // Recorre los elementos en el carrito y muestra cada uno
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        carrito.appendChild(listItem);
        total += item.price;
    });

    // Actualiza el total del carrito
    totalCarrito.textContent = total.toFixed(2);
}

// Agregar eventos a los botones "Agregar al carrito"
const botonesAgregar = document.querySelectorAll(".btnDisplay");
botonesAgregar.forEach(boton => {
    boton.addEventListener("click", () => {
        const card = boton.closest(".card");
        const productName = card.querySelector(".card-title").textContent;
        const productPrice = parseFloat(card.querySelector(".list-group-item").textContent.replace("$", ""));
        addToCart(productName, productPrice);
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

// Función para eliminar un producto del carrito
function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1); // Elimina el elemento del arreglo
        updateCart(); // Actualiza la vista del carrito
    }
}
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

    // Actualiza el total del carrito debajo de la lista
    totalCarrito.textContent = total.toFixed(2);
}

