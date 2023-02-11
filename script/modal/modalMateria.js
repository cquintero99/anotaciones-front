
function cargarModalMateria(){
  const colorNotas=["l-bg-cherry","l-bg-blue-dark","l-bg-green-dark","l-bg-orange-dark","l-bg-cyan","l-bg-green","l-bg-orange","l-bg-cyan2"]
     
    body=`<div class=" d-inline">
    <div class="card  card-margin ${colorNotas[random()]} "  style="max-width: 240px;"  >
       <a href="#"  class="text-light p-3 text-center fw-bold" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" >    
   AGREGAR AMIGO</a>
    </div>
    <div>


    <div class="buttons ">
          <div class="container">
         <a href="#" class="btnR effect04" data-sm-link-text="CLICK" target="_blank"
         data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="nombreBoton"><span>REGISTRAR MATERIA</span></a>
       </div>
       </div>
<br>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog">
 <div class="modal-content ${colorNotas[random()]}">
   <div class="modal-header">
     <h1 class="modal-title fs-5" id="staticBackdropLabel">MATERIA</h1>
     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
   </div>
   <div class="modal-body" id="modalRegistrar">
       <label for="nombreMateria" class="form-label">Nombre</label>
       <input type="text" id="nombreMateria" class="form-control">
       <label for="codigo" class="form-label">Codigo</label>
       <input type="number" id="codigo" class="form-control">
       <label for="codigo" class="form-label">Grupo</label>
       <select class="form-select" aria-label="Default select example" id="selectGrupo">
           <option selected>Selecione un grupo</option>
           <option value="A">A</option>
           <option value="B">B</option>
           <option value="C">C</option>
           <option value="D">D</option>
           <option value="E">E</option>

         </select>
       <label for="nombreMateriaProfesor" class="form-label">Docente</label>
       <input type="text" id="nombreMateriaProfesor" class="form-control">

       
   </div>
   <div class="modal-footer " id="btnModalMateria">
     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
     <button type="button" class="btn btn-primary" onclick="saveMateria()" data-bs-dismiss="modal">Guardar</button>
   </div>
 </div>
</div>
</div>


<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">BUSCAR AMIGOS</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div id="alerRegistro"></div>
  <div class="offcanvas-body border-top  border-dark">
  <form class="d-flex" >
  <input class="form-control me-2" type="text" placeholder="email " aria-label="Search" id="buscarUserCorreo" onclick="buscarPorCorreo()">
  <button class="btn btn-outline" type="buttom">@gmail.com</button>
</form>

  <div class="widget-49">
              <ol class="widget-49-meeting-points" id="rootBuscar">

              </ol>
  </div>


  </div>
</div>
`
document.getElementById("modal").innerHTML=body;

}
