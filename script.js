//e = enter
//i = imes
// a= ai
// o = ober
// u = ufat
function mostrarResultado() {
  document.getElementById("not-found-section").className = "hidden";
  document.getElementById("found-section").className = "shown";
}

function encriptar() {
  mostrarResultado();
  var texto = document.getElementById("letras").value.toLowerCase();
  var cifrado = texto.replace(/e/gim, "enter");
  var cifrado = cifrado.replace(/o/gim, "ober");
  var cifrado = cifrado.replace(/i/gim, "imes");
  var cifrado = cifrado.replace(/a/gim, "ai");
  var cifrado = cifrado.replace(/u/gim, "ufat");

  document.getElementById("textoencriptado").innerHTML = cifrado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
  var texto = document.getElementById("letras").value.toLowerCase();
  var cifrado = texto.replace(/enter/gim, "e");
  var cifrado = cifrado.replace(/ober/gim, "o");
  var cifrado = cifrado.replace(/imes/gim, "i");
  var cifrado = cifrado.replace(/ai/gim, "a");
  var cifrado = cifrado.replace(/ufat/gim, "u");

  document.getElementById("textoencriptado").innerHTML = cifrado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}

function copiar() {
  var contenido = document.querySelector("#textoencriptado");
  contenido.select();
  document.execCommand("copy");
}
