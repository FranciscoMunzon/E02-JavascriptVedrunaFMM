//1.Cambiar el color de un párrafo al hacer clic en un botón.

function cambiarColor() {
    const parrafo = document.getElementById("parrafoColor");
    parrafo.style.color = parrafo.style.color === "blue" ? "black" : "blue";
}

//2.Crear un párrafo nuevo dentro de un div.

function crearParrafo() {
    const div = document.getElementById("contenedorParrafos");
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Hola, soy nuevo párrafo";
    div.appendChild(nuevoParrafo);
}

//3.Eliminar el último elemento de una lista con un botón.

function eliminarUltimo() {
    const lista = document.getElementById("Lista");
    lista.removeChild(lista.lastElementChild);
}

//4.Cambiar el texto de un título (h1) cuando el ratón pase por encima.

function cambiarTexto() {
    const titulo = document.getElementById("tituloRaton");
    titulo.textContent = "¡Enhorabuena! Has ganado absolutamente nada";
}

function restaurarTexto() {
    const titulo = document.getElementById("tituloRaton");
    titulo.textContent = "Pasa el ratón por aquí";
}

//5.Ocultar y mostrar un div con un botón.

function toggleDiv() {
    const div = document.getElementById("divOculto");
    div.style.display = (div.style.display === "none") ? "block" : "none";
}