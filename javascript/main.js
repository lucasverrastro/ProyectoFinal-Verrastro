//BUSCADOR CON RECOMENDACIONES

const listadoItems = ["Alma Negra Blend", "D.V Catena Zapata", "Luigi Bosca Malbec", "Nicasia Malbec", "Piattelli Arlene", "Piattelli Torrontes", "Rutini Malbec", "Salentein Malbec"];

// Seleccionamos los elementos del HTML
const inputBuscar = document.querySelector("#buscador");
const divResultados = document.querySelector("#resultados");

// Buscador: cada vez que se actualice el input, se dispara este detector de evento
inputBuscar.addEventListener("input", function () {
  const resultados = listadoItems.filter(
    (item) =>
      inputBuscar.value &&
      item.toLocaleLowerCase().includes(inputBuscar.value.toLocaleLowerCase())
  );
  actulizarHTML(resultados);
});

// Función para actualizar nuestro HTML: me muestra los resultados en el
// div #resultados
function actulizarHTML(resultados) {
  // Vacío el div antes de mostrar los resultados por las dudas
  divResultados.innerHTML = "";
  // Recorro item por item de los resultados y los muestro en párrafo
  for (const item of resultados) {
    divResultados.innerHTML += `<p>${item}</p>`;
  }
}