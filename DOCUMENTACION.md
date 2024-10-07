# Documentación
## Escenario del proyecto

**Vanilla Games S.L.** es una empresa de desarrollo de **minijuegos para navegadores web**, creados con vanillaJS, es decir, desarrollados exclusivamente con **Javascript** como lenguaje de programación (sin frameworks)

En esta empresa trabajan 10 desarrolladores y, habitualmente, suelen tener a tres alumnos/as en prácticas, de los cuales, al menos uno, tendrá muchas posibilidades de formar parte del equipo de desarrollo al acabar su etapa de formación.

El método de trabajo que se utiliza en dicha empresa consiste en **proponer a cada uno de los miembros del equipo el desarrollo de un minijuego** que, al acabar, deberán compartir con el resto de sus compañeros. Estos, a su vez, deben comentar y valorar cada una de las propuestas. Finalmente, en la empresa hay un equipo responsable de seleccionar aquellas propuestas que muestran un mayor potencial, para ser desarrolladas de manera definitiva por todo el equipo de trabajo, con el fin de crear una aplicación para su posterior comercialización.

Hasta la fecha, para el proceso de publicación de proyectos, comentarios y valoración utilizaban algunas herramientas ofimáticas, tipo hoja de cálculo de google. Actualmente pretenden crear una aplicación web tipo intranet para llevar a cabo este propósito.

Como alumno en prácticas, tu trabajo consiste en crear una aplicación web que permitirá a los desarrolladores de Vanilla Games, publicar sus propuestas de minijuegos, de manera que el resto de compañeros podrá hacer comentarios y emitir una valoración de cada proyecto publicado en esta plataforma.

## Casos de uso para la versión 1.0 - Definición básica

**Registrar usuario:** Un usuario puede registrarse en la plataforma proporcionando su nombre, apellidos, email y contraseña.


**Recuperar contraseña:** Un usuario registrado puede solicitar la recuperación de su contraseña en caso de que la haya olvidado. Para ello, se le enviará un correo electrónico 
con las instrucciones para restablecer su contraseña.

**·Iniciar sesión:** Un usuario registrado puede iniciar sesión en la plataforma proporcionando su email y contraseña.

**·Cerrar sesión:** Un usuario puede cerrar su sesión en la plataforma en cualquier momento.

**·Editar perfil:** Un usuario registrado puede editar su perfil, actualizando su nombre, apellidos, email o contraseña.

**·Ver proyectos:** Un usuario registrado puede ver un listado de proyectos publicados por los desarrolladores.

**·Publicar proyecto:** Un usuario con el perfil de desarrollador puede publicar un proyecto proporcionando información como nombre, descripción, imagen representativa, enlaces a servidor de pruebas y repositorio de código, estado del proyecto, etc.

**·Editar proyecto:** Un usuario con el perfil de desarrollador puede editar un proyecto que haya publicado previamente, actualizando la información del proyecto.

**·Eliminar proyecto:** Un usuario con el perfil de desarrollador puede eliminar un proyecto que haya publicado previamente.

**·Ver/Editar usuarios:** Un adminsrador puede ver una tabla con todos los usuarios que hay registrados y editar la información, incluido el ROL de usuario.

**·Eliminar usuario:** Un administrador puede eliminar cualquier usuario registrado en la plataforma.


**Diagrma de casos de uso para la versión 1.0**

