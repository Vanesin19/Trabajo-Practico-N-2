//Mensaje en el formulario
document.getElementById("formulario").addEventListener("submit", function (evento) {
    evento.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;

    if (nombre !== '' && email !== '') {
        document.getElementById("mensaje").innerText = "Mensaje enviado exitosamente";
    } else {
        document.getElementById("mensaje").innerText = "Por favor ingresa nombre y correo electrónico";
        return;
    }
});

//Cambio de imagen

var imagen = document.getElementById("imagen");
var imagenOriginal = imagen.src;

function cambiarImagen() {
    imagen.src = "images/playa.png";
}
function restaurarImagen() {
    imagen.src = "images/montaña.png";
}
imagen.addEventListener("mouseover", cambiarImagen);

imagen.addEventListener("mouseout", restaurarImagen);

//Botón Saber Más

document.addEventListener("DOMContentLoaded", function () {
    var boton = document.getElementById("boton");
    var textoAdicional = document.getElementById("textoAdicional");

    boton.addEventListener("click", function () {
        if (textoAdicional.classList.contains("ocultar")) {
            textoAdicional.classList.remove("ocultar");
            boton.textContent = "Mostrar menos";
        } else {
            textoAdicional.classList.add("ocultar");
            boton.textContent = "Ver más";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var boton1 = document.getElementById("boton1");
    var textoAdicional1 = document.getElementById("textoAdicional1");

    boton1.addEventListener("click", function () {
        if (textoAdicional1.classList.contains("ocultar")) {
            textoAdicional1.classList.remove("ocultar");
            boton1.textContent = "Mostrar menos";
        } else {
            textoAdicional1.classList.add("ocultar");
            boton1.textContent = "Ver más";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var boton2 = document.getElementById("boton2");
    var textoAdicional2 = document.getElementById("textoAdicional2");

    boton2.addEventListener("click", function () {
        if (textoAdicional2.classList.contains("ocultar")) {
            textoAdicional2.classList.remove("ocultar");
            boton2.textContent = "Mostrar menos";
        } else {
            textoAdicional2.classList.add("ocultar");
            boton2.textContent = "Ver más";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var boton3 = document.getElementById("boton3");
    var textoAdicional3 = document.getElementById("textoAdicional3");

    boton3.addEventListener("click", function () {
        if (textoAdicional3.classList.contains("ocultar")) {
            textoAdicional3.classList.remove("ocultar");
            boton3.textContent = "Mostrar menos";
        } else {
            textoAdicional3.classList.add("ocultar");
            boton3.textContent = "Ver más";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var boton4 = document.getElementById("boton4");
    var textoAdicional4 = document.getElementById("textoAdicional4");

    boton4.addEventListener("click", function () {
        if (textoAdicional4.classList.contains("ocultar")) {
            textoAdicional4.classList.remove("ocultar");
            boton4.textContent = "Mostrar menos";
        } else {
            textoAdicional4.classList.add("ocultar");
            boton4.textContent = "Ver más";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var boton5 = document.getElementById("boton5");
    var textoAdicional5 = document.getElementById("textoAdicional5");

    boton5.addEventListener("click", function () {
        if (textoAdicional5.classList.contains("ocultar")) {
            textoAdicional5.classList.remove("ocultar");
            boton5.textContent = "Mostrar menos";
        } else {
            textoAdicional5.classList.add("ocultar");
            boton5.textContent = "Ver más";
        }
    });
});

//slider

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const antesButton = document.querySelector(".antes");
    const proximoButton = document.querySelector(".proximo");

    let currentIndex = 0;

    antesButton.addEventListener("click", function() {
        currentIndex = Math.max(currentIndex - 1, 0);
        moverSlider();
    });

    proximoButton.addEventListener("click", function() {
        currentIndex = Math.min(currentIndex + 1, slider.children.length - 1);
        moverSlider();
    });

    function moverSlider() {
        const slideWidth = slider.clientWidth;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
});