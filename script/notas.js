async function listaNotas(id) {
    localStorage.setItem("idMateria",id)
    resumenMateria(id)
    
    const allNotas = await fetch("http://localhost:8088/materia/" + id + "/anotaciones")
      .then((response) => response.json())
      .then((notas) => {cargarNotas(notas)
        
    })
      .catch((arr) => console.log(arr));
  }

  let cout=0;
  function cargarColorFecha(){
      if(cout>6)cout=0;
      return cout++;
  }
  
  function cargarNotas(notas) {
    let body = "";
    if(notas.length===0){
      body=`<h1>No Hay notas</h1>`
    }
    for (let i = 0; i < notas.length; i++) {
      const meses=["ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC"]
      const colorFecha=["primary", "success","info", "warning", "danger",  "dark",  "base", ]
      var fecha=new Date(notas[i].fecha_entrega)
      let dia=fecha.getUTCDate();
      let mes=Number(fecha.getUTCMonth())
      body += `
          
          <div class="col-lg-4">
          
              <div class="card card-margin style="width: 18rem;"">
             
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="button" class="btn-close" aria-label="Close" onclick="eliminarNota(${notas[i].id})"></button>
              </div>
                  <div class="card-header no-border">
                  <h5 class="card-title">${notas[i].categoria.nombre}</h5>
                  </div>
                 
                  <div class="card-body pt-0">
                      <div class="widget-49">
                          <div class="widget-49-title-wrapper">
                              <div class="widget-49-date-${colorFecha[cargarColorFecha()]}">
                                  <span class="widget-49-date-day">${dia}</span>
                                  <span class="widget-49-date-month">${meses[mes]}</span>
                              </div>
                              <div class="widget-49-meeting-info">
                              <span class="widget-49-meeting-time">TITULO</span>
                                  <h3><span class="widget-49-pro-title">${notas[i].titulo}</span></h3>
                                  
                              </div>
                          </div>

                           
                          <ol class="widget-49-meeting-points">
                              <li class="widget-49-meeting-item"><span>DESCRIPCION</span></li>
                              <p class="fw-semibold fs-6 ">${notas[i].descripcion}</p>
                              <li class="widget-49-meeting-item" ><span >ESTADO:  ${notas[i].estado} </span></li>
                              <a href="#" class="fw-semibold fs-6 " onclick="cambiarEstado(${notas[i].id})">¿ACTUALIZAR ESTADO?</a>
                              <li class="widget-49-meeting-item"><span>Fecha de registro  ${notas[i].fecha_registro}</span></li>
                              
                          </ol>
                          <div class="widget-49-meeting-action">
                              <a href="#" class="btn btn-sm btn-flash-border-primary"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="cargarCategorias()" >Editar</a>
                          </div>
                      </div>
                  </div>
             
           </div>
           </div>
          `
    }
    document.getElementById("root").innerHTML="";
    document.getElementById("rootNotas").innerHTML=body;
    cargarModalNota()
  }


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
    const resultNota=await fetch('http://localhost:8088/anotacion',{
        method:'POST',
        body:JSON.stringify(anotacion),
        headers:{
            "Content-type":"Application/json"

        }
    })
    .then(response=>response.json())
    .then(data=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          
          setTimeout(recargar,1500)
    })
    .catch(error=>{
        console.log(error)
    })

  }

  function eliminarNota(id){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  async function cambiarEstado(id){
    const { value: fruit } = await Swal.fire({
      title: 'ACTUALIZAR ESTADO ',
      input: 'select',
      inputOptions: {
        'ESTADOS': {
          ACTIVO: 'Activo',
          PROCESO: 'Proceso',
          TERMINADO: 'Terminado',
          ENTREGADO: 'Entregado',

        }
      },
      inputPlaceholder: 'Selecciona una opcion',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === 'ACTIVO') {
            resolve()
          } else {
            resolve('You need to select oranges :)')
          }
        })
      }
    })
    
    if (fruit) {
      Swal.fire(`You selected: ${fruit}`)
    }
  }

