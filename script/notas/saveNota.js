 function saveNota(rolMateria){
    
    let categoria=document.getElementById("selectCategorias")
    let nombreCategoria=categoria.options[categoria.selectedIndex].text
    //ID MATERIA LOOK
    let materia_id=localStorage.getItem("idMateria")
    let usuario_id=JSON.parse(localStorage.getItem("data")).id
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
    guardarNota(anotacion,rolMateria)

   

  }
  function guardarNota(anotacion,rolMateria){
    integrantesMateria(anotacion.materia_id)
    .then(res=>res.json())
    .then(integrantes=>{
       let idUsuario=JSON.parse(localStorage.getItem("data")).id
     
       const data2 = integrantes.filter(integrantes => integrantes.usuario_id===idUsuario);
      
      
       if(data2[0].usuario_id===idUsuario){
        verfGuardarNota(anotacion,rolMateria)
       }else{
        location.reload()
       }
       
       
    })
    
  }


    async function verfGuardarNota(anotacion,rolMateria){
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
                title: 'Nota: '+data.titulo+' Registrada',
                showConfirmButton: false,
                timer: 1000
              })
              listaNotas(data.materia_id,rolMateria)
              //setTimeout(cargarNotasU(data.materia_id),1800)
        })
        .catch(error=>{
            console.log(error)
        })
    } 
     
 