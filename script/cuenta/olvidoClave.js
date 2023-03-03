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
            localStorage.setItem("intento",1)
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

        let intento=localStorage.getItem("intento")
        localStorage.setItem("intento",Number(intento)+1)
        if(Number(intento)===3){
            document.getElementById("btnCodigo").innerHTML=`<div class="alert alert-danger" role="alert">
            <a href="#" class="alert-link">TIENES QUE GENERAR UN CODIGO NUEVO</a>
         </div>`
        }
        let body=`<div class="alert alert-danger" role="alert">
        <a href="#" class="alert-link">Codigo Incorrecto / Intento: ${intento}</a>
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