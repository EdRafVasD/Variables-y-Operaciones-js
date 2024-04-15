const selector = document.getElementById("mensaje");
selector.innerHTML = "CONEXIÓN EXITOSA ENTRE HTML Y JS";

const nombre = prompt("¿cual es tu nombre?");

const mensaje = "Bienvenido " + nombre;

alert(mensaje);
console.log(mensaje);