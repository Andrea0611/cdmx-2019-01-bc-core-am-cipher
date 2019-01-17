// onclick que guarda el mensaje y el offset del boton de codificación
document.getElementById("codificar").addEventListener("click", () => {
  let mensajeIngreso = document.getElementById("mensaje").value;
  let desplazamiento = document.getElementById("offset").value;
  window.cipher.encode(desplazamiento, mensajeIngreso);
  //console.log (window.cipher.encode (desplazamiento, mensajeIngreso))
  document.getElementById("reciboTexto").innerHTML = window.cipher.encode(desplazamiento, mensajeIngreso);

})


// onclick que guarda el mensaje y el offset del boton de decodificación
document.getElementById("decodificar").addEventListener("click", () => {
  let mensajeIngresoCodificado = document.getElementById("mensaje").value;
  let desplazamientoCodificado = document.getElementById("offset").value;
  window.cipher.decode(desplazamientoCodificado, mensajeIngresoCodificado);

  document.getElementById("reciboTexto").innerHTML = window.cipher.decode(desplazamientoCodificado, mensajeIngresoCodificado);
})
