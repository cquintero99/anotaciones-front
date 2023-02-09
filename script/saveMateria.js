 function saveMateria(){

    let nombre=document.getElementById("nombreMateria").value
    let profesor=document.getElementById("nombreMateriaProfesor").value
    let codigo=document.getElementById("codigo").value;
    let grupo=document.getElementById("selectGrupo");
    let textGrupo=grupo.options[grupo.selectedIndex].text
    let fecha = new Date()
    const materia={
        //Obtener id Usuario del token
        usuario_id:1,
        nombre,
        profesor,
        codigo,
        grupo: textGrupo,
        fecha_registro:fecha
    }
    

    registroMateria(materia)

}

async function registroMateria(materia){
    const resultSave=await fetch("http://localhost:8088/materia",{
        method :'POST',
        body:JSON.stringify(materia),
        headers:{
            "Content-type":"Application/json"
        }
    })
    .then(response=>response.json())
    .then(data=>{
        //Obtener idUsuario del token 
        let idUsuario=1
        agregoMateriaLista(data,idUsuario)
        
    })
    .catch(error=>console.log(error+"no se registro materia"))
   

}

async function agregoMateriaLista(materia,idUsuario){

    const usuarioMateria={
        materia,
        usuario_id:idUsuario
    }

    const result=await fetch('http://localhost:8088/user/materia',{
        method:'POST',
        body:JSON.stringify(usuarioMateria),
        headers:{
            "Content-type":"Application/json"
        }

    })
    .then(res=>res.json())
    .then(data=>{console.log(data)
        Swal.fire({
            icon: 'success',
            title: 'Materia: '+materia.nombre+' se registro con exito',
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(recargar,1500)})
    .catch(err=>{
        console.log("error registrar ususario materia"+err)
    })

    
}