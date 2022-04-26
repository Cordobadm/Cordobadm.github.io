$("#header").append(`
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <div id="logoMagnolia" class="nav-item" >
      <a class="navbar-brand" href="./index.html">
        <img src="../img/mas1.png" alt="logo" />
      </a>
    </div>

    <button 
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse justify-content-center"
      id="navbarSupportedContent">
  
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="./index.html">INICIO</a>
        </li>
        <li class="nav-item" id="nosotras">
          <a class="nav-link" href="./nosotras.html">NOSOTRAS</a>
        </li>
      
        <li class="nav-item">
          <a class="nav-link" href="./productos.html">PRODUCTOS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./servicios.html">SERVICIOS</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link" href="#contacto">CONTACTANOS</a>
        </li>
      
      </ul>
      
      </div>
      <div>
        <ul class="navbar-nav">
          <li id="redesHeader" class="nav-item">
            <a href="https://api.whatsapp.com/send/?phone=543813846221&text=¡Hola+Chicas%21&app_absent=0" target="_blank">
            <img src="../img/iconos/iconoWhatsapp.png" alt="imagen whatsapp"></a>

            <a href="https://www.instagram.com/magnolia.healthybeauty/" target="_blank">
            <img src="../img/iconos/iconoig.png" alt="instagram" /></a>
          </li>
        </ul>
    </div>
  </div>
</nav>
`);
