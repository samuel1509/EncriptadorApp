//variables globales para textareas
var mensaje = document.getElementById("mensaje");
var resultado = document.getElementById("resultado");

//varaibles glrobales de los botones
var btnEncriptar = document.getElementById("btnEncriptar");
var btnDesencriptar = document.getElementById("btnDesencriptar");
var btnCopiar = document.getElementById("btnCopiar");

//convertir texto a minusuculas
function convertirMinusculas() {
  mensaje.value = mensaje.value.toLowerCase();
}

//encripta el mensaje original y lo pega en el area resultado
//elimina mensaje original
function encriptar() {
  resultado.value = mensaje.value;
  mensaje.value = "";
};

//desencripta el mensaje encriptado y lo pega en el area resultado
//elimina mensaje original
function desencriptar() {
  resultado.value = mensaje.value;
  mensaje.value = "";
};

// Copiar del mensaje resultado texto al portapapeles
function copiarAlPortapapeles() {
  navigator.clipboard.writeText(resultado.value)
    .then(function () {
      console.log("Texto copiado al portapapeles: " + resultado.value);
    })
    .catch(function (error) {
      console.error("Error al copiar el texto al portapapeles: ", error);
    });
}

//enlazar funcion convertir misuculas a textarea mensaje
mensaje.addEventListener("input",convertirMinusculas);

//enlazar funcion encriptado al boton encriptar
btnEncriptar.addEventListener("click", encriptar);

//enlazar funcion desencriptado al boton desencriptar
btnDesencriptar.addEventListener("click", desencriptar);

//enlazar funcion copiar con el boton copiar
btnCopiar.addEventListener("click", copiarAlPortapapeles);




//copia el resultado encriptado como nuevo mensaje en el campo mensaje
/*function copiar(){
  var mensaje = document.getElementById("mensaje");
  var resultado=document.getElementById("resultado");
  mensaje.value=resultado.value;
}*/

/*
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con letras minúsculas

No deben ser utilizados letras con acentos ni caracteres especiales

Debe ser posible convertir una palabra para la versión encriptada también 
devolver una palabra encriptada para su versión original.

Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

La página debe tener campos parainserción del texto que será encriptado o 
desencriptado, y el usuario debe poder escoger entre as dos opciones.

El resultado debe ser mostrado en la pantalla.

Extras:

Un botón que copie el texto encriptado/desencriptado para la sección de 
transferencia, o sea que tenga la misma funcionalidad del ctrl+C 
o de la opción "copiar" del menú de las aplicaciones.
*/