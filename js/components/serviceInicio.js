let cardServ = document.querySelector(".content-serv");
let stockServicios = [];


const URLGETSERV = "../js/costants/service.json";
$.getJSON(URLGETSERV, (data) => {
  stockServicios = data;
  agregarServiciosAlHtml(stockServicios);
});

function agregarServiciosAlHtml(arrayServ) {
  cardServ.innerHTML = "";

  arrayServ.map((e) => {
    cardServ.innerHTML += `
    <div class="swiper-slide card">
      <div class= "card-content">

        <div class="image"> 
          <img src="${e.img}">
        </div>
        <div class="info-novedades"> 
        <h6 class="card-title">${e.nombre}</h6>
        <h4>Precio: $<span>${e.precio}</span></h4>
        </div>
        <div class="turnos-novedades"
          <li id="turnos">
            <a href="https://api.whatsapp.com/send/?phone=543813846221&text=¡Hola Chicas! Necesito turno para ${e.nombre}" target="_blank">
            <img src="../img/iconos/iconoWhatsapp.png" alt="imagen whatsapp">Reservar Turno</a>
          </li>
        </div>
      </div>
    </div>
  `;
  });

}