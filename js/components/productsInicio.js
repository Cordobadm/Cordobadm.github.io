
let cardProduct = document.querySelector(".content-product");
let contenedorProductos = [];


const URLGET = "../js/costants/products.json";
$.getJSON(URLGET, (data) => {
  contenedorProductos = data;
  agregarProductosAlhtml(contenedorProductos);
});

function agregarProductosAlhtml(array) {
  cardProduct.innerHTML = "";

  array.map((e) => {
    cardProduct.innerHTML += `
    <div class="swiper-slide card">
      <div class= "card-content">
        <div class="image"> 
          <a target="_top" href="${e.img}">
            <img src="${e.img1}">
          </a>
        </div>
        <div class="info-novedades">
          <h5>${e.marca}</h5>
          <h6 class="card-title">${e.nombre}</h6>
          <h4>Precio: $<span>${e.precio}</span></h4>
        </div>
        <div class="turnos-novedades"
          <li id="turnos">
            <a href="https://api.whatsapp.com/send/?phone=543813846221&text=¡Hola Chicas! Quiero comprar ${e.nombre}" target="_blank">
            <img src="../img/iconos/iconoWhatsapp.png" alt="imagen whatsapp">Comprar</a>
          </li>
        </div>
      </div>
    </div>
  `;
  });

}

