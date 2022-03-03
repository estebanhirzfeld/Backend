// let TextReceiver = (text,processor) => {    
// }

// let TextDivider = () => {}

// let TextShow = (seconds = 1000) => {}

// let ProccessFinished = () => {
//     console.log("Proccess Complete");
// }


const mostrarLetras = (palabra,cb) =>{
    let i = 0;
    const recorrerPalabra = ()=>{
        if(i<palabra.length){
            console.table(palabra[i]);
            i++;
        }else{
            clearInterval(timer);
            cb();
        }
    }
    const timer = setInterval(recorrerPalabra,1000);
}

const funcionFinalizado = () => console.log("FINALIZADO EL PROCESO");

setTimeout(()=>{
    mostrarLetras('HEMOS',funcionFinalizado)
},0);
setTimeout(()=>{
    mostrarLetras('FINALIZADO',funcionFinalizado)
},250);
setTimeout(()=>{
    mostrarLetras('POR HOY',funcionFinalizado)
},500);