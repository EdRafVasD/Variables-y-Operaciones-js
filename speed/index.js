// function calcularVelocidad() {
//     const distancia = 10
//     const tiempo = 2
//     const velocidad = distancia / tiempo;
//     console.log("La velocidad del móvil es " + velocidad);
//     }
    
//     calcularVelocidad();
//     calcularVelocidad();
//     calcularVelocidad();

//     function calcularVelocidad(distancia, tiempo) {
//         const distancia = 10
//         const tiempo = 2
//         const velocidad = distancia / tiempo;
//         console.log("La velocidad del móvil es " + velocidad);
//         }

//         calcularVelocidad(10,2);
// calcularVelocidad(100,5);
// calcularVelocidad(27,3);

const calcularVelocidad = (distancia, tiempo) => {
    const velocidad = distancia / tiempo;
    console.log("La velocidad del móvil es " + velocidad);
        return velocidad
    }

    const velocidad1 = calcularVelocidad(10,2);
console.log("La velocidad de Juana es " + velocidad1);
    const velocidad2 = calcularVelocidad(100,4);
console.log("La velocidad de James es " + velocidad2);
    const velocidad3 = calcularVelocidad(70,2);
console.log("La velocidad de Paolo es " + velocidad3);

    