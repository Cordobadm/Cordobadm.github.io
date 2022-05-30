const cardProducts = document.querySelector(".content-all-products");
let modal = document.getElementById("modalImage");
let imageCarousel = document.getElementById("carousel-image-product");
let span = document.getElementsByClassName("close")[0];

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
        <img class="top" id="img0" src="${e.img1}">
        <img class="top" id="img1" src="${e.img}" data-src="${e.img1}">
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

    // Image Products Carousel
    let imag = document.querySelectorAll(".top");
    imag.forEach(function (item) {
      item.addEventListener("click", function () {
        modal.style.display="block"

        imageCarousel.innerHTML = `
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="modal-content" src="${item.src}">
            </div>
            <div class="carousel-item">
              <img class="modal-content" src="${item.dataset.src}">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carousel-image-product" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carousel-image-product" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
      `;
        console.log(item);
      });
    });
  });
}

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

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

const subRubroProducts = () => {
  if (productos.value === "all") {
    $(makeup).hide();
    $(dermocosmetica).hide();
    
  }
  if (productos.value == "MAKEUP") {
    $(makeup).show();
    $(dermocosmetica).hide();
  }
  if (productos.value == "DERMOCOSMETICA") {
    $(makeup).hide();
    $(dermocosmetica).show();
  }
};

productos.addEventListener("change", function () {
  filtrarProductos();
  subRubroProducts();
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
let dermocosmetica = document.getElementById("dermocosmetica");
const filtrarSubRubroDermocosmetica = () => {
  if (dermocosmetica.value === "all") {
    const arrayFiltrado = stockProducts.filter(
      (el) => el.rubro == productos.value
    );
    addProducts(arrayFiltrado);
  } else {
    const arrayFiltrado1 = stockProducts.filter(
      (el) => el.subRubro == dermocosmetica.value
    );
    addProducts(arrayFiltrado1);
  }
};

dermocosmetica.addEventListener("change", function () {
  filtrarSubRubroDermocosmetica();
});

//FILTRAR PRODUCTOS POR PRECIO

const filtrarPrecios = document.getElementById("precio");

const filtrarPriceProducts = () => {
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
  }
  if (productos.value == "DERMOCOSMETICA") {
    if (filtrarPrecios.value == 1) {
      stockProducts.sort((a, b) => a.precio - b.precio);
      filtrarSubRubroDermocosmetica(stockProducts);
      console.log("menor");
    } else {
      stockProducts.sort((a, b) => b.precio - a.precio);
      filtrarSubRubroDermocosmetica(stockProducts);
      stockProducts;
    }
  }
};

filtrarPrecios.addEventListener("change", function () {
  filtrarPriceProducts();
});
