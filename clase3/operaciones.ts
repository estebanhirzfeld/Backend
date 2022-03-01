
//Modulo que llama a las funciones de operacion
const operaciones = async () => {
    const operacion = await import('./operacion.js'); //importa el modulo operacion.js
    const suma = await import('./operacion.js');
    const resta = await import('./operacion.js');
    const multiplicacion = await import('./operacion.js');
    const division = await import('./operacion.js');

    const resolveSuma = await operacion.operacion(5, 5, suma);
    const resolveResta = await operacion.operacion(5, 5, resta);
    const resolveMult = await operacion.operacion(5, 5, multiplicacion);
    const resolveDiv = await operacion.operacion(5, 5, division)

    console.log(resolveSuma);
    console.log(resolveResta);
    console.log(resolveMult);
    console.log(resolveDiv);

}

operaciones();