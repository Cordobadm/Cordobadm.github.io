// Corregir tapa el nombre de alexia, tamaño de los cuadros

const obtenerPersonas = () => {
  const URLGET = "../js/costants/we.json";

  $.getJSON(URLGET, (data) => {
    for (const card of data) {
      $("#cardNosotras").append(`
      <div id="cardNos" class="mt-3 col-12 col-md-6 col-lg-4">
      <div class="card">
        <div class="card-profile">
        <img
        src="${card.imagen}"
        class="card-img-top"
        alt="imagenDra"
        />
        </div>
    
        <div class="card-body">
         
          <h5 id="name" class="card-title p-2">${card.nombre} ${card.apellido}</h5>
    
          <p id="info" class="card-text">${card.informacion}</p>
          <button class="btn btn-nosotras btnMostrar">Leer Más</button>
    
          <p id="info" class="masInfo">${card.masInformacion}</p>
          <button class="btn btn-nosotras btnOcultar">Leer Menos</button>
    
          <div class="media-icons">
            <a href="${card.linkedin}" target="_blank">
              <img src="../img/iconos/iconoLinkedin.svg" alt="twitter"
            /></a>
            <a href="${card.instagram}" target="_blank">
              <img src="../img/iconos/iconoig.svg" alt="twitter"
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
