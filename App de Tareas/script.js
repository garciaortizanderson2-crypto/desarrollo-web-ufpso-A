
const formulario = document.getElementById("formulario");
const inputTarea = document.getElementById("tarea");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");

let totalTareas = 0;


const actualizarContador = () => {
    contador.textContent = totalTareas;
};


const eliminarTarea = (elemento) => {
    lista.removeChild(elemento);
    totalTareas--;
    actualizarContador();
};


const agregarTarea = (texto) => {
    const li = document.createElement("li");
    li.innerHTML = `
        ${texto}
        <button class="eliminar">Eliminar</button>
    `;

    const botonEliminar = li.querySelector(".eliminar");

    botonEliminar.addEventListener("click", () => {
        eliminarTarea(li);
    });

    lista.appendChild(li);
    totalTareas++;
    actualizarContador();
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const texto = inputTarea.value.trim();

    if (texto === "") {
        alert("Por favor escribe una tarea válida");
        return;
    }

    agregarTarea(texto);

    inputTarea.value = "";
});