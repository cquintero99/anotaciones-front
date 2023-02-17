async function allAnotaciones(){
    let id=JSON.parse(localStorage.getItem("data")).id
    let token=localStorage.getItem("token")
    const result=await fetch('http://localhost:8088/usuarios/'+id+'/anotaciones',{
        headers:{
            "Authorization":"Bearer "+token
        }
    })
    return result;
}
function cargarCalendarioNotas(filtro){
    document.getElementById("perfil").innerHTML="";
    document.getElementById("resumenMateria").innerHTML=""
    document.getElementById("modal").innerHTML=""
    let body=`
    <div class="event-schedule-area-two bg-color pad100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title text-center">
                        <div class="title-text">
                            <h3>NOTAS</h3>
                         

                            <p class="">
                               <ul class="nav justify-content-center ">
                            <li class="nav-item">
                              <a class="nav-link fw-bold text-dark active" aria-current="page" href="#" onclick="cargarCalendarioNotas('activas')">ACTIVAS</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link fw-bold text-dark active" href="#" onclick="cargarCalendarioNotas('vencidas')">VENCIDAS</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link fw-bold text-dark active"  href="#" onclick="cargarCalendarioNotas('todas')" >TODAS</a>
                            </li>
                          </ul> </p>
                        </div>
                        
                        
                    </div>
                </div>
                <!-- /.col end-->
            </div>
            <!-- row end-->
            <div class="row">
                <div class="col-lg-12 ">
               
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade active show" id="home" role="tabpanel">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th class="text-center" scope="col">FECHA ENTREGA</th>
                                            <th scope="col">CATEGORIA</th>
                                            <th scope="col">DESCRIPCION</th>
                                            <th scope="col">DATOS REGISTRO</th>
                                            <th class="text-center" scope="col">ACCIONES</th>
                                        </tr>
                                    </thead>
                                    <tbody id="listaNotas">
                                      
                                        

                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                       


                        
                    </div>
                    <div class="primary-btn text-center">
                        <a href="#" class="btn text-dark fw-bold">CATEGORIAS</a>
                    </div>
                    <div id="homeCategorias">
                    </div>
                </div>
                <!-- /col end-->
            </div>
            <!-- /row end-->
        </div>
    </div>`
    document.getElementById("root").innerHTML=body;
    cargarTodasNotas(filtro)
    homeCategoriaNotas()
}

function homeCategoriaNotas(){
    cargarCategorias()
    .then(res=>res.json())
    .then(data=>{
        //console.log(data)
        let body=` <ul class="nav custom-tab" id="myTab" role="tablist" id="homeCategorias">
                      
                        
        `
        for (let i = 0; i < data.length; i++) {
            

            body+=` 
            <li class="nav-item">
            <a class="nav-link active show" id="${data[i].id}" data-toggle="tab" 
            href="#" role="tab" aria-controls="home" aria-selected="true">${data[i].nombre}</a>
        </li>
       `
            
        }
        body+=`</ul>`
        document.getElementById("homeCategorias").innerHTML=body;

    })
    .catch(err=>console.log(err))
   
}
function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    let fecha=new Date(a.fecha_entrega)
    let fecha2=new Date(b.fecha_entrega)
//console.log("FECHA: DIA "+fecha.getUTCDate()+"  fecha:"+fecha)

    const bandA = fecha;
    const bandB = fecha2;
  
    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }


function cargarTodasNotas(filtro){

    allAnotaciones()
    .then(res=>res.json())
    .then(data=>{
         verHomeNotas(data,filtro,"listaNotas")
    })
   
}

