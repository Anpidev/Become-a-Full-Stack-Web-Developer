var drumBtn = document.querySelectorAll(".drum");

var numberOfBtn = drumBtn.length;


for (let index = 0; index < numberOfBtn; index++) {
    drumBtn[index].addEventListener("click", function () {
        alert("Me has pulsado");
    })

}