const cardProducts = document.querySelector(".content-all-products")

const URLGETPROD = "../js/costants/products.json";
$.getJSON(URLGETPROD, (data) => {
  stockProducts = data;
  addProducts(stockProducts);
});

function addProducts(arrayProd) {
  cardProducts.innerHTML = "";

  arrayProd.map((e) => {
    cardProducts.innerHTML += `
      <div id="cardService" class= "${e.rubro} col-6 col-md-4 col-lg-3"> 
      <div class="item-rounded">
      <a target="_blank" href="${e.img}">
        <img src="${e.img}" id="myImg">
      </a>
      <h6 class="card-title">${e.marca}</h6>
        <h6 class="card-title">${e.nombre}</h6>
        <h4>Precio: $<span>${e.precio}</span></h4>
        <h3>stock: ${e.stock}</h3>
    
        <li id="turnos">
          <a href="https://api.whatsapp.com/send/?phone=543813846221&text=¡Hola Chicas! ¿Tienen stock de  ${e.nombre}?" target="_blank">
          <img src="../img/iconos/iconoWhatsapp.png" alt="imagen whatsapp">Consultar Stock</a>
        </li>
        </div>
      </div>
    `;
    
  });
  
}

// AGREGAR FILTRADO POR SUBRUBRO

let productos = document.getElementById("products");
const filtrarProductos = () => {
  if (productos.value === "all") {
    addProducts(stockProducts);
  } else  {
    const arrayFiltrado = stockProducts.filter(
      (el) => el.rubro == productos.value
    );
    addProducts(arrayFiltrado);
  }
};

productos.addEventListener("change", function () {
  filtrarProductos();
});

const filtrarPrecios = document.getElementById("prices");
filtrarPrecios.addEventListener("change", () => {
  if (filtrarPrecios.value == 1) {
    stockProducts.sort((a, b) => a.precio - b.precio);
    filtrarProductos(stockProducts);
  } else {
    stockProducts.sort((a, b) => b.precio - a.precio);
    filtrarProductos(stockProducts);
  }
});



