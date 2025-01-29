import { header } from "./components/header"
import { footer } from "./components/footer"
import { enrutador } from "./components/enrutador"
// Import all of Bootstrap's JS
import 'bootstrap'

// Import our custom CSS
import './scss/styles.scss'

enrutador.observadorRutas()
// Cargamos la página home
window.location = '#/home'

document.querySelector("header").innerHTML = header.template
header.script()
document.querySelector("footer").innerHTML = footer.template
