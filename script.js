// script.js
// 🌿 Interactividad para la página del Panda Rojo

// 1️⃣ Mostrar un mensaje de bienvenida animado
window.addEventListener("load", () => {
  alert("🐾 ¡Bienvenido al Día Mundial del Panda Rojo! 🌏");
});

// 2️⃣ Cambiar color de fondo según el humor del usuario
function cambiarFondo() {
  const colores = [
    "rgb(245, 233, 218)",
    "rgb(255, 224, 189)",
    "rgb(255, 235, 205)",
    "rgb(255, 250, 240)"
  ];
  const color = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = color;
}
setInterval(cambiarFondo, 8000); // cambia cada 8 segundos

// 3️⃣ Datos curiosos aleatorios sobre pandas rojos
const curiosidades = [
  "El panda rojo puede rotar su tobillo para bajar de los árboles cabeza abajo.",
  "Pasa más del 90% de su tiempo en los árboles.",
  "Su dieta es 95% bambú, ¡aunque es carnívoro por naturaleza!",
  "Usa su cola peluda como manta para dormir calentito.",
  "Tiene un sexto dedo que actúa como pulgar para sostener el bambú."
];

function mostrarCuriosidad() {
  const dato = curiosidades[Math.floor(Math.random() * curiosidades.length)];
  alert("🐼 Dato curioso: " + dato);
}

// Cada cierto tiempo muestra un dato curioso
setInterval(mostrarCuriosidad, 20000); // cada 20 segundos

// 4️⃣ Efecto en imágenes: crecen suavemente al pasar el mouse
const imagenes = document.querySelectorAll("img");
imagenes.forEach(img => {
  img.style.transition = "transform 0.5s ease";
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.1)";
  });
  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });
});

// 5️⃣ Mostrar agradecimiento cuando el usuario hace clic en un enlace
const enlaces = document.querySelectorAll("a");
enlaces.forEach(link => {
  link.addEventListener("click", () => {
    alert("🌱 ¡Gracias por apoyar a los pandas rojos!");
  });
});
