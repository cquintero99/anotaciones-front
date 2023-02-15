function actualizarInformacion(){
   
    let body=`
    <div class="row">
  <div class="col">
  <p class="text-dark fw-bold">Actualizar Informacion</p>
  </div>
  </div>
  <hr>
    <div class="row">
    <div class="col-sm-3">
      <h6 class="mb-0">Nombre: </h6>
    </div>
    <div class="col-sm-9 text-secondary">
    <input type="text" class="form-control" placeholder="" id="nombreP" aria-label="nombreP" aria-describedby="basic-addon1">
  
    </div>
  </div>
  <hr>
  <div class="row">
  <div class="col-sm-3">
    <h6 class="mb-0">Apellido: </h6>
  </div>
  <div class="col-sm-9 text-secondary">
  <input type="text" class="form-control" placeholder="" id="apellidoP" aria-label="apellidoP" aria-describedby="basic-addon1">
  
  </div>
  </div>
  <hr>
  <div class="row">
  <div class="col-sm-3">
    <h6 class="mb-0">Genero </h6>
  </div>
  <div class="col-sm-9 text-secondary">
  <select class="form-select" id="selectGeneroP" aria-label="Floating label select example">
                                      
  <option value="Masculino" selected>Masculino</option>
  <option value="Femenino">Femenino</option>
  <option value="No responder">No responder</option>
  </select>
  </div>
  
                             
  
  </div>
  <hr>
  <div class="row">
  <div class="col">
  
  <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-outline-primary" type="button">ACTUALIZAR</button>
</div>                         
  </div>
  </div>
  <hr>
  `
  document.getElementById("actualizarInformacion").innerHTML=body;
  cargarDatos()
  }
  function cargarDatos(){
    let nombre=JSON.parse(localStorage.getItem("data")).nombre
    let apellido=JSON.parse(localStorage.getItem("data")).apellido
    let genero=JSON.parse(localStorage.getItem("data")).genero

    document.getElementById("nombreP").value=nombre;
    document.getElementById("apellidoP").value=apellido;
    document.getElementById("selectGeneroP").value=genero
  }

  function actualizarEmail(){
   
        let body=`
        <div class="row">
      <div class="col">
      <p class="text-dark fw-bold">Actualizar Email</p>
      </div>
      </div>
      <hr>
        <div class="row">
        <div class="col-sm-3">
          <h6 class="mb-0">Email Actual: </h6>
        </div>
        <div class="col-sm-9 text-secondary">
        <input type="text" class="form-control" placeholder="" id="EmailP" aria-label="nombreP" aria-describedby="basic-addon1">
      
        </div>
      </div>
      <hr>
        <div class="row">
        <div class="col-sm-3">
          <h6 class="mb-0">Email Nuevo: </h6>
        </div>
        <div class="col-sm-9 text-secondary">
        <input type="text" class="form-control" placeholder="" id="EmailP" aria-label="nombreP" aria-describedby="basic-addon1">
      
        </div>
      </div>
      <hr>
      <div class="row">
      <div class="col-sm-3">
        <h6 class="mb-0">Contraseña: </h6>
      </div>
      <div class="col-sm-9 text-secondary">
      <input type="text" class="form-control" placeholder="" id="contraseñaP" aria-label="apellidoP" aria-describedby="basic-addon1">
      
      </div>
      </div>
     
      <hr>
      <div class="row">
      <div class="col">
      <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-outline-primary" type="button">ACTUALIZAR</button>
</div>
                                 
      </div>
      </div>
      <hr>
      `
      document.getElementById("actualizarInformacion").innerHTML=body;
      
      
  }
  function actualizarContraseña(){
   
    let body=`
    <div class="row">
  <div class="col">
  <p class="text-dark fw-bold">Actualizar Contraseña</p>
  </div>
  </div>
  <hr>
    <div class="row">
    <div class="col-sm-3">
      <h6 class="mb-0">Contraseña Actual </h6>
    </div>
    <div class="col-sm-9 text-secondary">
    <input type="text" class="form-control" placeholder="" id="EmailP" aria-label="nombreP" aria-describedby="basic-addon1">
  
    </div>
  </div>
  <hr>
  <div class="row">
  <div class="col-sm-3">
    <h6 class="mb-0">Contraseña nueva: </h6>
  </div>
  <div class="col-sm-9 text-secondary">
  <input type="text" class="form-control" placeholder="" id="contraseñaP" aria-label="apellidoP" aria-describedby="basic-addon1">
  
  </div>
  </div>
 
  <hr>
  <div class="row">
  <div class="col-sm-3">
    <h6 class="mb-0">Repetir Contraseña:</h6>
  </div>
  <div class="col-sm-9 text-secondary">
  <input type="text" class="form-control" placeholder="" id="contraseñaP" aria-label="apellidoP" aria-describedby="basic-addon1">
  
  </div>
  </div>
  <hr>
  <div class="row">
  <div class="col">
  
  <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-outline-primary" type="button">ACTUALIZAR</button>
</div>                       
  </div>
  </div>
  <hr>
  `
  document.getElementById("actualizarInformacion").innerHTML=body;
  
  
}