function verHomeNotas(data,filtro,bodyHtml){
    
    const meses=["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"]
    const colorNotas=["l-bg-cherry","l-bg-blue-dark","l-bg-green-dark","l-bg-orange-dark","l-bg-cyan","l-bg-green","l-bg-orange","l-bg-cyan2"]
    
      //  console.log(data)
        let body=""
        for (let i = 0; i <data.length ; i++) {
            data.sort(compare)
          
      var fecha=new Date(data[i].fecha_entrega)
      var fechaRegistro=data[i].fecha_registro.substr(0,10);
      //console.log("FECHA: DIA "+fecha.getUTCDate()+"  fecha:"+fecha)
      let dia=Number(fecha.getUTCDate());
      let mes=Number(fecha.getUTCMonth())
      let hoy=new Date()
      let diaHoy=Number(hoy.getUTCDate());
      let mesHoy=Number(hoy.getUTCMonth());
       if(fecha>hoy && filtro==="activas" || dia===diaHoy && mes===mesHoy ){
       // console.log("FECHA: DIA "+fecha+"  fecha:"+hoy)
        body+=`  <tr class="inner-box ">
        <th scope="row" class="${colorNotas[cargarColorNotas()]}">
            <div class="event-date fw-bold text-light ">
                <span>${dia}</span>
                <p>${meses[mes]}</p>
            </div>
        </th>
        <td>
            <div  class="event-img" onclick="listaMateria()">
                <a href="#" class="text-dark"><h5>${data[i].categoria.nombre}</h5></a>
            </div>
        </td>
        <td>
            <div class="event-wrap">
                <h3><a href="#">${data[i].titulo}</a></h3>
                <div class="meta">
                    <div class="organizers">
                        <a href="#">${data[i].descripcion}</a>
                    </div>
                    
                </div>
            </div>
        </td>
        <td>
        <div id="alertCopiar${data[i].materia_id}"></div>
        <div class="categories">
        <p class="btn" onclick="copiarId(${data[i].materia_id})">Materia: ${data[i].materia_id}</p>
         </div>
        <div class="time">
       
        <a class="text-center text-dark fw-bold" href="#">${fechaRegistro}</a>
       
        </div>

        </td>
        <td>
            <div class="primary-btn">
                
                <a class="text-center text-danger fw-bold" href="#" onclick="eliminarNota(${data[i].id}, ${data[i].materia_id})">ELIMINAR</a>
            </div>
        </td>
    </tr>`
    
        }else if(filtro==="vencidas" && fecha<hoy){
            
            body+=`  <tr class="inner-box ">
            <th scope="row" class="${colorNotas[random()]}">
                <div class="event-date fw-bold text-light ">
                    <span>${dia}</span>
                    <p>${meses[mes]}</p>
                </div>
            </th>
            <td>
                <div  class="event-img" onclick="listaMateria()">
                    <a href="#" class="text-dark"><h5>${data[i].categoria.nombre}</h5></a>
                </div>
            </td>
            <td>
                <div class="event-wrap">
                    <h3><a href="#">${data[i].titulo}</a></h3>
                    <div class="meta">
                        <div class="organizers">
                            <a href="#">${data[i].descripcion}</a>
                        </div>
                       
                        
                    </div>
                </div>
            </td>
            <td>
            <div id="alertCopiar${data[i].materia_id}"></div>
            <div class="categories">
            <p class="btn" onclick="copiarId(${data[i].materia_id})">Materia: ${data[i].materia_id}</p>
             </div>
            <div class="time">
           
            <a class="text-center text-dark fw-bold" href="#">${fechaRegistro}</a>
           
            </div>
            </td>
            <td>
                <div class="primary-btn">
                <a class="text-center text-danger fw-bold" href="#" onclick="eliminarNota(${data[i].id}, ${data[i].materia_id})">ELIMINAR</a>
                </div>
            </td>
        </tr>`
    
            }else if(filtro==="todas"){
                
            body+=`  <tr class="inner-box ">
            <th scope="row" class="${colorNotas[random()]}">
                <div class="event-date fw-bold text-light ">
                    <span>${dia}</span>
                    <p>${meses[mes]}</p>
                </div>
            </th>
            <td>
                <div  class="event-img" onclick="listaMateria()">
                    <a href="#" class="text-dark"><h5>${data[i].categoria.nombre}</h5></a>
                </div>
            </td>
            <td>
                <div class="event-wrap">
                    <h3><a href="#">${data[i].titulo}</a></h3>
                    <div class="meta">
                        <div class="organizers">
                            <a href="#">${data[i].descripcion}</a>
                        </div>
                        
                        
                    </div>
                </div>
            </td>
            <td>
            <div id="alertCopiar${data[i].materia_id}"></div>
        <div class="categories">
        <p class="btn" onclick="copiarId(${data[i].materia_id})">ID Materia: ${data[i].materia_id}</p>
         </div>
        <div class="time">
       
        <a class="text-center text-dark fw-bold" href="#">${fechaRegistro}</a>
       
        </div>
            </td>
            <td>
                <div class="primary-btn">
                <a class="text-center text-danger fw-bold" href="#" onclick="eliminarNota(${data[i].id}, ${data[i].materia_id})">ELIMINAR</a>
                </div>
            </td>
        </tr>`
            }


        }
        
        document.getElementById(bodyHtml).innerHTML=body;
}