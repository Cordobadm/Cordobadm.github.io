const obtenerPersonas = () => {
  const URLGET = "../js/costants/we.json";

  $.getJSON(URLGET, (data) => {
    for (const card of data) {
      $("#cardNosotras").append(`
      <div id="cardNos" class="mt-3 col-12 col-md-6 col-lg-4">
      <div class="card">
        <div class="card-profile">
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-pause="false"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="${card.imagen}" alt="imagen1" />
              </div>
              <div class="carousel-item">
                <img src="${card.imagen1}" alt="imagen2" />
              </div>
              <div class="carousel-item">
                <img src="${card.imagen2}" alt="imagen3" />
              </div>
            </div>
          </div>
        </div>
    
        <div class="card-body">
          <div class="badges">
            <span class="badge rounded-pill bg-warning text-dark"
              >${card.cargo}</span
            >
            <span class="badge rounded-pill bg-primary">${card.profesion}</span>
          </div>
          <h5 id="name" class="card-title p-2">${card.nombre} ${card.apellido}</h5>
    
          <p id="info" class="card-text">${card.informacion}</p>
          <button class="btn btn-nosotras btnMostrar">Leer Más</button>
    
          <p id="info" class="masInfo">${card.masInformacion}</p>
          <button class="btn btn-nosotras btnOcultar">Leer Menos</button>
    
          <div class="media-icons">
            <a href="${card.linkedin}" target="_blank">
              <img src="../img/iconos/iconoLinkedin.svg" alt="twitter"
            /></a>
            <a href="${card.instagram}" target="_blank"
              ><img src="../img/iconos/iconoig.svg" alt="instagram"
            /></a>
            <a href="${card.facebook}" target="_blank">
              <img src="../img/iconos/iconoFace.svg" alt="facebook"
            /></a>
            <a href="${card.twitter}" target="_blank">
              <img src="../img/iconos/iconoTwitter.svg" alt="twitter"
            /></a>
          </div>
        </div>
      </div>
    </div>`);
    }

    let botones = document.querySelectorAll(".btnMostrar");
    let botonesOcultar = document.querySelectorAll(".btnOcultar");
    let masInfo = document.querySelectorAll(".masInfo");

    

    for (let i = 0; i < botones.length; i++) {
      botones[i].addEventListener("click", function () {
        $(botones[i]).hide();
        $(botonesOcultar[i]).show();
        for (let e = 0; e < botones.length; e++) {
          $(masInfo[i]).slideDown(600);
        }
      });
    }

    for (let i = 0; i < botonesOcultar.length; i++) {
      botonesOcultar[i].addEventListener("click", function () {
        $(botonesOcultar[i]).hide();

        for (let e = 0; e < botones.length; e++) {
          $(masInfo[i]).hide();
          $(botones[i]).show();
        }
      });
    }
  });
};

obtenerPersonas();
