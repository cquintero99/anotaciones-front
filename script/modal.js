
function cargarModalMateria(){
    body=`<div class="buttons">
          <div class="container">
         <a href="#" class="btnR effect04" data-sm-link-text="CLICK" target="_blank"
         data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="nombreBoton"><span>REGISTRAR MATERIA</span></a>
       </div>
       </div>


<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog">
 <div class="modal-content">
   <div class="modal-header">
     <h1 class="modal-title fs-5" id="staticBackdropLabel">Formulario Registrar</h1>
     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
   </div>
   <div class="modal-body" id="modalRegistrar">
       <label for="nombreMateria" class="form-label">Nombre</label>
       <input type="text" id="nombreMateria" class="form-control">
       <label for="codigo" class="form-label">Codigo</label>
       <input type="text" id="codigo" class="form-control">
       <label for="codigo" class="form-label">Grupo</label>
       <select class="form-select" aria-label="Default select example" id="selectGrupo">
           <option selected>Selecione un grupo</option>
           <option value="1">A</option>
           <option value="2">B</option>
           <option value="3">C</option>
           <option value="4">D</option>
           <option value="5">E</option>

         </select>
       <label for="nombreMateriaProfesor" class="form-label">Docente</label>
       <input type="text" id="nombreMateriaProfesor" class="form-control">

       
   </div>
   <div class="modal-footer">
     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
     <button type="button" class="btn btn-primary" onclick="saveMateria()">Guardar</button>
   </div>
 </div>
</div>
</div>
`
document.getElementById("modal").innerHTML=body;
}

function cargarModalNota(){
    body=`
    <div class="buttons p-5">
          <div class="container">
         <a href="#" class="btnR effect04" data-sm-link-text="CLICK" target="_blank"
         data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="cargarCategorias()" ><span class="text-">REGISTRAR NOTA</span></a>
       </div>
       </div>
    
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Registrar Nota</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          
         
         
          <label for="titulo" class="form-label">Titulo </label>
          <input type="text" id="titulo" class="form-control">
          <label for="descripcion" class="form-label">Descripcion</label>
          <textarea class="form-control" id="descripcion" rows="3"></textarea>
          <label for="fecha" class="form-label">Fecha Entrega </label>
          <input type="date" id="fecha" class="form-control">
          <label for="categoria" class="form-label">Categoria </label>
          <select class="form-select" aria-label="Default select example" id="selectCategorias">
          
            
        </select>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary" onclick="saveNota()">Guardar</button>
          </div>
        </div>
      </div>
    </div>`
    document.getElementById("modal").innerHTML=body;
}