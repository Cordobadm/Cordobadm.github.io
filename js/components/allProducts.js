const cardProducts = document.querySelector(".content-all-products");

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
      <div class="item-rounded">
      <div class="image">
        <a target="_blank" href="${e.img}">
          <img src="${e.img}">
        </a>
      </div>
        <h5>${e.marca}</h5>
        <h6 class="card-title">${e.nombre}</h6>
        <h4>Precio: $<span>${e.precio}</span></h4>
        <li id="productsBuy">
          <a href="https://api.whatsapp.com/send/?phone=543813846221&text=¡Hola Chicas! Quiero comprar ${e.nombre}" target="_blank">
          <img src="../img/iconos/iconoWhatsapp.png" alt="imagen whatsapp">Comprar</a>
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

productos.addEventListener("change", function () {
  filtrarProductos();
  subRubro();
});

//FILTRAR PRODUCTOS POR SUBRUBRO (makeUp)
let makeup = document.getElementById("makeup");
const filtrarSubRubroMake = () => {
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
  filtrarSubRubroMake();
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

//FILTRAR PRODUCTOS POR SUBRUBRO (peinado)
let peinado = document.getElementById("peinado");
const filtrarSubRubroPeinado = () => {
  if (peinado.value === "all") {
    const arrayFiltrado = stockProducts.filter(
      (el) => el.rubro == productos.value
    );
    addProducts(arrayFiltrado);
  } else {
    const arrayFiltrado1 = stockProducts.filter(
      (el) => el.subRubro == peinado.value
    );
    addProducts(arrayFiltrado1);
  }

};

peinado.addEventListener("change", function () {
  filtrarSubRubroPeinado();
});

//FILTRAR PRODUCTOS POR PRECIO

const filtrarPrecios = document.getElementById("precio");

const filtrarPrice = () => {
  if (productos.value == "all") {
    if (filtrarPrecios.value == 1) {
      stockProducts.sort((a, b) => a.precio - b.precio);
      addProducts(stockProducts);
      console.log("menor");
    } else {
      stockProducts.sort((a, b) => b.precio - a.precio);
      addProducts(stockProducts);
    }
  }
  if (productos.value == "MAKEUP") {
    if (filtrarPrecios.value == 1) {
      stockProducts.sort((a, b) => a.precio - b.precio);
      filtrarSubRubroMake(stockProducts);
      console.log("menor");
    } else {
      stockProducts.sort((a, b) => b.precio - a.precio);
      filtrarSubRubroMake(stockProducts);
      stockProducts;
    }
    }if(productos.value == "PEINADO"){
      if (filtrarPrecios.value == 1) {
        stockProducts.sort((a, b) => a.precio - b.precio);
        filtrarSubRubroPeinado(stockProducts);
        console.log("menor");
      } else {
        stockProducts.sort((a, b) => b.precio - a.precio);
        filtrarSubRubroPeinado(stockProducts);(stockProducts);
      }
  }
  if (productos.value == "CUIDADOSPIEL") {
    if (filtrarPrecios.value == 1) {
      stockProducts.sort((a, b) => a.precio - b.precio);
      filtrarSubRubroCuidadosPiel(stockProducts);
      console.log("menor");
    } else {
      stockProducts.sort((a, b) => b.precio - a.precio);
      filtrarSubRubroCuidadosPiel(stockProducts);
      stockProducts;
    }
  }
};

filtrarPrecios.addEventListener("change", function () {
  filtrarPrice();
});

