window.cipher = {
  // ... 

  encode: (desplazamiento, mensajeIngreso) => {
    let menCifrado = "";
    let i = 0;
    let textoAscii = "";
    
    for (i = 0; i < mensajeIngreso.length; i++) {
      textoAscii = mensajeIngreso.charCodeAt(i);
      //mayusculas
      if (textoAscii >= 65 && textoAscii <= 90 ){
        let textoCifrado = ( textoAscii - 65 + parseInt(desplazamiento)) % 26 + 65;
        let resultado = String.fromCharCode(textoCifrado);
        menCifrado += resultado;
        //minusculas
      } else if (textoAscii >= 97 && textoAscii <= 122){
        let textoCifrado = ( textoAscii - 97 + parseInt(desplazamiento)) % 26 + 97;
        let resultado = String.fromCharCode(textoCifrado);
        menCifrado += resultado;
        //signos
      }else{
        menCifrado += String.fromCharCode(textoAscii);
      }
    
    }
    //console.log(menCifrado)
    return menCifrado

  },

  decode: (desplazamientoCodificado, mensajeIngresoCodificado) => {
    let mensajeDecifrado = "";
    let i = 0;
    let textoAscii = "";

    for (i = 0; i < mensajeIngresoCodificado.length; i++) {
      textoAscii = mensajeIngresoCodificado.charCodeAt(i);
      //mayusculas
      if(textoAscii >= 65 && textoAscii <= 90){
        let textodeco = (textoAscii + 65 -parseInt(desplazamientoCodificado)) % 26 + 65;
        let resultadoDeco = String.fromCharCode(textodeco);
        mensajeDecifrado += resultadoDeco;
        //minusculas
      } else if (textoAscii >= 97 && textoAscii <= 122) {
        let textodeco = (textoAscii -122 -parseInt(desplazamientoCodificado)) % 26 + 122;
        let resultadoDeco = String.fromCharCode(textodeco);
        mensajeDecifrado += resultadoDeco;
        //carecteres especiales
      } else {
        mensajeDecifrado += String.fromCharCode(textoAscii);
      }

    } 
//console.log (mensajeDecifrado)
return mensajeDecifrado
    }
    
  }