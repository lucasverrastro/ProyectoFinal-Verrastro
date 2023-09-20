////BUSCADOR CON RECOMENDACIONES
//
//const listadoItems = ["Alma Negra Blend", "D.V Catena Zapata", "Luigi Bosca Malbec", "Nicasia Malbec", "Piattelli Arlene", "Piattelli Torrontes", "Rutini Malbec", "Salentein Malbec"];
//
//// Seleccionamos los elementos del HTML
//const inputBuscar = document.querySelector("#buscador");
//const divResultados = document.querySelector("#resultados");
//
//// Buscador: cada vez que se actualice el input, se dispara este detector de evento
//inputBuscar.addEventListener("input", function () {
//  const resultados = listadoItems.filter(
//    (item) =>
//      inputBuscar.value &&
//      item.toLocaleLowerCase().includes(inputBuscar.value.toLocaleLowerCase())
//  );
//  actulizarHTML(resultados);
//});
//
//// Función para actualizar nuestro HTML: me muestra los resultados en el
//// div #resultados
//function actulizarHTML(resultados) {
//  // Vacío el div antes de mostrar los resultados por las dudas
//  divResultados.innerHTML = "";
//  // Recorro item por item de los resultados y los muestro en párrafo
//  for (const item of resultados) {
//    divResultados.innerHTML += `<p>${item}</p>`;
//  }
//}
//
//CARRITO DE COMPRAS



// Variables para mantener el estado del carrito
const cart = [];
let total = 0;

// Función para agregar un producto al carrito
function addToCart(productName, price) {
    console.log('productName', productName)
    console.log('price', price)
    cart.push({ name: productName, price: price });
    total += price;
    console.log('total', total)
    console.log(cart)
}

// Función para actualizar el contenido del carrito
// function updateCart() {
//     const cartItemsElement = document.getElementById("productos-carrito");
//     console.log('cartItemsElement', cartItemsElement)
//     cartItemsElement.innerHTML = "";

//     cart.forEach((item, index) => {
//         const listItem = document.createElement("li");
//         listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
//         cartItemsElement.appendChild(listItem);
//     });

//     const cartTotalElement = document.getElementById("total-carrito");
//     cartTotalElement.textContent = `$${total.toFixed(2)}`;
// }

// Event listeners para los botones "Añadir al carrito"
// const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
// addToCartButtons.forEach((button, index) => {
//     button.addEventListener("click", () => {

//         console.log('click en agregar producto')
//         const productDescription = document.querySelectorAll(".list-group-item")[index].textContent;
//         const productPrice = parseFloat(productDescription.match(/\d+\.\d+/)[0]); // Extrae el precio del texto

//         addToCart(productDescription, productPrice);
//         updateCart();
//     });
// });

const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

addToCartButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    const productId = event.target.getAttribute("data-product-id");
    console.log('productIds', productId)
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

// Add a click event listener to each button


// Función para eliminar un producto del carrito
function removeFromCart(index) {
  const removedItem = cart.splice(index, 1)[0];
  total -= removedItem.price;
}

// Función para actualizar el contenido del carrito


function updateCart() {
  const cartItemsElement = document.getElementById("productos-carrito");
  cartItemsElement.innerHTML = "";

  cart.forEach((item, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      
      const removeButton = document.createElement("button");
      removeButton.textContent = "Eliminar";
      removeButton.addEventListener("click", () => {
          removeFromCart(index);
          updateCart();
      });

      listItem.appendChild(removeButton);
      cartItemsElement.appendChild(listItem);
  });

  const listItemTotal = document.createElement("li");
  listItemTotal.textContent = `Total : $${total.toFixed(2)}`;
  cartItemsElement.appendChild(listItemTotal)

}

