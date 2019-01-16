window.cipher = {
  // ... 
  
 encode: (desplazamiento, mensajeIngreso) => {
  let i=0
  let menCifrado = "";
   

   for (i=0; i<mensajeIngreso.length; i++){
     let mensAscii = mensajeIngreso.toUpperCase().charCodeAt(i);
     let formula = (mensAscii - 65 + parseInt(desplazamiento)) % 26 + 65;
     let resultado = String.fromCharCode(formula);
     menCifrado += resultado;

     
     
    }
    console.log(menCifrado)
   return menCifrado

 },
 
 decode: (desplazamientoCodificado, mensajeIngresoDecodificado) => {

  let menDesifrado= " ";

  for (let i=0; i<mensajeIngresoDecodificado.length; i++);
   let mensAsciiDeco = mensajeIngresoDecodificado.toUpperCase().charCodeAt();
   let formulaDeco = (mensAsciiDeco - 65 + parseInt(desplazamientoCodificado)) % 26 + 65;
   let resultadoDeco = String.fromCharCode(formulaDeco);
   menDesifrado += resultadoDeco;
   
   return menDesifrado
 }

};
