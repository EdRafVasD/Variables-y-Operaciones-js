let totalApagar = 0;
const nombre = prompt("¿Qué producto desea llevar?");
const cantidad = Number(prompt("¿Cuántas unidades?"));
const precio = Number(prompt("¿Cuánto sale cada unidad?"));
for (let index = 1; index <= cantidad; index++) {
  const subtotal = precio;
  totalApagar = totalApagar + subtotal;
}
console.log(`Usted debe pagar por la cantidad de ${cantidad} ${nombre} un total de ${totalAPagar}`);