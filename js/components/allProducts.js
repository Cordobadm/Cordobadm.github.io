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
      <div id="cardService" class= "${e.rubro} ${e.subRubro} col-6 col-md-4 col-lg-3"> 
      <div class="  item-rounded">
        <a target="_blank" href="${e.img}">
          <img src="${e.img}" id="myImg">
        </a>
        <h6 class="card-title">${e.nombre}</h6>
        <h4>Precio: $<span>${e.precio}</span></h4>
        <h3>stock: ${e.stock}</h3>
    
        <li id="turnos">
          <a href="https://api.whatsapp.com/send/?phone=543813846221&text=¡Hola Chicas! Necesito turno para ${e.nombre}" target="_blank">
          <img src="../img/iconos/iconoWhatsapp.png" alt="imagen whatsapp">Consultar Stock</a>
        </li>
        </div>
      </div>
    `;
  });
}

// FILTRAR PRODUCTOS POR RUBRO

let productos = document.getElementById("produtos");
const filtrarProductos = () => {
  if (productos.value === "all") {
    addProducts(stockProducts);
  } else {
    const arrayFiltrado = stockProducts.filter(
      (el) => el.rubro == productos.value
    );
    addProducts(arrayFiltrado);
  }
};

productos.addEventListener("change", function () {
  filtrarProductos();
  subRubro()
});

//FILTRAR PRODUCTOS POR SUBRUBRO (makeUp)
let makeup = document.getElementById("makeup");
const filtrarSubRubro = () => {
  if (makeup.value === "all") {
    const arrayFiltrado = stockProducts.filter(
      (el) => el.rubro == productos.value
    );
    addProducts(arrayFiltrado);
  } else {
    const arrayFiltrado1 = stockProducts.filter(
      (el) => el.subRubro == makeup.value
    );
    addProducts(arrayFiltrado1);
  }
};

makeup.addEventListener("change", function () {
  filtrarSubRubro();
});

//FILTRAR PRODUCTOS POR SUBRUBRO (cuidadosDeLaPiel)
let cuidadosDeLaPiel = document.getElementById("cuidadosDeLaPiel");
const filtrarSubRubroCuidadosPiel = () => {
  if (cuidadosDeLaPiel.value === "all") {
    const arrayFiltrado = stockProducts.filter(
      (el) => el.rubro == productos.value
    );
    addProducts(arrayFiltrado);
  } else {
    const arrayFiltrado1 = stockProducts.filter(
      (el) => el.subRubro == cuidadosDeLaPiel.value
    );
    addProducts(arrayFiltrado1);
  }
};

cuidadosDeLaPiel.addEventListener("change", function () {
  filtrarSubRubroCuidadosPiel();
});

//FILTRAR PRODUCTOS POR PRECIO

const filtrarPrecios = document.getElementById("precio");

filtrarPrecios.addEventListener("change", () => {
  if (filtrarPrecios.value == 1) {
    stockProducts.sort((a, b) => a.precio - b.precio);
    filtrarProductos(stockProducts);
    
  } else {
    stockProducts.sort((a, b) => b.precio - a.precio);
    filtrarProductos(stockProducts);
    
  }
});

const subRubro = () => {
  if (productos.value === "all") {
    $(makeup).hide();
    $(cuidadosDeLaPiel).hide();
    $(peinado).hide();
  }
  if (productos.value == "MAKEUP") {
    $(makeup).show();
    $(cuidadosDeLaPiel).hide();
    $(peinado).hide();
  }
  if (productos.value == "PEINADO") {
    $(makeup).hide();
    $(cuidadosDeLaPiel).hide();
    $(peinado).show();
  }
  if (productos.value == "CUIDADOSPIEL") {
    $(makeup).hide();
    $(cuidadosDeLaPiel).show();
    $(peinado).hide();
  }
};

