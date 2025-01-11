// Array de colores de los botones
var buttonColours = ["red", "blue", "green", "yellow"];

// Array para almacenar el patrón generado por el juego
var gamePattern = [];

// Array para guardar el patrón clicado por el usuario
var userClickedPattern = [];

// Variable para saber si el juego ha comenzado o no
var started = false;

// Variable para llevar el nivel del juego
var level = 0;

// Función para iniciar el juego
function startGame() {
    // Cambiar el título a "Level 0" cuando el juego comience
    $("#level-title").text("Level " + level);
    // Llamar a la función para generar la secuencia
    nextSequence();
    // Marcar que el juego ha comenzado
    started = true;
}

// Detectar la tecla presionada para iniciar el juego
$(document).keypress(function () {
    if (!started) {
        startGame();
    }
});

// Detectar el toque en la pantalla para iniciar el juego en dispositivos móviles
$(document).on("touchstart", function (event) {
    if (!started) {
        event.preventDefault(); // Prevenir el comportamiento por defecto
        startGame();
    }
});

// Detectar el clic o toque en los botones
$(".btn").on("click touchstart", function (event) {
    // Prevenir el comportamiento por defecto para evitar la duplicación del evento
    event.preventDefault();

    // Verificar si el juego ha comenzado
    if (!started) {
        return; // Si el juego no ha comenzado, no hacer nada
    }

    // Obtener el color del botón tocado o clicado
    var userChosenColour = $(this).attr("id");

    // Agregar el color tocado al patrón del usuario
    userClickedPattern.push(userChosenColour);

    // Reproducir el sonido asociado con el color
    playSound(userChosenColour);

    // Animar el botón tocado
    animatePress(userChosenColour);

    // Verificar si la respuesta del usuario es correcta
    checkAnswer(userClickedPattern.length - 1);
});

// Función para verificar la respuesta del usuario
function checkAnswer(currentLevel) {
    // Si el último color clicado coincide con el patrón del juego
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        // Si el patrón del usuario es igual al del juego (completó la secuencia)
        if (userClickedPattern.length === gamePattern.length) {
            // Llamar a la función para la siguiente secuencia después de un retraso
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        // Si el usuario cometió un error
        playSound("wrong");  // Reproducir el sonido de error
        $("body").addClass("game-over");  // Agregar clase para la animación de error
        $("#level-title").text("Game Over, pulsa el teclado o pantalla para volver a comenzar");  // Mensaje de fin de juego

        // Eliminar la clase de error después de un tiempo
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        // Reiniciar el juego
        startOver();
    }
}

// Función para generar la siguiente secuencia
function nextSequence() {
    // Limpiar el patrón del usuario
    userClickedPattern = [];

    // Incrementar el nivel del juego
    level++;
    // Actualizar el título con el nivel actual
    $("#level-title").text("Level " + level);

    // Generar un número aleatorio para seleccionar un color
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];

    // Agregar el color aleatorio al patrón del juego
    gamePattern.push(randomChosenColour);

    // Crear el efecto visual del botón (parpadeo)
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    // Reproducir el sonido asociado al color
    playSound(randomChosenColour);
}

// Función para reproducir el sonido del color
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// Función para animar el botón tocado o clicado
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

// Función para reiniciar el juego en caso de error
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
