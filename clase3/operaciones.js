// // Modulo que contiene las funciones de operaciones
// const operacion = async (a, b, operacion) => {
//     return new Promise((resolve) => {
//         resolve(operacion(a, b));
//     });
// }

// const suma = (a, b) => a + b;
// const resta = (a, b) => a - b;
// const multiplicacion = (a, b) => a * b;
// const division = (a, b) => a / b;

// //Modulo que llama a las funciones de operacion
// const operaciones = async () => {
//     const resolveSuma = await operacion(5, 5, suma);
//     const resolveResta = await operacion(5, 5, resta);
//     const resolveMult = await operacion(5, 5, multiplicacion);
//     const resolveDiv = await operacion(5, 5, division)

//     console.log(resolveSuma);
//     console.log(resolveResta);
//     console.log(resolveMult);
//     console.log(resolveDiv);

// }

// operaciones();