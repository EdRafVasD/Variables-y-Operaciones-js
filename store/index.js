// let totalApagar = 0;
// let TotalProducto = Number(prompt("¿Cuantos productos diferentes desean llevar?"))

// for(let index =1; index<= TotalProducto;index++){
//     const nombre = prompt("¿Que producto desea llevar?");
//     const cantidad = Number(prompt("¿Cuantas unidades?"));
//     const precio = Number(prompt("¿Cuanto sale cada unidad?"));
//     const subtotal = cantidad * precio;
//     totalApagar = totalApagar + subtotal;
//     console.log("Has llevado"+ cantidad + "unidades de"+ nombre + " que costaron: "+precio)
// }

// console.log(totalApagar);
const comprar = () => {
	let totalApagar = 0;
	const numProducts = Number(prompt("¿Cuántas productos desea llevar?"));
	for (let index = 1; index <= numProducts; index++) {
		const nombre = prompt("¿Qué producto desea llevar?");
		const cantidad = Number(prompt("¿Cuántas unidades?"));
		const precio = Number(prompt("¿Cuánto sale cada unidad?"));
		const subtotal = cantidad * precio;
		totalApagar = totalApagar + subtotal;
	}
	// console.log(totalApagar);
	return totalApagar;
};

const total1 = comprar()
console.log(total1);
const total2 = comprar()
console.log(total2);
const total3 = comprar()
console.log(total3);
const total = total1 + total2 + total3;
console.log(total);