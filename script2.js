const TEXTO = document.querySelector("#texto");
const BOTON = document.querySelector("#boton");
const LISTA = document.querySelector("#ListaDeLaCompra");
const BORRAR = document.querySelector("#botonLimpiar");

const anhadir = evento => {
    evento.preventDefault();
    console.log("Boton pulsado correctamente");

    let tarea = TEXTO.value.trim();
    const li = document.createElement("li");
    li.textContent = tarea;
    LISTA.appendChild(li);
    TEXTO.value = "";
    console.log(tarea);

}

const tachar = evento => {
    evento.target.classList.toggle("tachado");
}

const borrar = evento => {
    evento.preventDefault();
    alert("¿Estás seguro de que quieres borrar las tareas finalizadas?");
    const BORRABLES = document.querySelectorAll(".tachado");
    BORRABLES.forEach(elementoBorrable => LISTA.removeChild(elementoBorrable));
}

LISTA.addEventListener('click', tachar);
BOTON.addEventListener('click', anhadir);
BORRAR.addEventListener('click', borrar);