![Diagrama de casos de uso](https://carrebola.github.io/vanillaPill/assets/images/diagramaCasosUso_1-3fc60e64208490df3bd2eb0f595cedbc.png)

Este diagrama refleja de forma resumida qué acciones se pueden llevar a cabo en nuestro aplicación dependiendo del rol del usuario.


**Casos de uso específicos**
**1. Registrar usuario**

**Actores:** Usuario no registrado.

**Precondiciones:** El usuario no ha iniciado sesión.

**Flujo básico:**

    1. El usuario navega a la página de registro.
    2. El usuario introduce su nombre, apellidos, email y contraseña.
    3. El sistema valida que los campos estén completos y que el email no esté registrado previamente.
    4. El sistema crea un nuevo usuario con los datos proporcionados.
    5. El sistema muestra un mensaje de confirmación y redirige al usuario a la página de inicio.

**Flujos alternativos:**

    3a. El sistema detecta que el email ya está registrado: muestra un mensaje de error y no crea la cuenta.

**2. Recuperar contraseña**

**Actores: Usuario registrado.**

**Precondiciones:** El usuario no ha iniciado sesión.

**Flujo básico:**

    1. El usuario navega a la página de registro.
    2. El usuario selecciona la opción 'Recuperar contraseña'
    3. El sistema valida que el campo 'email' esté completo y que el email esté registrado previamente.
    4. El sistema muestra un mensaje de confirmación de envio del mail para la recuperación de contraseña y redirige al usuario a la página de inicio.

**Flujos alternativos:**

    3a. El sistema detecta que el email no está registrado: muestra un mensaje de error y no envia el mail.

**3. Iniciar sesión**

**Actores:** Usuario registrado.

**Precondiciones:** El usuario no ha iniciado sesión.

**Flujo básico:**

    1. El usuario navega a la página de inicio de sesión.
    2. El usuario introduce su email y contraseña.
    3. El sistema valida las credenciales y crea una sesión para el usuario.
    4. El sistema redirige al usuario a la página principal de la aplicación.

**Flujos alternativos:**

    3a. Las credenciales son incorrectas: el sistema muestra un mensaje de error y no crea la sesión.

**4. Cerrar sesión**

**Actores:** Usuario registrado.

**Precondiciones:** El usuario ha iniciado sesión.

**Flujo básico:**

    1. El usuario hace clic en el botón de "cerrar sesión".
    2. El sistema cierra la sesión del usuario.
    3. El sistema redirige al usuario a la página de inicio.

**5. Ver/Editar perfil**

**Actores:** Usuario registrado.

**Precondiciones:** El usuario ha iniciado sesión.

**Flujo básico:**

    1. El usuario navega a la página de edición de perfil.
    2. El usuario edita su nombre, apellidos y contraseña.
    3. El sistema valida los campos y actualiza el perfil del usuario.
    4. El sistema muestra un mensaje de confirmación.

**Flujos alternativos:**

    3a. El usuario intenta cambiar su email: el sistema valida que el email no esté registrado previamente.

**6. Ver proyectos**

**Actores:** Usuario registrado.

**Precondiciones:** El usuario ha iniciado sesión.

**Flujo básico:**

    1. El usuario navega a la página de proyectos.
    2. El sistema muestra una lista de proyectos publicados por desarrolladores.
    3. El usuario puede hacer clic en un proyecto para ver más detalles.
    4. El usuario puede mostrar/filtrar los proyectos a partir de un buscador

**7. Publicar proyecto**

**Actores:** Usuario registrado con perfil de desarrollador.

**Precondiciones:** El usuario ha iniciado sesión y su perfil es de desarrollador.

**Flujo básico:**

    1. El usuario navega a la página de publicación de proyecto.
    2. El usuario introduce el nombre, descripción, imagen representativa, enlaces de servidor y repositorio, estado y otra información relevante del proyecto.
    3. El sistema valida los campos y crea un nuevo proyecto.
    4. El sistema muestra un mensaje de confirmación y redirige al usuario a la página de proyectos.

**Flujos alternativos:**

    · 2a. El desarrollador decide no publicar el proyecto y selecciona la opción de cancelar.
    · El sistema descarta la información ingresada en el formulario.
    · El sistema muestra un mensaje de confirmación al desarrollador.

**8. Editar proyecto:**

**Actor principal:** Desarrollador

**Objetivo:** Editar la información de un proyecto previamente creado.

**Precondiciones:** El usuario debe haber iniciado sesión como desarrollador y tener al menos un proyecto previamente creado.

**Flujo principal:**

    1. El usuario selecciona la opción de "Editar proyecto".
    2. El sistema muestra la lista de proyectos previamente creados por el usuario.
    3. El usuario selecciona el proyecto que desea editar.
    4. El sistema muestra el formulario de edición del proyecto con la información actual del mismo.
    5. El usuario realiza los cambios necesarios en la información del proyecto y guarda los cambios.
    6. El sistema valida la información ingresada por el usuario y actualiza la información del proyecto en la base de datos.
    7. El sistema muestra una confirmación de que la información del proyecto ha sido actualizada correctamente.

**9. Eliminar proyecto:**

**Actor principal:** Desarrollador

**Objetivo:** Eliminar un proyecto previamente creado.

**Precondiciones:** El usuario debe haber iniciado sesión como desarrollador y tener al menos un proyecto previamente creado.

**Flujo principal:**

    1. El usuario selecciona la opción de "Eliminar proyecto" del proyecto que desea eliminar.
    2. El sistema muestra una confirmación de que el usuario está seguro de eliminar el proyecto seleccionado.
    3. El usuario confirma que desea eliminar el proyecto.
    4. El sistema elimina el proyecto de la base de datos y muestra una confirmación de que el proyecto ha sido eliminado correctamente.
    5. El sistema actualiza la información de proyectos.

**10. Ver/Editar usuario:**

**Actor principal:** Usuario administrador

**Objetivo:** Editar la información de los usuarios registrados.

**Precondiciones:** El usuario debe haber iniciado sesión en la aplicación y tener rol administrador.

**Flujo principal:**

    1. El usuario selecciona la opción de "Ver usuarios".
    2. El sistema muestra una tabla con 'inputs' con los datos de los usuarios.
    3. El administrador realiza los cambios necesarios en la información de los usuarios (incluido el rol y el estado) y guarda los cambios.
    4. El sistema valida la información ingresada por el usuario y actualiza la información del usuario en la base de datos.
    5. El sistema muestra una confirmación de que la información del perfil ha sido actualizada correctamente.

**11. Eliminar usuario:**

**Actor principal:** Usuario administrador

**Objetivo:** Eliminar usuario del sistema.

**Precondiciones:** El usuario debe haber iniciado sesión en la aplicación y debe tener rol administrador.

**Flujo principal:**

    1. El usuario selecciona la opción de "Ver usuarios".
    2. El sistema muestra una tabla con 'inputs' con los datos de los usuarios.
    3. El administrador hace clic sobre el icono de eliminar usuario de la fila correspondiente.
    4. El sistema informa de que se eliminarán todos sus registros.
    5. El sistema muestra una confirmación de que la información de que el usuario ha sido borrado correctamente.

**Errores**

Vamos a repasar los diferentes casos de uso analizando el flujo principal y añadiendo los flujos alternativos para contemplar los posibles errores del sistema. Puedes considerar los siguientes mensajes:

    **· Error de conexión:** El servidor no puede establecer una conexión con la base de datos, lo que impide que se puedan realizar operaciones en la plataforma. El sistema debería mostrar un mensaje de error indicando que no se pudo conectar con la base de datos y ofrecer la posibilidad de volver a intentarlo o contactar con el soporte técnico.

    **· Error de validación:** Cuando el sistema recibe información del usuario, debe validarla para asegurarse de que cumple con los requisitos de formato y contenido necesarios. Si la información no es válida, el sistema debería mostrar un mensaje de error indicando el problema específico, como "El campo de correo electrónico debe ser una dirección de correo válida".

    **· Error de autenticación:** Si un usuario intenta acceder a una página o realizar una acción que requiere autenticación, pero no ha iniciado sesión o sus credenciales son incorrectas, el sistema debería mostrar un mensaje de error indicando que la acción no está autorizada y ofrecer la posibilidad de iniciar sesión o recuperar la contraseña.

    **· Error de autorización:** Si un usuario intenta realizar una acción que no está autorizada para realizar debido a su rol, el sistema debería mostrar un mensaje de error indicando que la acción no está autorizada y ofrecer la posibilidad de volver a la página anterior.

    **· Error de servidor:** En caso de que se produzca un error interno en el servidor, como una excepción no controlada, el sistema debería mostrar un mensaje de error genérico indicando que se produjo un error y ofrecer la posibilidad de volver a intentarlo o contactar con el soporte técnico.

## Diseño de la interfaz. Bocetos

**Home y menús usuarios**

![Home y menús usuarios](https://carrebola.github.io/vanillaPill/assets/images/1684861508218-79dad6473fd7d571d5f73e96f893af7f.jpg)

Hemos didivido la interficie en 3 zonas, el encabezado (header), el cuerpo principal (main) y el pie de página (footer).

En el header vamos a alojar una barra superior fija con: el logo y nombre de la web (que hará las veces de link a la página principal), un menú central genérico (para acceder a páginas públicas), un menú central específico (que será diferente en función del rol de usuario logueado), y un icono (avatar) que permitirá ver la imagen del usuario logueado y que hará de botón para desplegar otro menú, el menú de usuario (que tendrá diferentes items dependiendo de si la sesió está abierta o no y del tipo de rol que tenga el usuario logueado).

El cuerpo (main) albergará el contenido de las páginas. Será la sección que vaya cambiando dependiendo de la página que carguemos. En la página home simplemente aparece una imagen de fondo y el nombre de la web.

El header será meramente informativo.

**Regitro de un usuario**

![Regitro de un usuario](https://carrebola.github.io/vanillaPill/assets/images/1684861508212-88f1ed0a8c53df9f791872b3b03519d8.jpg)

**Iniciar sesión**

![Iniciar sesión](https://carrebola.github.io/vanillaPill/assets/images/1684861508205-edba4a097ae58ec58f1bb07dc4b7e5e1.jpg)

**Editar mi perfil**

![Editar mi perfil](https://carrebola.github.io/vanillaPill/assets/images/1684861508198-5b5eff368d5421682a834f3ed67af5bd.jpg)

Editar perfil será una ventana modal, es decir, se mostrará la ventana y el fondo se volverá oscuro.

Esta ventana de edición permitirá, además de modificar los datos del usuario, añadir una imagen de avatar. Por el momento, en esta primera versión, podremos añadir el link de una imagen que esté alojada en un servidor. En la siguiente versión (versión 1.1) actualizaremos esta ventana para que puedan subirse archivos (imágenes) al servidor.

**Listado de todos los proyectos**

![Listado de todos los proyectos](https://carrebola.github.io/vanillaPill/assets/images/1684861508192-6b771260fe99faccc760b23f71f02406.jpg)

En esta página podemos ver, en la pestaña izquierda, todos los proyectos en forma de tabla. La pestaña derecha mostrará solo los proyectos que ha subido el usuario que ha iniciado la sesión.

Al hacer clic en cualquier parte de la fila se accede al detalle del proyecto.

También tenemos un buscador que permite buscar proyectos por palabras clave en el nombre o descripción.

Las celdas de encabezado de las tablas incluyen un icono (flecha hacia arriba o hacia abajo) que permitirá ordenar la tabla por la columna en concreto.

**Listado de Mis proyectos**

![Listado de Mis proyectos](https://carrebola.github.io/vanillaPill/assets/images/1684861508186-f38d99164909a0783d2040ce646e928a.jpg)

En esta pestaña podemos ver los trabajos pertenecientes al usuario logueado. En cada fila aparece, además, un icono para editar y borrar el proyecto correspondiente. Por otro lado tenemos la opción de subir un nuevo proyecto.

**Detalle de un proyecto**

![Detalle de un proyecto](https://carrebola.github.io/vanillaPill/assets/images/1684861508178-ed1f5e41681a1dcee1edac19f807c239.jpg)

Si el usuario que está viendo la información de un proyecto en concreto es el autor de dicho proyecto, aparecerá un icono para la edición del mismo.

**Nuevo proyecto / Editar un proyecto**

![Nuevo proyecto / Editar un proyecto](https://carrebola.github.io/vanillaPill/assets/images/1684861508170-9db2cd42ef7a339d517e3d0b38d4ae45.jpg)

Esta vista sirve tanto para crear un nuevo proyecto como para editarlo.

Si el proyecto es nuevo, el botón mostrará el texto ENVIAR, pero si estamos editándolo aparecerá el texto ACTUALIZAR. Al crear o actualizar el proyecto, la web nos reenvía a la vista 'Detalle de proyecto'.

**Panel administración de proyectos**

![Panel administración de proyectos](https://carrebola.github.io/vanillaPill/assets/images/1684861508161-c9cfd413730d67ea74b43e48fedea5ec.jpg)

Si tienes el rol 'administrador' aparecerá el item 'Panel administración' en el menú superior específico. Este item nos permite cargar la vista 'Panel administración de proyectos'. Desde esta vista también podemos acceder al 'Panel administración de usuarios'.

Esta vista permite editar o borrar cualquier proyecto haciendo click en los iconos correspondientes. La opción editar nos llevará a la vista 'Editar proyecto'

**Panel administración de usuarios**

![Panel administración de usuarios](https://carrebola.github.io/vanillaPill/assets/images/1684861508152-04e98cfb1faeecf2a53ea921bdd63ebe.jpg)

Esta vista permite editar los datos de los usuarios. Por supuesto es solo accesible para los administradores.

En esta vista, el método para editar la información es diferentes. Aquí los datos aparecen sobre 'inputs', de manera que al hacer clic sobre ellos, aparecerá el cursor de edición. Se pueden modificar todos los datos (en especial el 'estado' y el 'rol' del usuario) excepto el email.

## Test de usuarios inicial

**Primer Test de Usabilidad**

Para este primer test hemos preparado las siguientes acciones:

Suponiendo que eres un usuario no registrado:

    Accede a la información general 'A cerca de' de esta web.
    Regístrate.
    Logueate.
    Modifica tu perfil añadiendo una imagen de avatar.
    Busca un proyecto llamado 'Tetris'.
    Accede al detalle de este proyecto.
    Cierra sesión.

Suponiendo que eres un usuario con rol 'Desarrollador':

    Crea un proyecto nuevo.
    Accede a la lista de tus proyectos.
    Muestra el detalle de tu nuevo proyecto.
    Edita tu proyecto cambiando la descripción.
    Borra tu proyecto.

Suponiendo que eres un usuario con rol 'Administrador':

    Muestra la lista de proyectos.
    Borra un proyecto.
    Modifica el nombre de un proyecto.
    Muestra la listra de todos los usuarios registrados.
    Canvia el rol de uno de ellos.
    Modifica la imagen de su avatar.

**Conclusiones y modificaciones**

De este primer test de usuario se desprenden las siguientes conclusiones:

    La vista de proyectos en forma de tabla no es muy atractiva.
    El usuario ha tenido dificultades a la hora de intentar modificar la imagen avatar de un usuario.

Para mejorar estos pequeños problemas de usabilidad vamos a tomar las siguientes acciones:

    En la vista de proyectos vamos crear un par de botones para poder alternar entre ver los proyectos en forma de tabla o en forma de tarjetas.
        En la vista de administración de usuarios, añadir un pequeño icono (un lápiz) sobre la imagen del avatar del usuario para que se intuya que, al hacer clic sobre la imagen, se accede a la ventana de modificación de perfil.

Estos serían los bocetos actualizados:

**Vista de proyectos**

# HACER Y PONER IMAGEN

**Vista del Panel de administraición de usuarios.**

# HACER Y PONER IMAGEN

Ahora que tenemos los bocetos creados y testeados, es el momento de pasar al siguiente nivel: El diseño de los wireframes.