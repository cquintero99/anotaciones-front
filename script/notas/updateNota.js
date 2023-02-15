async function modalNota(id){
    //cargarCategorias()
    let token=localStorage.getItem("token")
    const result=await fetch('http://localhost:8088/anotacion/'+id,{
        headers:{
            "Authorization":"Bearer "+token
        }
    })
    .then(res=>res.json())
    .then(data=>{cargarNotaModal(data)
        cargarCategoriaNota(data.categoria)
    })
    .catch(err=>console.log(err))

}

async function cargarNotaModal(nota){
   
    document.getElementById("titulo").value=nota.titulo
    document.getElementById("descripcion").value=nota.descripcion

    
    let fecha=nota.fecha_entrega;
    document.getElementById("fecha").value=fecha.substr(0,10)

    body=` <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
    <button type="button" class="btn btn-primary" onclick="updateNota(${nota.id})" data-bs-dismiss="modal">Actualizar</button>`
    
    document.getElementById("btnModalNota").innerHTML=body;
}
function cargarCategoriaNota(categoria){
  
  $("#selectCategorias option:contains("+categoria.nombre+")").attr('selected', true);

  body+=
        ` <option value=${categoria.id}>${categoria.nombre}</option>
        `
        document.getElementById("selectCategorias").innerHTML=body;
       
      

}


async function updateNota(id){
    let categoria=document.getElementById("selectCategorias")
    let nombreCategoria=categoria.options[categoria.selectedIndex].text
    let materia_id=localStorage.getItem("idMateria")
    let titulo=document.getElementById("titulo").value
    let descripcion=document.getElementById("descripcion").value
    let fecha=document.getElementById("fecha")
    let fecha_registro=new Date()
    let estado="ACTIVO"
    let fecha_entrega=new Date(fecha.value)
    const anotacion={
        categoria:{
            id:categoria.value,
            nombre:nombreCategoria
        },
        materia_id,
        titulo,
        descripcion,
        fecha_entrega,
        fecha_registro,
        estado
    }
    let token =localStorage.getItem("token")
    const resulUpdateNota= await fetch("http://localhost:8088/anotacion/"+id,{
        method:'PUT',
        body:JSON.stringify(anotacion),
        headers:{
            "Content-type":"Application/json",
            "Authorization":"Bearer "+token
        }
    })
    .then(response=>response.json())
    .then(data=>{
        Swal.fire({
    
            icon: 'success',
            title: 'Nota: '+titulo+' se actualizo',
            showConfirmButton: false,
            timer: 1500
          })
        
         setTimeout(cargarNotasU(materia_id),1500)
    })
    .catch(err=>{
        console.log("EROR ACTUALIZAR NOTA"+err)
    })
}

function cargarNotasU(id){
    listaNotas(id)

}