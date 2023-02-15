
 function eliminarNota(id,idMateria,interfaz){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Eliminar Anotacion?',
      text: "no se podra recuperar la informacion de la nota!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText: 'Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("nota: "+id+" materia"+idMateria)
        deleteNota(id,idMateria);


        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelar',
          'No se elimino nada :)',
          'error'
        )
      }
    })
  }

  async function deleteNota(id,idMateria){
    let token=localStorage.getItem("token")
    const result=await fetch('http://localhost:8088/anotacion/'+id,{
      method:'DELETE',
      
      headers:{
        "Authorization":"Bearer "+token,
        "Content-type":"Application/json"
      }
    })
    .then(res=>res.json())
    .then(nota=>{
      console.log("eliminada"+nota)
      
      Swal.fire({
    
        icon: 'success',
        title: 'Se elimino la nota',
        showConfirmButton: false,
        timer: 1500
      })
    
     setTimeout(cargarNotasU(idMateria),1500)
    })
    
    .catch(err=>{
      console.log("error e nota")
    })
  }
