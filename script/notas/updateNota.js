async function modalNota(id,rolMateria){
    //cargarCategorias()
    let token=localStorage.getItem("token")
    const result=await fetch(urlBasic+'/anotacion/'+id,{
        headers:{
            "Authorization":"Bearer "+token
        }
    })
    .then(res=>res.json())
    .then(data=>{cargarNotaModal(data,rolMateria)
        cargarCategoriaNota(data.categoria)
    })
    .catch(err=>console.log(err))

}

async function cargarNotaModal(nota,rolMateria){
   
    document.getElementById("titulo").value=nota.titulo
    document.getElementById("descripcion").value=nota.descripcion

    
    let fecha=nota.fecha_entrega;
    document.getElementById("fecha").value=fecha.substr(0,10)

    body=` <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
    <button type="button" class="btn btn-primary" onclick="updateNota(${nota.id},'${rolMateria}')" data-bs-dismiss="modal">Actualizar</button>`
    
    document.getElementById("btnModalNota").innerHTML=body;
}

function cargarCategoriaNota(categoria){
  
  $("#selectCategorias option:contains("+categoria.nombre+")").attr('selected', true);

  body+=
        ` <option value=${categoria.id}>${categoria.nombre}</option>
        `
        document.getElementById("selectCategorias").innerHTML=body;
       
      

}


async function updateNota(id,rolMateria){
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
    const resulUpdateNota= await fetch(urlBasic+"/anotacion/"+id,{
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
          listaNotas(materia_id,rolMateria)
         //setTimeout(cargarNotasU(materia_id),1500)
    })
    .catch(err=>{
        console.log("EROR ACTUALIZAR NOTA"+err)
    })
}

