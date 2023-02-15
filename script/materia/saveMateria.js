 function saveMateria(){

    let nombre=document.getElementById("nombreMateria").value
    let profesor=document.getElementById("nombreMateriaProfesor").value
    let codigo=document.getElementById("codigo").value;
    let grupo=document.getElementById("selectGrupo");
    let textGrupo=grupo.options[grupo.selectedIndex].text
    let fecha = new Date()
    let id=JSON.parse(localStorage.getItem("data")).id
    let estado=document.getElementById("selectEstado");
    let textEstado=estado.options[estado.selectedIndex].text
    const materia={
        //Obtener id Usuario del token
        usuario_id:id,
        nombre,
        profesor,
        codigo,
        grupo: textGrupo,
        fecha_registro:fecha,
        estado:textEstado
    }
    
    console.log(materia)
    registroMateria(materia)

}

async function registroMateria(materia){
    let token=localStorage.getItem("token")
    const resultSave=await fetch("http://localhost:8088/materia",{
        method :'POST',
        body:JSON.stringify(materia),
        headers:{
            "Content-type":"Application/json",
            "Authorization":"Bearer "+token
            
        }
    })
    .then(response=>response.json())
    .then(data=>{
        //Obtener idUsuario del token 
        let idUsuario=JSON.parse(localStorage.getItem("data")).id
        agregoMateriaLista(data,idUsuario)
        
    })
    .catch(error=>console.log(error+"no se registro materia"))
   

}

async function agregoMateriaLista(materia,idUsuario){

    const usuarioMateria={
        materia,
        usuario_id:idUsuario
    }
    let token=localStorage.getItem("token")
    const result=await fetch('http://localhost:8088/user/materia',{
        method:'POST',
        body:JSON.stringify(usuarioMateria),
        headers:{
            "Content-type":"Application/json",
            "Authorization":"Bearer "+token
        }

    })
    .then(res=>res.json())
    .then(data=>{
        Swal.fire({
            icon: 'success',
            title: 'Materia: '+materia.nombre+' se registro con exito',
            showConfirmButton: false,
            timer: 1500
          })
          listaMateria()
        })
    .catch(err=>{
        console.log("error registrar ususario materia"+err)
    })

    
}