export const proyectoNuevoVista = {
    template: 
    `
    <div class="container">
        <h1 class="mt-5">Nuevo proyecto</h1>
        <div class="d-flex justify-content-end">
          <button class="btn btn-outline-secondary mt-5">
            <i class="bi bi-arrow-bar-left" style="font-size: 1em"></i>
            Volver
          </button>
        </div>
        <div class="row mt-2">
          <div class="col-12 col-md-4 pt-2 mb-3">
            <img class="img-fluid" src="./images" alt="" />
          </div>
          <div class="col-12 col-md-8">
            <form novalidate action="" class="form needs-validation">
              <label for="nombre" class="form-label">
                <strong>Nombre: </strong>
              </label>
              <input
                required
                type="text"
                id="nombre"
                value="Nombre Autor"
                class="form-control"
              />
              <div class="invalid-feedback">Debes de poner un nombre</div>

              <label for="descripcion" class="form-label mt-2">
                <strong>Descripción: </strong>
              </label>
              <textarea
                id="descripcion"
                class="form-control"
                rows="4"
              ></textarea>

              <label for="estado" class="form-label mt-2">
                <strong>Estado: </strong>
              </label>
              <select required id="estado" class="form-control">
                <option value="estado">estado</option>
                <option value="otro estado">otro estado</option>
              </select>
              <div class="invalid-feedback">Debe de seleccionar un estado</div>

              <label for="fecha" class="form-label mt-2">
                <strong>Fecha: </strong>
              </label>
              <input required type="date" id="fecha" class="form-control" />
              <div class="invalid-feedback">
                El formato de la fecha no es el correcto
              </div>

              <label for="enlace" class="form-label mt-2">
                <strong>Enlace: </strong>
              </label>
              <input required type="url" id="enlace" class="form-control" />
              <div class="invalid-feedback">
                El formato de la URL no es correcto
              </div>

              <input type="submit" name="Enviar" id="Enviar" value="Enviar" />
            </form>
          </div>
        </div>
      </div>
    `
}