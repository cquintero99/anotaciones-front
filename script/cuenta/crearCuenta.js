function newUser(){
    let nombre=document.getElementById("nombre").value
    let apellido=document.getElementById("apellido").value
    let fecha_nacimiento=document.getElementById("fechaNacimiento").value
    let correo=document.getElementById("correo").value
    let password=document.getElementById("password").value
    let fecha_registro=new Date()

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
        estado:"ONLINE"
    }
    saveUsuario(user)
}

async function saveUsuario(usuario){
    const result=await fetch("http://localhost:8088/usuarios/save",{
        method:'POST',
        body:JSON.stringify(usuario),
        headers:{
            "Content-type":"Application/json"
        }
    })
    .then(response=>response.json())
    .then(newData=>{
        console.log(newData)
        alert("user creado")
    })
    .catch(error=>{
        console.log(error)
    })
}