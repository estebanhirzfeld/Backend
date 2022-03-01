// Modulo que contiene las funciones de operaciones
export const operacion = async (a:number, b:number, operacion:any) => {
    return new Promise((resolve) => {
        resolve(operacion(a, b, operacion));
    });
}

export const suma = (a:number, b:number) => a + b;
export const resta = (a:number, b:number) => a - b;
export const multiplicacion = (a:number, b:number) => a * b;
export const division = (a:number, b:number) => a / b;
