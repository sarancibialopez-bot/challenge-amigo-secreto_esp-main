// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// app.js

// app.js

// Array para almacenar los nombres
let amigos = [];

// Agregar un amigo
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = (input.value || "").trim();

  if (!nombre) {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Validar duplicados
  if (amigos.includes(nombre)) {
    alert("Ese nombre ya está en la lista.");
    input.value = "";
    input.focus();
    return;
  }

  amigos.push(nombre);
  input.value = "";
  input.focus();
  actualizarLista();
}

// Recorrer array y pintar lista
function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo, i) => {
    const li = document.createElement("li");
    li.textContent = amigo;

    // Botón para eliminar amigo
    const btn = document.createElement("button");
    btn.textContent = "X";
    btn.classList.add("btn-remove");
    btn.onclick = () => eliminarAmigo(i);

    li.appendChild(btn);
    lista.appendChild(li);
  });
}

// Eliminar un amigo individual
function eliminarAmigo(index) {
  amigos.splice(index, 1);
  actualizarLista();
  limpiarResultado();
}

// Limpiar lista completa
function limpiarLista() {
  amigos = [];
  actualizarLista();
  limpiarResultado();
}

// Sorteo aleatorio
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Agrega al menos un nombre antes de sortear.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[indice];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 Amigo secreto: <strong>${ganador}</strong></li>`;
}

// Limpiar resultado del sorteo
function limpiarResultado() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
}

// UX: enter en input = añadir
document.getElementById("amigo")?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") agregarAmigo();
});

