let cardNovedades = document.querySelector(".content-novedades");
let novedades = [];

const URLGETNOV = "../js/costants/news.json";
$.getJSON(URLGETNOV, (data) => {
  novedades = data;
  agregarNovedadesAlHtml(novedades);
});

function agregarNovedadesAlHtml(arrayNov) {
  cardNovedades.innerHTML = "";

  arrayNov.map((e) => {
    cardNovedades.innerHTML += `
    
      <div class="swiper-slide card">
        <div class= "card-content">

          <div class="image"> 
            <img src="${e.img}">
          </div>
          <div class="info-novedades">
            <h6>${e.nombre}</h6>
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
