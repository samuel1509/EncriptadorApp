//variables globales para textareas
var mensaje = document.getElementById("mensaje");
var resultado = document.getElementById("resultado");

//varaibles globales de los botones
var btnEncriptar = document.getElementById("btnEncriptar");
var btnDesencriptar = document.getElementById("btnDesencriptar");
var btnCopiar = document.getElementById("btnCopiar");
/*
Las "llaves" de encriptación que utilizaremos son las siguientes:
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

var letras=['a','e','i','o','u'];
var llaves=['ai','enter','imes','ober','ufat'];


var llavesEncriptacion = {
  'a': 'ai',
  'e': 'enter',
  'i': 'imes',
  'o': 'ober',
  'u': 'ufat'
};
var llavesDesencriptacion = {
  'ai': 'a',
  'enter': 'e',
  'imes': 'i',
  'ober': 'o',
  'ufat': 'u'
};



//convertir texto a minusuculas y permitir solo letras y espacio
function convertirMinusculas() {
  // Obtener el texto ingresado en el <textarea>
  //solo minusculas y Elimina caracteres que no sean letras o espacio
  var texto = mensaje.value.toLowerCase();
  mensaje.value = texto.replace(/[^a-zA-Z ]/g, ''); 
}

//encripta el mensaje original y lo pega en el area resultado
//elimina mensaje original
function encriptar() {
  var texto=mensaje.value;
  resultado.value=texto.replace(/[aeiou]/g, function(match) {
    return llavesEncriptacion[match];
  });
  console.log(resultado.value);
  mensaje.value="";
};


//desencripta el mensaje encriptado y lo pega en el area resultado
//elimina mensaje original
function desencriptar() {
  var texto=mensaje.value;
  resultado.value=texto.replace(/ai|enter|imes|ober|ufat/g, function(match) {
    return llavesDesencriptacion[match];
  });
  console.log(resultado.value);
  mensaje.value="";
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