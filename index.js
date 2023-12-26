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
    const containerImg = document.createElement("div");
    const img1 = document.createElement("img");
    img1.src = element.img1;
    const img2 = document.createElement("img");
    img2.src = element.img2;
    const img3 = document.createElement("img");
    img3.src = element.img3;
    containerImg.appendChild(img1);
    containerImg.appendChild(img2);
    containerImg.appendChild(img3);
    card.appendChild(containerImg);
    containerImg.classList.add(
      "flex",
      "overflow-scroll",
      "w-[400px]",
      "relative"
    );
    containerImg.style.scrollSnapType = "x mandatory";
    containerImg.style.scrollSnapAlign = "center";
    img1.classList.add("sticky", "object-cover", "w-full", "left-0");
    img2.classList.add("sticky", "object-cover", "w-full", "left-0");
    img3.classList.add("sticky", "object-cover", "w-full", "left-0");
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
