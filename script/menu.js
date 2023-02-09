
function random(){
  return Math.floor(Math.random()*7);
}
cargarMenuLogo()
function cargarMenuLogo(){
  const colorMenu=["l-bg-cherry","l-bg-blue-dark","l-bg-green-dark","l-bg-orange-dark","l-bg-cyan","l-bg-green","l-bg-orange","l-bg-cyan2"]
   
    body=` <div class="text-center  ${colorMenu[random()]}  p-3">
    <br>
    <a href="index.html" class="link-light ">
    
    <h3 class="d-inline"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-journal-bookmark" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M6 8V1h1v6.117L8.743 6.07a.5.5 0 0 1 .514 0L11 7.117V1h1v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z"/>
      <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
      <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
    </svg></h3>
    <h3 class="d-inline">MY NOTEBOOK'S</h3>
      <div id="btnMenus">
      </div>
 
  <a>
  </div>`
    document.getElementById("menu").innerHTML=body
}

function cargarMenu(){
  let nombre=JSON.parse(localStorage.getItem("data")).nombre
  body=
  `<ul class="nav justify-content-center p-3 ">
  <li class="nav-item">
    <a class="nav-link fw-bold text-light active" aria-current="page" href="index.html">HOME</a>
  </li>
  <li class="nav-item">
    <a class="nav-link fw-bold text-light active" href="#" onclick="listaMateria()">MATERIAS</a>
  </li>
  <li class="nav-item">
    <a class="nav-link fw-bold text-light active" href="#">PERFIL</a>
  </li>
  <li class="nav-item">
  <a class="nav-link fw-bold text-light active" href="#" onclick="cerrarSesion()">SALIR</a>
</li>
 
</ul>
<p>${nombre}</p>
`
document.getElementById("btnMenus").innerHTML=body;
}