async function modalMateria(id){

    let token=localStorage.getItem("token")
    const result= await fetch("http://localhost:8088/materia/"+id,{
        headers:{
            "Authorization":"Bearer "+token
        }
    })
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
    let selectEstado=document.getElementById("selectEstado");
    let textEstado=selectEstado.options[selectEstado.selectedIndex].text
    const newMateria={
        nombre,
        profesor,
        codigo,
        grupo: textGrupo,
        fecha_registro:fecha,
        estado:textEstado
    }

    let token=localStorage.getItem("token")

    const resultUpdate=await fetch('http://localhost:8088/materia/'+id,{
        method:'PUT',
        body:JSON.stringify(newMateria),
        headers:{
            "Content-type":"Application/json",
            "Authorization":"Bearer "+token
        }

    })
    .then(response=>response.json())
    .then(data=>{
         
Swal.fire({
    
    icon: 'success',
    title: 'Materia: '+nombre+' se actualizo',
    showConfirmButton: false,
    timer: 1500
  })
    listaMateria()
    })
    .catch(err=>{
        console.log(err)
    })
}
