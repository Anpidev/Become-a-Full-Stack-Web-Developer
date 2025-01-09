var drumBtn = document.querySelectorAll(".drum");

var numberOfBtn = drumBtn.length;

// Añadir eventListener a cada botón
for (let index = 0; index < numberOfBtn; index++) {
    drumBtn[index].addEventListener("click", function () {
        var btnClick = this.innerHTML; // Captura el contenido del botón
        eventSound(btnClick); // Llama a la función con el carácter del botón
        btnAnimation(btnClick);
    });
}

// Añadir eventListener al teclado
document.addEventListener("keydown", function (event) {
    var eventKey = event.key; // Captura la tecla presionada
    eventSound(eventKey); // Llama a la función con la tecla
    btnAnimation(eventKey);
});

// Función para reproducir sonidos
function eventSound(event) {
    switch (event) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        default:
            console.log("Tecla o botón no reconocidos: " + event);
            break;
    }
}

//Función para añadir animación

function btnAnimation(key) {
    var btnOn = document.querySelector("." + key);
    btnOn.classList.add("pressed");
    setTimeout(() => {
        btnOn.classList.remove("pressed");
    }, 100);
}
