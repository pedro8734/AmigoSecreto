// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = []; // Lista de amigos agregados

// Expresión regular para validar solo letras (sin números ni caracteres especiales)
const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
// Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigoinput");
    let listaAmigos = document.getElementById("listaAmigos");
    let nombre = inputAmigo.value.trim();

    // Validar que el nombre no esté vacío y que no se repita y solo se permite datos string
    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }
    if (!soloLetras.test(nombre)) {
        alert("No se permiten números ni caracteres especiales.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    // Agregar el nombre a la lista
    amigos.push(nombre);
    inputAmigo.value = ""; 

    // Crear y mostrar el nuevo elemento en la lista
    let li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    let resultadoLista = document.getElementById("resultado");

    // Verificar que haya al menos 2 amigos en la lista
    if (amigos.length < 2) {
        alert("Debes agregar al menos dos amigos para hacer el sorteo.");
        return;
    }

    // Seleccionar un amigo aleatorio
    let amigoAleatorio = amigos[Math.floor(Math.random() * amigos.length)];


    // Mostrar el resultado
    resultadoLista.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${amigoAleatorio}</strong>! 🎊</li>`;
}



function condicionesIniciales() {

    document.getElementById("amigoinput").value = ""; // Limpiar el input
    document.getElementById("resultado").innerHTML = ""; // Ocultar el sorteo

}
