async function modalMateria(id){


    const result= await fetch("http://localhost:8088/materia/"+id)
    .then(response=>response.json())
    .then(data=>cargarDatosMateria(data))
    .catch(err=>console.log(err))
  
    
}


function cargarDatosMateria(materia){

    document.getElementById("nombreMateria").value=materia.nombre
    document.getElementById("codigo").value=materia.codigo
    document.getElementById("nombreMateriaProfesor").value=materia.profesor
    $("#selectGrupo").val(materia.grupo);

    body=` <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
    <button type="button" class="btn btn-primary" onclick="updateMateria(${materia.id})" data-bs-dismiss="modal">Actualizar</button>`

    document.getElementById("btnModalMateria").innerHTML=body;
    

}


async function updateMateria(id){
    let nombre=document.getElementById("nombreMateria").value
    let profesor=document.getElementById("nombreMateriaProfesor").value
    let codigo=document.getElementById("codigo").value;
    let grupo=document.getElementById("selectGrupo");
    let textGrupo=grupo.options[grupo.selectedIndex].text
    let fecha = new Date()
    const newMateria={
        usuario_id:1,
        nombre,
        profesor,
        codigo,
        grupo: textGrupo,
        fecha_registro:fecha
    }

    const resultUpdate=await fetch('http://localhost:8088/materia/'+id,{
        method:'PUT',
        body:JSON.stringify(newMateria),
        headers:{
            "Content-type":"Application/json"
        }

    })
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
         
Swal.fire({
    
    icon: 'success',
    title: 'Materia: '+nombre+' se actualizo',
    showConfirmButton: false,
    timer: 1500
  })

  setTimeout(recargar,1500)
    })
    .catch(err=>{
        console.log(err)
    })
}
