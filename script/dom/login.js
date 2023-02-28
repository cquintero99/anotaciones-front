cargarLogin()
function cargarLogin(){
    body=`<div class="container-fluid">
    <div class="row main-content bg-success text-center">
        <div class="col-md-4 text-center company__info">
            <span class="company__logo"><h2><span class="fa fa-android"></span></h2></span>
            <h4 class="company_title"></h4>
        </div>
        <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div class="container-fluid" id="formulario">
                <div class="row p-3">
                    <h1><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="text-primary bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                  </svg></h1>
                    <h2>Iniciar Sesion</h2>
                </div>
                <div class="row">
                    <form control="" class="form-group" >
                        <div class="row">
                            <input type="email" name="username" id="username" class="form__input" placeholder="Correo" required>
                        </div>
                        <div class="row">
                            <!-- <span class="fa fa-lock"></span> -->
                            <input type="password" name="password" id="password" class="form__input" placeholder="Password" required>
                        </div>
                       
                        <div class="row text-center">
                            <input type="buttom" value="ENTRAR" class="btnL btn " onclick="iniciarSesion()">
                        </div>
                    </form>
                </div>
                <div class="row" id="alertLogin"></div>
                <div class="row">
                    <p>No esta registrado? <a href="#" onclick="formularioRegistro()">Crear Cuenta</a></p>
                    <p><a href="#" onclick="olvidoContraseña()">No recuerdo mi contraseña ?</a></p>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container-fluid text-center footer">
<img src="./img/MY NOTEBOOKS (1).png"  width="400px" height="400px"  class="img-fluid"  alt="codigo QR MY NOTEBOOKS">
                   
</div>`
document.getElementById("login").innerHTML=body;
}

function formularioRegistro(){


    body=
    `                   <div class="row p-3">
                        <h1><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="text-primary bi bi-person-add" viewBox="0 0 16 16">
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                        <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
                      </svg></h1>
                        <h2>Crear Cuenta</h2>
                       </div>
                      <div class="row">
                       <form control="" class="form-group" >
                        <div class="row">
                            <input type="text" name="nombre" id="nombre" class="form__input " placeholder="Nombre" required>
                        </div>
                        <div class="row">
                            <input type="text" name="apellido" id="apellido" class="form__input" placeholder="Apellido" required>
                        </div>

                        
                        <div class="row">
                        
                        <label for="remember_me">Fecha Nacimiento</label>
                        <input type="date" name="fechaNacimiento" id="fechaNacimiento" class="form__input " required >
                        </div>
                        <div class="row">
                            <input type="text" name="correo" id="correo" class="form__input" placeholder="Correo" required>
                        </div>
                        
                        <div class="row"
                            <span class="fa fa-lock"></span> 
                            <input type="password" name="password" id="password" class="form__input" placeholder="Password" required>
                        </div>
                                <div class="row form-floating">
                                <select class="form-select" id="selectGenero" aria-label="Floating label select example">
                                    
                                    <option value="1" selected>Masculino</option>
                                    <option value="2">Femenino</option>
                                    <option value="3">No responder</option>
                                </select>
                                <label for="floatingSelect">Seleccione su genero</label>
                                </div>

                        <div class="row p-3">
                            <input type="checkbox" name="remember_me" id="remember_me" class="">
                            <label for="remember_me">Acepto terminos y condiciones</label>
                        </div>
                        <div class="row" id="alertLogin"></div>
                        <div class="row ">
                            <input type="buttom" value="REGISTRAR" class="btnL btn" onclick="newUser()">
                            </div>
                            </form>
                            </div>
                            <div class="row">
                                <p>Ya tengo una cuenta! <a href="#" onclick="cargarLogin()">Iniciar Sesion</a></p>
                            </div>
                            
    `

    document.getElementById("formulario").innerHTML=body
}
function onSubmit(token) {
    document.getElementById("demo-form").submit();
  }

  
function olvidoContraseña(){
    body=`<div class="row p-3">
    <h1><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-person-lock" viewBox="0 0 16 16">
    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 5.996V14H3s-1 0-1-1 1-4 6-4c.564 0 1.077.038 1.544.107a4.524 4.524 0 0 0-.803.918A10.46 10.46 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h5ZM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z"/>
  </svg></h1>
    <h2>Recuperar Contraseña</h2>
</div>
<div class="row">
    <div id="alertCambio"></div>
    <form control="" class="form-group" >
        <div class="row">
            <input type="text" name="correoCambioContraseña" id="correoRecu" class="form__input" placeholder="Correo" required>
        </div>
        <div class="row" id="ingresarCodigo">
       </div>
        
        <div class="row" id="alertLogin"></div>
        <div class="row text-center" id="btnCodigo">
            <input type="buttom" value="ENVIAR CODIGO" class="btnL" onclick="codigoOlvidoContraseña()">
        </div>
    </form>
</div>
<div class="row">
    <p> estas registrado? <a href="#" onclick="cargarLogin()">Iniciar sesion</a></p>
</div>`

document.getElementById("formulario").innerHTML=body

}

