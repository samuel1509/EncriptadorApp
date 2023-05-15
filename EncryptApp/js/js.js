//encripta el mensaje original y lo pega en el area resultado
//elimina mensaje original
function encriptar(){
  var mensaje = document.getElementById("mensaje");
  var resultado=document.getElementById("resultado");
  resultado.value=mensaje.value;
  mensaje.value="";
};

//desencripta el mensaje encriptado y lo pega en el area resultado
//elimina mensaje original
function desencriptar(){
  var mensaje = document.getElementById("mensaje");
  var resultado=document.getElementById("resultado");
  resultado.value=mensaje.value;
  mensaje.value="";
};


// Copiar del mensaje resultado texto al portapapeles
function copiarAlPortapapeles() {
  var resultado=document.getElementById("resultado");

  navigator.clipboard.writeText(resultado.value)
    .then(function() {
      console.log("Texto copiado al portapapeles: " + resultado.value);
    })
    .catch(function(error) {
      console.error("Error al copiar el texto al portapapeles: ", error);
    });
}


//enlazar funcion encriptado al boton encriptar
var btnEncriptar=document.getElementById("btnEncriptar");
btnEncriptar.addEventListener("click", encriptar);

//enlazar funcion desencriptado al boton desencriptar
var btnEncriptar=document.getElementById("btnDesencriptar");
btnEncriptar.addEventListener("click", desencriptar);

//enlazar funcion copiar con el boton copiar
var btnEncriptar=document.getElementById("btnCopiar");
btnEncriptar.addEventListener("click", copiarAlPortapapeles);




//copia el resultado encriptado como nuevo mensaje en el campo mensaje
/*function copiar(){
  var mensaje = document.getElementById("mensaje");
  var resultado=document.getElementById("resultado");
  mensaje.value=resultado.value;
}*/