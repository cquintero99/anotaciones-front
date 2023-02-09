async function saveNota(){
    let categoria=document.getElementById("selectCategorias")
    let nombreCategoria=categoria.options[categoria.selectedIndex].text
    let materia_id=localStorage.getItem("idMateria")
    let usuario_id=1
    let titulo=document.getElementById("titulo").value
    let descripcion=document.getElementById("descripcion").value
    let fecha_entrega=document.getElementById("fecha").value
    let fecha_registro=new Date()
    let estado="ACTIVO"

    const anotacion={
        categoria:{
            id:categoria.value,
            nombre:nombreCategoria
        },
        materia_id,
        usuario_id,
        titulo,
        descripcion,
        fecha_entrega,
        fecha_registro,
        estado
    }
    let token=localStorage.getItem("token")
    const resultNota=await fetch('http://localhost:8088/anotacion',{
        method:'POST',
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
            title: 'Nota: '+titulo+' Registrada',
            showConfirmButton: false,
            timer: 1000
          })
          
          setTimeout(cargarNotasU(materia_id),1800)
    })
    .catch(error=>{
        console.log(error)
    })

  }
