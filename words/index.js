const frase = prompt("Ingrese una palabra o frase");
const cantidad = frase.length;
const mensajeCantidad = frase + " "+cantidad;
console.log(mensajeCantidad);
const fraseMinusculas = frase.toLowerCase();
const fraseMayusculas = frase.toUpperCase();
const minMay = fraseMinusculas + " "+fraseMayusculas;
console.log(minMay); 