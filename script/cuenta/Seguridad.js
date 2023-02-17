

function actualizarEmail(){
   
    let body=`
    <div class="row">
  <div class="col">
  <div id="alertEmail"></div>
  <p class="text-dark fw-bold">Actualizar Email</p>
  </div>
  </div>
  <hr>
    <div class="row">
    <div class="col-sm-3">
      <h6 class="mb-0">Email Actual: </h6>
    </div>
    <div class="col-sm-9 text-secondary">
    <input type="text" class="form-control" placeholder="" id="emailActual" aria-label="nombreP" aria-describedby="basic-addon1">
  
    </div>
  </div>
  <hr>
    <div class="row">
    <div class="col-sm-3">
      <h6 class="mb-0">Email Nuevo: </h6>
    </div>
    <div class="col-sm-9 text-secondary">
    <input type="text" class="form-control" placeholder="" id="emailNuevo" aria-label="nombreP" aria-describedby="basic-addon1">
  
    </div>
  </div>
  <hr>
  <div class="row">
  <div class="col-sm-3">
    <h6 class="mb-0">Contraseña: </h6>
  </div>
  <div class="col-sm-9 text-secondary">
  <input type="password" class="form-control" placeholder="" id="contraseñaP" aria-label="apellidoP" aria-describedby="basic-addon1">
  
  </div>
  </div>
 
  <hr>
  <div class="row">
  <div class="col">
  <div class="d-grid gap-2 col-6 mx-auto">
<button class="btn btn-outline-primary" type="button" onclick="updateEmail()">ACTUALIZAR</button>
</div>
                             
  </div>
  </div>
  <hr>
  `
  document.getElementById("actualizarInformacion").innerHTML=body;
  document.getElementById("redes").innerHTML=""
  
  
}


function updateEmail(){
    let emailActual=document.getElementById("emailActual").value
    let emailNuevo=document.getElementById("emailNuevo").value
    let contraseñaP=document.getElementById("contraseñaP").value

    const auth ={
        email:emailActual,
        password:contraseñaP
    }

    if(emailActual!=="" && contraseñaP!=="" && emailNuevo!==""){
        let emailLocal=JSON.parse(localStorage.getItem("data")).sub
        if(emailActual===emailLocal){
            verificoEmail(emailNuevo)
            .then(res=>res.json())
                .then(data=>{
                   if(data===false){
                        
                        verificoContraseña(auth,emailNuevo)


                    }else{
                        body=`<div class="alert alert-danger" role="alert">
                        <a href="#" class="alert-link">CORREO YA  ESTA REGISTRADO</a>
                    </div>`
                document.getElementById("alertEmail").innerHTML=body;
                    setTimeout(()=>{ document.getElementById("alertEmail").innerHTML="";
                                },4500)
                    }

                })
                .catch(error=>{
                    console.log(error)
                })
        }else{
            body=`<div class="alert alert-warning" role="alert">
                <a href="#" class="alert-link">EMAIL ACTUAL INCORRECTO</a>
            </div>`
            document.getElementById("alertEmail").innerHTML=body;

        }

   
   
    }else{
        body=`<div class="alert alert-warning" role="alert">
        <a href="#" class="alert-link">CREDENCIALES INCOMPLETAS</a>
     </div>`
    document.getElementById("alertEmail").innerHTML=body;
         setTimeout(()=>{ document.getElementById("alertEmail").innerHTML="";
                    },4500)
    }
}
function verificoContraseña(auth,emailNuevo){
    envioDatoslogin(auth)
    .then(response=>response)
    .then(JWT=>{
        if (JWT.status === 200 && JWT.headers.has('Authorization')) {
            const bearerToken = JWT.headers.get('Authorization');
            const token = bearerToken.replace('Bearer ', '');
           


            localStorage.setItem('token', token);
            localStorage.setItem("data",JSON.stringify( parseJwt(token)))
            const usuario={
                correo:emailNuevo
            }
            updateCorreoUsuario(usuario)
            
          } else {
            body=`<div class="alert alert-danger" role="alert">
             <a href="#" class="alert-link">CONTRASEÑA INCORRECTA</a>
          </div>`
    document.getElementById("alertEmail").innerHTML=body;
         setTimeout(()=>{ document.getElementById("alertEmail").innerHTML="";
                    },4500)
          }
    })
    .catch(err=>{
        console.log(err)
    })
}

async function updateCorreoUsuario(usuario){
    let id=JSON.parse(localStorage.getItem("data")).id
    let token=localStorage.getItem("token")
    const result =await fetch("http://localhost:8088/usuarios/"+id+"/correo",{
        method:'PUT',
        body:JSON.stringify(usuario),
        headers:{
            "Authorization":"Bearer "+token,
            "Content-type":"Application/json"
        }
    })
    .then(res=>res.json())
    .then(data=>{
        let dataUser=JSON.parse(localStorage.getItem("data"))
        dataUser.sub=data.correo
        localStorage.setItem("data",JSON.stringify(dataUser))
        cargarPerfil()
            body=`<div class="alert alert-success" role="alert">
            <a href="#" class="alert-link">CORREO ACTUALIZADO CON EXITO</a>
            </div>`
            document.getElementById("alertUpdateUser").innerHTML=body;
            setTimeout(()=>{
                document.getElementById("alertUpdateUser").innerHTML="";
            },5500)
    })
    .catch(err=>console.log(err))
}

async function verificoEmail(email){
    const result =await fetch("http://localhost:8088/usuarios/"+email+"/correo",)
    return result

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
document.getElementById("redes").innerHTML=""


}