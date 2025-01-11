// Cambiar el color de "h1" a rojo cuando la página esté lista
$(document).ready(function () {
    $("h1").css("color", "red");
});
// Esto es importante si se coloca el CDN en el head y no al final del body

// Para seleccionar uno o varios selectores se utiliza $("selector") de la misma forma

/* ---MANIPULAR ESTILOS---
1. Es posible añadir estilos con .css, pero eso hace que el script sea más difícil de mantener.
   Es mejor usar CSS externo.
2. Añadir clases a un selector para darle estilos:
*/

// Añadir una clase (sin el punto ".")
$("h1").addClass("cursive-BlueViolet");

// Añadir dos clases separadas por un espacio
$("h1").addClass("cursive-BlueViolet padding-50");

// Eliminar una clase
$("h1").removeClass("cursive-BlueViolet");

// Verificar si un selector tiene una clase en concreto
if ($("h1").hasClass("padding-50")) {
    console.log("El h1 tiene la clase padding-50");
}

// ---MANIPULAR TEXTO---
// Cambiar solo el texto
$("h1").text("BYE");

// Cambiar el contenido HTML (similar a innerHTML)
// $("button").html("<strong>Pulsa aquí</strong>");

// ---MANIPULAR ATRIBUTOS---
// Obtener el valor de un atributo
console.log($("img").attr("src"));

// Establecer un nuevo valor para un atributo
$("img").attr("src", "./foto.png");

/* ---EVENT LISTENER--- */

// Cambiar el color del h1 al hacer clic en cualquier botón
$("button").click(function () {
    $("h1").css("color", "blue");
});

// Cambiar el texto del h1 con la tecla que pulsemos
$(document).keydown(function (event) {
    $("h1").text(event.key);
});

// Cambiar el color del h1 cuando pasamos el ratón por encima
$("h1").on("mouseover", function () {
    $("h1").css("color", "green");
});

/* ---AÑADIR NUEVOS ELEMENTOS--- */
// Agregar un nuevo botón antes del h1
$("h1").before("<button>New</button>");

// Agregar un nuevo botón después del h1
$("h1").after("<button>Another</button>");

// Agregar contenido dentro del h1, antes del texto existente
$("h1").prepend("¡Hola! ");

// Agregar contenido dentro del h1, después del texto existente
$("h1").append(" ¡Adiós!");

/* ---ANIMACIONES--- */
// Ocultar el h1 al hacer clic en un botón
// $("button").click(function () {
//     $("h1").hide();
// });

// Desaparecer con una transición más lenta
$("#fadeout").click(function () {
    $("h1").fadeOut();
});
//Usar animate para crear un regla  de css para transiciones
$("#animate").click(function () {
    $("h1").animate({
        opacity: 0.5
    });
});
//Solo se pueden crear reglas que sean manejadas con valores numericos, un ERROR seria COLOR.
