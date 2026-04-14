const BOTON_ANHADIR = document.querySelector("#botonAñadir");
const CAMPOTEXTO = document.querySelector("#texto");
const LISTA = document.querySelector("#lista");
const STATUS = document.querySelector('#STATUS');
const ERROR = document.querySelector('#error');
console.log(BOTON_ANHADIR);
BOTON_ANHADIR.addEventListener('click', insertar);

function insertar(){
    console.log("Boton capturado");
    console.log(CAMPOTEXTO.value);
    const TEXTO = CAMPOTEXTO.value.trim();
    if (TEXTO.length() != 0){
        const LI = document.createElement("li");
        LI.textContent = TEXTO;
        LISTA.append(LI);
        CAMPOTEXTO.value="";
    }
}
BOTON_ANHADIR.preventDefault();