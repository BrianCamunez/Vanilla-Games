export default  {
    template:
    `
    <div class="container">
        <h1 class="mt-5 text-center">Inicia sesión</h1>
        <div class="m-5 mx-auto" style="max-width: 400px">
          <form novalidate action="" class="form border shadow-sm p-3">
            <div>
              <label for="email" class="form-label">Email:</label>
              <input required type="email" class="form-control" />
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
            <div>
            </div>
            <div class="form-check mt-3">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
              <label class="form-check-label" for="flexCheckChecked">
                Recordar sesión
              </label>
            </div>
            <a class="d-block text-end" href="#"
              >¿Has olvidado tu contraseña?</a
            >
            <input
              type="submit"
              class="btn btn-primary w-100 mt-3"
              value="Iniciar sesión"
            />
          </form>
          <a class="d-block mt-5 btn btn-secondary mx-auto" href="#"
            >¿Eres nuevo? Regístrate</a
          >
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