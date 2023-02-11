async function listaNotas(id) {
    localStorage.setItem("idMateria",id)
    resumenMateria(id)
    let token=localStorage.getItem("token")
    
    const allNotas = await fetch("http://localhost:8088/materia/" + id + "/anotaciones",{
      headers:{
        'Authorization': 'Bearer ' + token
    }
    })
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
  let countNote=0;
function cargarColorNotas(){
    if(countNote>7)countNote=0;
    return countNote++;
}



  function cargarNotas(notas) {
    let body = "";
    if(notas.length===0){
      body=`<div class="col align-self-center p-5">
      <div class="cardR   l-bg-orange" style="max-width: 1200px;">
          <div class="card-statistic-3 p-4">
              <div class="card-icon card-icon-large"></div>
              <div class="mb-4">
                  <h5 class="card-title mb-0">Vacio</h5>
              </div>
              <div class="row align-items-center mb-2 d-flex">
                  <div class="col-8">
                      <h2 class="d-flex align-items-center mb-0">
                      No hay notas ... 
                      </h2>
                  </div>
                  <div class="col-4 text-right">
                      <span><i class="material-icons">person_add</i></span>
                  </div>
              </div>
              <div class="progress mt-1 " data-height="8" style="height: 8px;">
                  <div class="progress-bar l-bg-green" role="progressbar" data-width="0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="0" style="width: 0%;"></div>
              </div>
          </div>
      </div>
  </div>`

      
    }

    for (let i =notas.length-1; i >=0 ; i--) {
      const colorNotas=["l-bg-cherry","l-bg-blue-dark","l-bg-green-dark","l-bg-orange-dark","l-bg-cyan","l-bg-green","l-bg-orange","l-bg-cyan2"]
      const meses=["ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC"]
      const colorFecha=["primary", "success","info", "warning", "danger",  "dark",  "base", ]
      var fecha=new Date(notas[i].fecha_entrega)
      //console.log("FECHA: DIA "+fecha.getUTCDate()+"  fecha:"+fecha)
      let dia=Number(fecha.getUTCDate());
      let mes=Number(fecha.getUTCMonth())
      let rol="";
      let id=JSON.parse(localStorage.getItem("data")).id
      if(id===notas[i].usuario_id){
        rol="CREADOR"
        body += `
          
        <div class=" col-md-6 col-sm-6">
        
           <div class="card  card-margin ${colorNotas[cargarColorNotas()]} "  style="max-width: 840px;" >
           
                      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                      
                      <button type="button" class="btn"  onclick="eliminarNota(${notas[i].id},${notas[i].materia_id})" id="btnEliminarNota"> <i class="material-icons">delete
                      </i></button>
                      </div>
                      <div class="card-header no-border">
                      <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-journal-text" viewBox="0 0 16 16">
                      <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                      <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                      <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                    </svg>${notas[i].categoria.nombre}</h5>
                      </div>
               
                <div class="card-body pt-0">
                    <div class="widget-49">
                            <div class="widget-49-title-wrapper border-bottom border-dark">
                                    <div class="widget-49-date-${colorFecha[cargarColorFecha()]}">
                                        <span class="widget-49-date-day">${dia}</span>
                                        <span class="widget-49-date-month">${meses[mes]}</span>
                                    </div>
                                      <div class="widget-49-meeting-info">
                                      <span class="widget-49-meeting-time">TITULO</span>
                                          <h3><span >${notas[i].titulo}</span></h3>
                                          
                                      </div>
                            </div>

                         
                          <ol class="widget-49-meeting-points">
                              <li class="widget-49-meeting-item "><span>DESCRIPCION:</span></li>
                              <textarea class="form-control fw-semibold " id="exampleFormControlTextarea1" rows="3">${notas[i].descripcion}
                              </textarea>
                              
                              
                              <li class="widget-49-meeting-item" ><span >ESTADO:  </span></li>
                              <p class="text-center border border-light fw-semibold fs-6" onclick="cambiarEstado(${notas[i].id})">${notas[i].estado} </p>
                             
                              
                              <li class="widget-49-meeting-item"><span>ARCHIVOS</span></li>
                              <div class="mb-3">
                              <p class="text-center border border-light fw-semibold fs-6">PDF, JPG , EXEL , WORD </p>
                              <input class="form-control" type="file" id="formFile">
                              </div>
                              <li class="widget-49-meeting-item"><span>ROL</span></li>
                              <p class="text-center border border-light fw-semibold fs-6">${rol}</p>
                          </ol>
                          
                          <div class="widget-49-meeting-action" id="btnEditarNota">
                              <a href="#" class="btn btn-sm btn-flash-border-primary"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="modalNota(${notas[i].id})" >Editar <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></a>
                          </div>
                          <div class="widget-49-meeting-info text-center border-top ">
                                      <span class="widget-49-meeting-time text-muted">${notas[i].fecha_registro.substr(0,10)}</span>
                          </div>
                    </div>
                  </div>
           
         </div>
         </div>
        `
      }else{
        rol="ESPECTADOR"
        body += `
          
        <div class=" col-md-6 col-sm-6">
        
           <div class="card  card-margin ${colorNotas[cargarColorNotas()]} "  style="max-width: 840px;" >
           
                      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                      
                      <button type="button" class="btn" aria-label="Close"  id="btnEliminarNota"><i class="material-icons">group</i></button>
                      </div>
                      <div class="card-header no-border">
                      <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-journal-text" viewBox="0 0 16 16">
                      <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                      <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                      <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                    </svg>${notas[i].categoria.nombre}</h5>
                      </div>
               
                <div class="card-body pt-0">
                    <div class="widget-49">
                            <div class="widget-49-title-wrapper border-bottom border-dark">
                                    <div class="widget-49-date-${colorFecha[cargarColorFecha()]}">
                                        <span class="widget-49-date-day">${dia}</span>
                                        <span class="widget-49-date-month">${meses[mes]}</span>
                                    </div>
                                      <div class="widget-49-meeting-info">
                                      <span class="widget-49-meeting-time">TITULO</span>
                                          <h3><span >${notas[i].titulo}</span></h3>
                                          
                                      </div>
                            </div>

                         
                          <ol class="widget-49-meeting-points">
                              <li class="widget-49-meeting-item "><span>DESCRIPCION:</span></li>
                              <textarea class="form-control fw-semibold " id="exampleFormControlTextarea1" rows="3">${notas[i].descripcion}
                              </textarea>
                              
                              
                              <li class="widget-49-meeting-item" ><span >ESTADO:  </span></li>
                              <p class="text-center border border-light fw-semibold fs-6" onclick="cambiarEstado(${notas[i].id})">${notas[i].estado} </p>
                             
                              
                              <li class="widget-49-meeting-item"><span>ARCHIVOS</span></li>
                              <div class="mb-3">
                              <p class="text-center border border-light fw-semibold fs-6">PDF, JPG , EXEL , WORD </p>
                              <input class="form-control" type="file" id="formFile">
                              </div>
                              <li class="widget-49-meeting-item"><span>ROL</span></li>
                              <p class="text-center border border-light fw-semibold fs-6">${rol}</p>
                          </ol>
                          
                          <div class="widget-49-meeting-action" id="btnEditarNota">
                              <a href="#" class="btn btn-sm btn-flash-border-primary"    >NOTE 
                              
                              </a>
                          </div>
                          
                          <div class="widget-49-meeting-info text-center border-top ">
                                      <span class="widget-49-meeting-time text-muted">${notas[i].fecha_registro.substr(0,10)}</span>
                          </div>
                    </div>
                  </div>
           
         </div>
         </div>
        `
      }
     
    }
    document.getElementById("root").innerHTML="";
    document.getElementById("rootNotas").innerHTML=body;
    cargarModalNota()
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

