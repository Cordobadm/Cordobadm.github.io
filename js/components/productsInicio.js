
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
          <img src="${e.img}">
        </div>
        <div class="info-novedades">
          <p >${e.nombre}</p>
          <span>Precio: $${e.precio}</span>
        </div>
        <div class="turnos-novedades"
          <li id="turnos">
            <a href="https://api.whatsapp.com/send/?phone=543813846221&text=¡Hola Chicas! ¿Tienen stock de ${e.nombre}?" target="_blank">
            <img src="../img/iconos/iconoWhatsapp.png" alt="imagen whatsapp">Consultar Stock</a>
          </li>
        </div>
      </div>
    </div>
  `;
  });

}

