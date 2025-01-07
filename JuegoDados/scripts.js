// Función para generar un número aleatorio entre 1 y 6
function numeroAzar() {
  return Math.floor(Math.random() * 6) + 1;
}

// Función para procesar un dado y mostrar la cara correspondiente
function procesarDado(dado, resultado) {
  const caras = dado.querySelectorAll("li"); // Selecciona las caras del dado

  // Ocultar todas las caras antes de mostrar la correspondiente
  caras.forEach((li) => {
    li.style.display = "none"; // Ocultar todas las caras
  });

  // Mostrar la cara correspondiente
  caras[resultado - 1].style.display = "block";
}

// Función para mostrar el nombre del dado
function nombreDados(dado) {
  const nombreDado = dado.querySelector("p"); // Selecciona el nombre del dado dentro del contenedor
  if (nombreDado) {
    nombreDado.style.display = "block"; // Mostrar el nombre del dado
  }
}

// Función para lanzar los dados
function lanzarCaras() {
  const dado1 = document.getElementById("dado1");
  const dado2 = document.getElementById("dado2");
  const dado1Contenedor = dado1.closest(".dado"); // Obtener el contenedor del dado 1
  const dado2Contenedor = dado2.closest(".dado"); // Obtener el contenedor del dado 2
  const mensaje = document.getElementById("mensaje");

  // Generar los resultados aleatorios de ambos dados
  const resultadoDado1 = numeroAzar();
  const resultadoDado2 = numeroAzar();

  // Procesar ambos dados y mostrar la cara correspondiente
  procesarDado(dado1, resultadoDado1);
  procesarDado(dado2, resultadoDado2);

  // Mostrar el nombre de los dados
  nombreDados(dado1Contenedor);
  nombreDados(dado2Contenedor);

  // Mostrar el mensaje después de un breve retraso
  setTimeout(() => {
    let mensajeResultado = "";
    const empateImg = '<img src="./imagenes/empate.png" alt="empate"/>';
    const ganadorImg = '<img src="./imagenes/ganador.png" alt="ganador"/>';

    // Comparar los resultados de los dados
    if (resultadoDado1 > resultadoDado2) {
      mensajeResultado = "¡El dado 1 ganó!" + ganadorImg;
    } else if (resultadoDado1 < resultadoDado2) {
      mensajeResultado = "¡El dado 2 ganó!" + ganadorImg;
    } else {
      mensajeResultado = "¡Es un empate!" + empateImg;
    }

    // Mostrar el resultado en el mensaje
    mensaje.innerHTML = mensajeResultado;
  }, 500); // Espera 500ms para asegurarse de que se haya completado la visualización de las caras
}

// Asignar la función al botón de lanzamiento
document.querySelector("button").addEventListener("click", lanzarCaras);
