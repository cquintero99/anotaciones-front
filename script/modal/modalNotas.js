function cargarModalNota(){
    const colorNotas=["l-bg-cherry","l-bg-blue-dark","l-bg-green-dark","l-bg-orange-dark","l-bg-cyan","l-bg-green","l-bg-orange","l-bg-cyan2"]
     
      body=`
      <div class="buttons p-3">
            <div class="container">
           <a href="#" class="btnR effect04" data-sm-link-text="CLICK" target="_blank"
           data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="mostrarCategorias()" ><span class="text-">REGISTRAR NOTA</span></a>
         </div>
         </div>
      
      <div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog ">
          <div class="modal-content ${colorNotas[random()]}">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-center" id="staticBackdropLabel"> Nota</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            
           
           
            <label for="titulo" class="form-label">Titulo </label>
            <input type="text" id="titulo" class="form-control">
            <label for="descripcion" class="form-label">Descripcion</label>
            <textarea class="form-control" id="descripcion" rows="6"></textarea>
            <label for="fecha" class="form-label">Fecha Entrega </label>
            <input type="date" id="fecha" class="form-control">
            <label for="categoria" class="form-label">Categoria </label>
            
            <select class="form-select" aria-label="Default select example" id="selectCategorias"  >
            
            
              
          </select>
            </div>
            <div class="modal-footer" id="btnModalNota">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-primary" onclick="saveNota()" data-bs-dismiss="modal">Guardar</button>
            </div>
          </div>
        </div>
      </div>`
      document.getElementById("modal").innerHTML=body;
  }