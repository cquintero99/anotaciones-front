function cargarPerfil(){
  let nombre=JSON.parse(localStorage.getItem("data")).nombre
  
  let apellido=JSON.parse(localStorage.getItem("data")).apellido
  let correo=JSON.parse(localStorage.getItem("data")).sub
  
  let genero=JSON.parse(localStorage.getItem("data")).genero  
  let fechaNacimiento=JSON.parse(localStorage.getItem("data")).fechaNacimiento
  let hoy=new Date()
  let urlImg='https://bootdey.com/img/Content/avatar/avatar7.png'
  if(genero==="Femenino"){
    urlImg='https://bootdey.com/img/Content/avatar/avatar8.png'
  }
     body=`<div class="container">
     <div class="main-body">
     
     
           <div class="row gutters-sm">
             <div class="col-md-4 mb-3">
               <div class="card">
                 <div class="card-body">
                   <div class="d-flex flex-column align-items-center text-center border-bottom border-dark">
                     <img src="${urlImg}" alt="Admin" class="rounded-circle" width="150"  onclick="cargarPerfil()" >
                     <div class="mt-3 ">
                       <h4 class="btn p-3"  onclick="cargarPerfil()" >${nombre} </h4>
                       <p class="text-secondary mb-1"></p>
                       <p class="text-muted font-size-sm"></p>
                     </div>
                     
                   </div>
                   <div id="menuCuenta"></div>
                 </div>
               </div>
               <div class="card mt-3" id="redes">
                 
               </div>
             </div>
             <div class="col-md-8">
               <div class="card mb-3">
                 <div class="card-body" id="actualizarInformacion">
                 <div class="row">
                 <div class="col p-3">
                 <div id="alertUpdateUser"></div>
                 <p class="text-dark fw-bold">INFORMACION DEL PERFIL</p>
                 </div>
                 </div>
                   <div class="row">
                     <div class="col-sm-3">
                       <h6 class="mb-0">Nombre: </h6>
                     </div>
                     <div class="col-sm-9 text-secondary">
                       ${nombre}
                     </div>
                   </div>
                   <hr>
                   <div class="row">
                   <div class="col-sm-3">
                     <h6 class="mb-0">Apellido: </h6>
                   </div>
                   <div class="col-sm-9 text-secondary">
                     ${apellido}
                   </div>
                 </div>
                   <hr>
                   <div class="row">
                     <div class="col-sm-3">
                       <h6 class="mb-0">Genero</h6>
                     </div>
                     <div class="col-sm-9 text-secondary">
                     ${genero}
                     </div>
                   </div>
                   <hr>
                   <div class="row">
                   <div class="col-sm-3">
                     <h6 class="mb-0">Fecha Nacimiento:</h6>
                   </div>
                   <div class="col-sm-9 text-secondary">
                   ${new Date(fechaNacimiento).toLocaleDateString()}
                   </div>
                   </div>

                   <hr>
                   <div class="row">
                     <div class="col-sm-3">
                       <h6 class="mb-0">Correo</h6>
                     </div>
                     <div class="col-sm-9 text-secondary">
                     ${correo}
                     </div>
                   </div>
                   <hr>
                   <div class="row">
                   <div class="col p-3">
                   <p class="text-dark fw-bold">${hoy.toDateString()}</p>
                   </div>
                   </div>
                   
                  
                 </div>

               </div>
 
               <div class="row gutters-sm">
                 <div class="col-sm-6 mb-3 ">
                   <div class="card h-100"  style="max-width: 540px;">
                     <div class="card-body" id="perfilAmigos">
                     
                       
                     </div>
                   </div>
                 </div>
                 <div class="col-sm-6 mb-3 ">
                   <div class="card h-100"  style="max-width: 540px;">

                     <div class="card-body" id="perfilSeguidores">
                       
                     </div>
                   </div>
                 </div>
               </div>
 
 
 
             </div>
           </div>
 
         </div>
     </div>

     
      <div id="demo8"></div>
      
      `
    document.getElementById("root").innerHTML=body;
    document.getElementById("modal").innerHTML=""
    document.getElementById("resumenMateria").innerHTML=""
    
    //demo8()
    mostrarAmigos()
    mostrarSeguidores()
    cargarResdes()
    cargarMenuCuenta()
}

function cargarMenuCuenta(){
  document.getElementById("menuCuenta").innerHTML=`<div class="row">
  
    <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 ">
      <nav class="nav nav-pills flex-column">
      <div class="accordion accordion-flush" id="accordionFlushExample">

      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            CUENTA
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
          <p class="btn fw-bold" onclick="actualizarInformacion()">Actualizar informacion</p>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            SEGURIDAD
          </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
          <p class="btn fw-bold" onclick="actualizarEmail()">Actualizar Email</p>
          <p class="btn fw-bold" onclick="actualizarContraseña()">Actualizar contraseña</p>
          </div>
        </div>

      </div>
        <a class="nav-link text-danger p-3" href="#item-3" onclick="cerrarSesion()" >SALIR  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
      </svg></a>

   
      
      

      </nav>
    </nav>
  </div>`
}

function cargarResdes(){
  document.getElementById("redes").innerHTML=`<ul class="list-group list-group-flush">
  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
    <span class="text-secondary">https://bootdey.com</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
    <span class="text-secondary">bootdey</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
    <span class="text-secondary">@bootdey</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
    <span class="text-secondary">bootdey</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
    <span class="text-secondary">bootdey</span>
  </li>
</ul>`
}

function demo8(){
  body=` 
       <!------------------ Hover Effect Style : Demo - 8 --------------->
  <div class="container mt-40">
      <h3 class="text-center">Hover Effect Style : Demo - 8</h3>
      <div class="row mt-30">
          <div class="col-md-4 col-sm-6">
              <div class="box8">
                  <img class="pic-1" src="https://www.w3schools.com/bootstrap4/img_avatar3.png">
                  <h3 class="title">Williamson</h3>
                  <div class="box-content">
                      <ul class="icon">
                          <li><a href="#"><i class="fa fa-search"></i> </a> </li>
                          <li><a href="#"><i class="fa fa-link"></i> </a> </li>
                      </ul>
                  </div>
              </div>
          </div>
          <div class="col-md-4 col-sm-6">
              <div class="box8">
                  <img class="pic-1" src="https://www.w3schools.com/bootstrap4/img_avatar4.png">
                  <h3 class="title">Kristiana</h3>
                  <div class="box-content">
                      <ul class="icon">
                          <li><a href="#"><i class="fa fa-search"></i> </a> </li>
                          <li><a href="#"><i class="fa fa-link"></i> </a> </li>
                      </ul>
                  </div>
              </div>
          </div>
          <div class="col-md-4 col-sm-6">
              <div class="box8">
                  <img class="pic-1" src="https://www.w3schools.com/bootstrap4/img_avatar5.png">
                  <h3 class="title">Kristiana</h3>
                  <div class="box-content">
                      <ul class="icon">
                          <li><a href="#"><i class="fa fa-search"></i> </a> </li>
                          <li><a href="#"><i class="fa fa-link"></i> </a> </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>`
  document.getElementById("demo8").innerHTML=body;
}