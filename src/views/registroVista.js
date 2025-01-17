export default {
    template: 
    `
    <div class="container">
        <h1 class="mt-5 text-center">Registro</h1>
        <div class="m-5 mx-auto" style="max-width: 400px">
          <form novalidate action="" class="form border shadow-sm p-3 needs-validation">
            <div>
              <label for="nombre" class="form-label">Nombre:</label>
              <input required id="nombre" type="text" class="form-control" />
              <div class="invalid-feedback">Debe de poner un nombre</div>
            </div>
            <div>
              <label for="apellidos" class="form-label">Apellidos:</label>
              <input id="apellidos" type="text" class="form-control" />
            </div>
            <div>
              <label for="email" class="form-label">Email:</label>
              <input required id="email" type="email" class="form-control" />
              <div class="invalid-feedback">
                El formato del email no es correcto
              </div>
            </div>
            <div>
              <label for="pass" class="form-label mt-3">Contraseña:</label>
              <input
                required
                id="pass"
                type="password"
                minlength="6"
                class="form-control"
              />
              <div class="invalid-feedback">
                La contraseña debe tener como mínimo 6 caracteres
              </div>
            </div>
            <input type="submit" name="Enviar" id="Enviar" value="Enviar" />
          </form>
        </div>
      </div>
    `,
    script: () => {
      console.log('vista registro cargada')
      // Validación bootstrap
  
      // Capturamos el formulario en una variable
      const formulario = document.querySelector('.needs-validation')
      // Detectamos su evento submit (enviar)
      formulario.addEventListener('submit', event => {

        if (!formulario.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          formulario.classList.add('was-validated');
        }
        else{
          formulario.classList.remove('was-validated');

        }
      },false)
    }
}