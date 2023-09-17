const carrito = [];

function agregar(cardId) {

    const card = document.querySelector(`[data-id="${cardId}"]`);
    const cardNombre = card.querySelector('.card-title').textContent;
    const cardPrecio = parseFloat(card.querySelector('.list-group-item').textContent.replace('$', ''));
};
const almaNegraBlend = {
  id: 1,  
  nombre: "Alma Negra Blend",
  precio: 7840,
  subtotal: 7840,
  cantidad: 1,
};
const dvCatenaZapata = {
  id: 2,  
  nombre: "D.V Catena Zapata",
  precio: 7250,
  subtotal: 7250,
  cantidad: 1,
};
const luigiBoscaMalbec = {
  id: 3,  
  nombre: "Luigi Bosca Malbec",
  precio: 5100,
  subtotal: 5100,
  cantidad: 1,
};
const nicasiaMalbec = {
  id: 4,  
  nombre: "Nicasia Malbec",
  precio: 3500,
  subtotal: 3500,
  cantidad: 1,
};

carrito.push(almaNegraBlend);
carrito.push(dvCatenaZapata);
carrito.push(luigiBoscaMalbec);
carrito.push(nicasiaMalbec);

actualizarCarrito();
function actualizarCarrito() {
    const listaCarrito = document.getElementById('Carrito');
    const totalElement = document.getElementById('total');

    // Clear the current cart display
    listaCarrito.innerHTML = '';

    // Calculate the total price
    let total = 0;

    // Loop through each item in the cart and display it
    cart.forEach(item => {
        const listaCarrito = document.createElement('li');
        listaCarrito.textContent = `${card.nombre} - $${card.precio}`;
        listaCarrito.appendChild(listaCarrito);
        total += card.precio;
    });

    // Update the total price
    totalElement.textContent = total.toFixed(2);
}



