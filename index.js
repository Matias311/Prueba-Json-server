const urlApi = "http://localhost:3000/";
const endPointProductos = "productos";
const endPointCategoria = "categoria";
const containerIphone = document.querySelector("[data-container-phone]");

async function promesa() {
  const promesa = await fetch(urlApi + endPointProductos);
  const data = await promesa.json();
  console.log(data);
  DOM(data);
}

function DOM(data) {
  data.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("border", "rounded");
    const title = document.createElement("h2");
    title.classList.add("text-center");
    title.innerHTML = element.nombre;
    card.appendChild(title);
    const price = document.createElement("p");
    price.classList.add("text-center");
    price.innerHTML = "$" + element.price;
    card.appendChild(price);
    containerIphone.appendChild(card);
  });
}

promesa();
