function newUser(){
    let nombre=document.getElementById("nombre").value
    let apellido=document.getElementById("apellido").value
    let fecha_nacimiento=document.getElementById("fechaNacimiento").value
    let correo=document.getElementById("correo").value
    let password=document.getElementById("password").value
    let fecha_registro=new Date()
    let select=document.getElementById("selectGenero")
    let genero=select.options[select.selectedIndex].text
    
    

    const user={
        nombre,
        apellido,
        fecha_nacimiento,
        correo,
        contraseña:password,
        fecha_registro,
        rol: {
            "id": 2,
            "nombre": "USER"
        },
        estado:"ONLINE",
        genero
    }
    //console.log(user)

    if(nombre!="" && apellido!="" && correo!="" && password!="" && fecha_nacimiento!=""){
        saveUsuario(user)
    }else{
        body=`<div class="alert alert-warning" role="alert">
        <a href="#" class="alert-link">CREDENCIALES INCOMPLETAS</a>
     </div>`
    document.getElementById("alertLogin").innerHTML=body;
         setTimeout(()=>{ document.getElementById("alertLogin").innerHTML="";
                    },4500)

    }
 
}

async function saveUsuario(usuario){
    const result=await fetch(urlBasic+"/usuarios/save",{
        method:'POST',
        body:JSON.stringify(usuario),
        headers:{
            "Content-type":"Application/json"
        }
    })
    .then(response=>response.json())
    .then(newData=>{
        Swal.fire({
            icon: 'success',
            title: 'CORRECTO',
            text: 'Cuenta creada con exito !',
            footer: '<a href="">Bienvenido</a>'
          })
            cargarLogin();
            document.getElementById("username").value=usuario.correo
            document.getElementById("password").value=usuario.contraseña
            iniciarSesion();
            correoBienvenida(usuario.correo)
            .then(response=>response)
            .then(data=>{
            })
            .catch(err=>{
                console.log("EMAIL NO ENVIADO")

            } )
          
    })
    .catch(error=>{
        console.log(error)
    })
}

async function correoBienvenida(email){
    const usuario={
       correo: email
    }

    const result=await fetch(urlBasic+"/send/nuevo",{
        method:'POST',
        body:JSON.stringify(usuario),
        headers:{
            "Content-type":"Application/json"
        }
    })
}