function titleFormat(text){
    const primeraletra = text.charAt(0).toUpperCase();
    const restodeltexto = text.slice(1).toLowerCase();
    const primerapalabra =(primeraletra+restodeltexto);
    return primerapalabra.length;
}
console.log(titleFormat("Welcome"));

console.log(titleFormat("hello world"));
console.log(titleFormat("HELLO world"));
console.log(titleFormat("HellO WOrLD"));