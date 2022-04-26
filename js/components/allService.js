const cardService = document.getElementById("rowService")

const URLGETSERVICE = "../js/costants/service.json";
$.getJSON(URLGETSERVICE, (data) => {
  stockService = data;
  addService(stockService);
});

function addService(arrayServ) {
  cardService.innerHTML = "";

  arrayServ.map((e) => {
    let id = uuid.v1();
    e.id = id;
    cardService.innerHTML += `
      <div id="cardService" class= "${e.rubro} col-6 col-md-4 col-lg-3"> 
      <div class="item-rounded">
        <img src="${e.img}">
        <h6 class="card-title">${e.nombre}</h6>
        <h4>Precio: $<span>${e.precio}</span></h4>
        <h3>stock: ${e.stock}</h3>
    
        <li id="turnos">
          <a href="https://api.whatsapp.com/send/?phone=543813846221&text=¡Hola Chicas! Necesito turno para ${e.nombre}" target="_blank">
          <img src="../img/iconos/iconoWhatsapp.png" alt="imagen whatsapp">Reservar Turno</a>
        </li>
        </div>
      </div>
    `;
  });
}
let servicios = document.getElementById("servicio");

const filtrarServicios = () => {
  if (servicios.value == "all") {
    addService(stockService);
  } else {
    const arrayFiltrado = stockService.filter(
      (e) => e.rubro == servicios.value
    );
    addService(arrayFiltrado);
  }
};

servicios.addEventListener("change", function () {
  filtrarServicios();
});

let filtrarPrecio = document.getElementById("precios");
filtrarPrecio.addEventListener("change", () => {
  if (filtrarPrecio.value == 1) {
    stockService.sort((a, b) => a.precio - b.precio);
    filtrarServicios(stockService);
  } else {
    stockService.sort((a, b) => b.precio - a.precio);
    filtrarServicios(stockService);
  }
});
