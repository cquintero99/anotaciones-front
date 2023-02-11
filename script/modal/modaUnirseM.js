
function cargarModalBuscar(){
    body=`
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">INVITAR USUARIO</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" id="btnModalInvitar">
                      <form class="row g-3">
                
                <div class="col-auto">
                  <label for="emailBuscar" class="visually-hidden">Email</label>
                  <input type="email" class="form-control" id="emailBuscar"  placeholder="email@example.com">
                </div>
                <div class="col-auto">
                  <button type="submit" class="btn btn-primary mb-3" onclick="buscarPorCorreo()">BUSCAR</button>
                </div>
              </form>

              <div class="widget-49">
              <ol class="widget-49-meeting-points">
                              <li class="widget-49-meeting-item "><span>DESCRIPCION:</span></li>
              </ol>
              </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
    `
    document.getElementById("modal").innerHTML+=body
    
}