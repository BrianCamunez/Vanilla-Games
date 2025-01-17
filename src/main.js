import { header } from "./components/header"
import { footer } from "./components/footer"
// Import all of Bootstrap's JS
import 'bootstrap'

// Import our custom CSS
import './scss/styles.scss'

async function cargarVista(){
  const componente = await import("./views/loginVista")
  const vista = componente.default
  document.querySelector("main").innerHTML = vista.template
  vista.script()
}

cargarVista()

document.querySelector("header").innerHTML = header.template
document.querySelector("footer").innerHTML = footer.template
