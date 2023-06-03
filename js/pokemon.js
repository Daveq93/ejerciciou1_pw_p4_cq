
var puntos = 0;
var intento = 0;


function init() {

    imgIni = document.getElementById("imagenInicial");

    var puntaje = document.getElementById("puntaje");
    var intentos = document.getElementById("intentos");

    var resultado = document.getElementById("respuesta");

    //botones
    var keldeo = document.getElementById("keldeo");
    var dril = document.getElementById("drilbur");
    var ninja = document.getElementById("ninja");
    var excadril = document.getElementById("excadril");

    var rest = document.getElementById("reiniciar");

    //Eventos
    excadril.onclick = function (e) {
        validar(excadril);
    };

    dril.onclick = function (e) {
        validar(dril);
    };

    ninja.onclick = function (e) {
        validar(ninja);
    };

    keldeo.onclick = function (e) {
        validar(keldeo);
    };

    rest.onclick = function (e) {
        reiniciar();
    };

    function validar(valor) {

        if (intento < 3) {
            console.log("puntaje: " + puntos);
            console.log("intento: " + intento)

            intentos.innerHTML = "Intentos: " + (intento += 1);
            if (intento == 1 && valor.value == excadril.value) {
                puntaje.innerHTML = "Puntaje: " + 5;
            } else if (intento == 2 && valor.value == excadril.value) {
                puntaje.innerHTML = "Puntaje: " + 3;
            } else if (intento == 3 && valor.value == excadril.value) {
                puntaje.innerHTML = "Puntaje: " + 1;
            } else if (intento == 3 && valor.value != excadril.value) {
                reiniciar();
            }

            if (valor.value != excadril.value) {
                resultado.textContent = "Pokemon incorrecto, intentalo nuevamente ";
            } else {
                resultado.textContent = "Felicitaciones, has seleccionado la opcion correcta";

                document.getElementById("imagenInicial").src = "../img/pcolor.jpg";
            }
        } else {

            reiniciar();
        }
    }

    function reiniciar() {
        resultado.textContent = "R: ";
        document.getElementById("imagenInicial").src = "../img/pnegro.jpg";
        puntos = 0;
        intento = 0;
        intentos.innerHTML = "Intentos: " + intento;
        puntaje.innerHTML = "Puntaje: " + puntos;
    }



}