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
    <h6 class="mb-0">Fecha Nacimiento: </h6>
  </div>
  <div class="col-sm-9 text-secondary">
  <input type="date" class="form-control" placeholder="" id="fechaP" aria-label="apellidoP" aria-describedby="basic-addon1">
  
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
  <button class="btn btn-outline-primary" type="button" onclick="nuevosDatosUser()">ACTUALIZAR</button>
</div>                         
  </div>
  </div>
  <hr>
  `
  document.getElementById("actualizarInformacion").innerHTML=body;
  document.getElementById("redes").innerHTML=""
  cargarDatos()
  }

  function cargarDatos(){
    let nombre=JSON.parse(localStorage.getItem("data")).nombre
    let apellido=JSON.parse(localStorage.getItem("data")).apellido
    let genero=JSON.parse(localStorage.getItem("data")).genero
    let fechaNacimiento=JSON.parse(localStorage.getItem("data")).fechaNacimiento
    let fecha=new Date(fechaNacimiento)
    fecha.setDate(fecha.getDate()-1)


    document.getElementById("nombreP").value=nombre;
    document.getElementById("apellidoP").value=apellido;
    document.getElementById("selectGeneroP").value=genero
    
    document.getElementById("fechaP").value=fecha.toISOString().substring(0,10)
  }

  function nuevosDatosUser(){
    let nombre= document.getElementById("nombreP").value
    let apellido= document.getElementById("apellidoP").value
    let genero= document.getElementById("selectGeneroP").value
    
    let fecha_nacimiento=document.getElementById("fechaP").value
    let fecha=new Date(fecha_nacimiento)
    fecha.setDate(fecha.getDate()+1)
    const usuario={
      nombre,
      apellido,
      fecha_nacimiento:fecha,
      genero
    }
    updateDatosUsuario(usuario)

  }

  async function updateDatosUsuario(usuario){
    let token=localStorage.getItem("token")
    let id=JSON.parse(localStorage.getItem("data")).id
    const result =await fetch(urlBasic+'/usuarios/'+id,{
      method:'PUT',
      body:JSON.stringify(usuario),
      headers:{
        "Authorization":"Bearer "+token,
        "Content-type":"Application/json"
        
      }
    })
    .then(response=>response.json())
    .then(data=>{
      
      let datosUsuario=JSON.parse(localStorage.getItem("data"))
      datosUsuario.nombre=data.nombre
      datosUsuario.apellido=data.apellido
      datosUsuario.fechaNacimiento=data.fecha_nacimiento
      datosUsuario.genero=data.genero
      localStorage.setItem("data",JSON.stringify(datosUsuario));
      
      cargarPerfil()
      document.getElementById("nombreMenu").innerHTML=`<p>${ data.nombre}</p>`
      document.getElementById("alertUpdateUser").innerHTML=`<div class="alert alert-success" role="alert">
        <a href="#" class="alert-link">INFORMACION ACTUALIZADA CON EXITO</a>
     </div>`
      setTimeout(()=>{
        document.getElementById("alertUpdateUser").innerHTML=``
      },5500)
     
     
    })
    .catch(err=>console.log(err))

  }
