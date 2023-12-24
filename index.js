const urlApi = "http://localhost:3000/";
const endPointProductos = "productos";
const endPointCategoria = "categoria";

async function promesa() {
  const promesa = await fetch(urlApi + endPointProductos);
  const data = await promesa.json();
  console.log(data);
}

promesa();
