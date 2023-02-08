cargarMenu();
function cargarMenu(){
    body=` <div class="text-center   p-3">
    <a href="index.html" class="link-warning ">
    <h3 class="d-inline"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-journal-bookmark" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M6 8V1h1v6.117L8.743 6.07a.5.5 0 0 1 .514 0L11 7.117V1h1v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z"/>
      <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
      <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
    </svg></h3>
    <h3 class="d-inline">MY NOTEBOOK</h3>
    
      <ul class="nav justify-content-center p-3 ">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="index.html">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" onclick="listaMateria()">Materias</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Perfil</a>
    </li>
   
  </ul></div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Materias</a></li>
          <li class="breadcrumb-item active" aria-current="page">Notas</li>
        </ol>
      </nav>
    </div>
  </nav>
  <a>
  </div>`
    document.getElementById("menu").innerHTML=body
}