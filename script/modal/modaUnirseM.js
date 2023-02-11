
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
        <div id="alertMateriaAmigo"></div>
        <div class="modal-body" id="btnModalInvitar">
        <form class="d-flex" >


        <input class="form-control me-2" type="text" placeholder="email " aria-label="Search" id="buscarAmigosLista" onclick="buscarAmigoLista()">
        <button class="btn btn-outline" type="buttom">@gmail.com</button>
      </form>

              <div class="widget-49">
              <ol class="widget-49-meeting-points" id="listaAmigos">
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