function codigoOlvidoContraseña(){
    let correo=document.getElementById("correoRecu").value;
    verificoEmail(correo)
    .then(response=>response.json())
    .then(data=>{
        if(data===true){
            let body=`<div class="alert alert-success" role="alert">
            <a href="#" class="alert-link">CORREO REGISTRADO ENVIANDO CODIGO...</a>
         </div>`
            document.getElementById("alertCambio").innerHTML=body;
            envioCodigo(correo)
          

        }else{
            let body=`<div class="alert alert-danger" role="alert">
            <a href="#" class="alert-link">CORREO NO ESTA REGISTRADO</a>
         </div>`
            document.getElementById("alertCambio").innerHTML=body;
            setTimeout(()=>{
                document.getElementById("alertCambio").innerHTML="";
            },4500)
        }
    })
    .catch(err=>{
        console.log(err)
    })
}
async function envioCodigo(correo){
    const usuario={
        correo
    }
    const result=await fetch(urlBasic+"/send/codigo",{
        method:'POST',
        body:JSON.stringify(usuario),
        headers:{
            "Content-type":"Application/json"
        }
    })
    .then(response=>response)
    .then(sendCorreo=>{
        if(sendCorreo.status ===200){
          // input para ingresar codigo
            document.getElementById("ingresarCodigo").innerHTML=`
            <input type="number" name="codigo" id="codigo" class="form__input" placeholder="CODIGO" required>`
              //alert de codigo enviasdo
            let body=`<div class="alert alert-success" role="alert">
            <a href="#" class="alert-link">Codigo Enviado Revisa tu correo</a>
         </div>`
            document.getElementById("alertCambio").innerHTML=body;
            //boton para confirmar codigo
            document.getElementById("btnCodigo").innerHTML=`
            <input type="buttom" value="CONFIRMAR CODIGO" class="btnL" onclick="validoCodigo()">`
        }else{
            console.log("NO SE ENVIO CORREO ")
        }
        
    })
    .catch(err=>{
        console.log(err)
    })
}


async function validoCodigo(){
    let codigo=document.getElementById("codigo").value
    let correo=document.getElementById("correoRecu").value

    const recuperar={
        codigo,
        correo
    }
    const result=await fetch(urlBasic+"/recuperar/correo",{
        method:'POST',
        body:JSON.stringify(recuperar),
        headers:{
            "Content-type":"Application/json"
        }
    })
    .then(response=>response.json())
    .then(data=>{
        document.getElementById("ingresarCodigo").innerHTML=`<div class="row">
       
        <input type="password" name="ContraseñaNueva" id="passwordN1" class="form__input" placeholder="Contraseña Nueva" required>
            </div>
            <div class="row">
            <input type="password" name="RepetirContraseña" id="passwordN2" class="form__input" placeholder="Repetir Contraseña" required>
        </div>`
        //alert codigo correcto
        let body=`<div class="alert alert-success" role="alert">
        <a href="#" class="alert-link">Codigo Correcto</a>
     </div>`
     document.getElementById("alertCambio").innerHTML=body;
       //boton para cambiar contraseña
       document.getElementById("btnCodigo").innerHTML=`
       <input type="buttom" value="CONTRASEÑA NUEVA" class="btnL" onclick="contraseñaNuevaLogin()">`
    })
    .catch(err=>{
        let body=`<div class="alert alert-danger" role="alert">
        <a href="#" class="alert-link">Codigo Incorrecto</a>
     </div>`
     document.getElementById("alertCambio").innerHTML=body;
    })
}

async function contraseñaNuevaLogin(){
    let correo=document.getElementById("correoRecu").value
    let contraseña1=document.getElementById("passwordN1").value
    let contraseña2=document.getElementById("passwordN2").value

    if(contraseña1===contraseña2){
        const usuario={
            correo,
            contraseña:contraseña1
        }
        await fetch(urlBasic+"/usuarios/password/login",{
            method:'PUT',
            body:JSON.stringify(usuario),
            headers:{
                "Content-type":"Application/json"
                
            }
        })
        .then(response=>response.json())
        .then(data=>{
            Swal.fire({
                icon: 'success',
                title: 'CORRECTO',
                text: 'La Contraseña se cambio con exito !',
                footer: '<a href="">Bienvenido</a>'
              })


            cargarLogin()
            document.getElementById("username").value=correo
            document.getElementById("password").value=usuario.contraseña
            iniciarSesion();
            sendCorreoCambio(correo)
        })
        .catch(err=>{

        })

    }else{
        let body=`<div class="alert alert-danger" role="alert">
        <a href="#" class="alert-link">Contraseña Diferentes</a>
     </div>`
     document.getElementById("alertCambio").innerHTML=body;
    }

}

async function sendCorreoCambio(correo){
   
    const usuario ={
        correo
    }
    await fetch(urlBasic+"/send/cambio",{
        method:'POST',
        body:JSON.stringify(usuario),
        headers:{
            "Content-type":"Application/json"
        }
    })
    .then(response=>response.json())
    .then(data=>{
    })
    .catch(err=>{
    })


}


