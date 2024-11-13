// Ejemplo de cadena
exampleString = "Este es el taller de Objetos y cadenas JS!";

// Función para usar charCodeAt() en el índice específico
function useCharCodeAt() {
    index = 22; 
    charCode = exampleString.charCodeAt(index);
    document.getElementById("charCodeAtResultado").innerHTML = 
        `El código ASCII del carácter en el índice ${index} es: ${charCode}`;
}

// Función para usar at() en el índice específico
function useAt() {
    index = 12; 
    character = exampleString.at(index);
    document.getElementById("atResultado").innerHTML = 
        `El carácter en el índice ${index} es: ${character}`;
}
