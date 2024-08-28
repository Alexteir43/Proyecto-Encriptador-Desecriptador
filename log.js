
function encriptado(texto) {
    // Convertir el texto a minúsculas y eliminar los acentos
    texto = texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
    // Realizar los reemplazos uno tras otro en el texto
    let textoEncriptado = texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  
    return textoEncriptado;
  }
  
  function desencriptado(texto) {
    // Realizar los reemplazos uno tras otro en el texto
    let textoDesencriptado = texto
      .replace(/ai/g, "a")
      .replace(/imes/g, "i")
      .replace(/ufat/g, "u")
      .replace(/ober/g, "o")
      .replace(/enter/g, "e");
  
    return textoDesencriptado;
  }
  
  function clickEncriptar() {
    let texto = document.getElementById("texto").value;
  
    // Validar si el texto contiene mayúsculas o acentos
    if (/[A-ZÁÉÍÓÚÜÑ]/g.test(texto)) {
      alert("Por favor, ingresa solo letras minúsculas sin acentos.");
      return; // Detener la ejecución de la función
    }
  
    let textoEncriptado = encriptado(texto);
    document.getElementById("resultado").value = textoEncriptado;
  }
  
  function clickDesencriptar() {
    let texto = document.getElementById("texto").value;
    let textoDesencriptado = desencriptado(texto);
    document.getElementById("resultado").value = textoDesencriptado;
  }

  // Lógica del botón de copiado de texto

const botonCopiar = document.querySelector(".copiar");

botonCopiar.addEventListener("click", () => {
  const resultado = document.getElementById("resultado").value; // Obtener el texto del resultado
  navigator.clipboard.writeText(resultado)
    .then(() => {
      // Mostrar un mensaje de confirmación (opcional)
      alert("¡Texto copiado al portapapeles!");
    })
    .catch(err => {
      console.error("Error al copiar al portapapeles: ", err);
    });
});