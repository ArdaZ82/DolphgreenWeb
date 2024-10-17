// darkmode.js

const toggleButton = document.getElementById('darkModeToggle'); // esta variable contiene al elemento con el id darkModeToggle 
const body = document.body; // esta variable contiene al body del documento 

toggleButton.addEventListener('click', function () { // le doy un evento al boton, que al clickear llame la funcion siguiente
    // Alternar la clase 'dark-mode' en el cuerpo del documento
    body.classList.toggle('dark-mode'); //que le agregue al body una clase llamada dark-mode
    

    // Cambiar el texto del botón dependiendo del estado
    if (body.classList.contains('dark-mode')) {  // analizar si el elementod body tiene la clase dark-mode
        toggleButton.textContent = 'Desactivar Dark Mode'; // en el caso que si lo tenga, van a darle un texto de DESACTIVAR DARK MODE al boton creado
    } else {
        toggleButton.textContent = 'Activar Dark Mode'; // en el caso que no lo tenga, el texto del boton sera "ACTIVAR DARK MODE"
    }
});
