window.cipher = {
  // ... 

  encode: (desplazamiento, mensajeIngreso) => {
    let i = 0
    let menCifrado = "";


    for (i = 0; i < mensajeIngreso.length; i++) {
      let mensAscii = mensajeIngreso.toUpperCase().charCodeAt(i);
      let formula = (mensAscii - 65 + parseInt(desplazamiento)) % 26 + 65;
      let resultado = String.fromCharCode(formula);
      menCifrado += resultado;



    }
    //console.log(menCifrado)
    return menCifrado

  },

  decode: (desplazamientoCodificado, mensajeIngresoCodificado) => {
    let i = 0
    let mensajeDecifrado = "";

    for (i = 0; i < mensajeIngresoCodificado.length; i++) {
      let mensAsciiDeco = mensajeIngresoCodificado.toUpperCase().charCodeAt(i);
      let formulaDeco = (mensAsciiDeco + 65 - parseInt(desplazamientoCodificado)) % 26 + 65;
      let resultadoDeco = String.fromCharCode(formulaDeco);
      mensajeDecifrado += resultadoDeco;
    }
    //console.log (mensajeDecifrado)
    return mensajeDecifrado
  }
}

