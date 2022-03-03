//Texto de Wake me up - Avicii
let texto = "So wake me up when it's all over When I'm wiser and I'm older All this time I was finding myself, and I Didn't know I was lost";

// Recibe un texto y una funcion, la funcion se ejecuta en el setTimeout cuando el proceso finaliza 
// El texto se divide en un array de palabras y se recorre con un setInterval
let TextReceiver = (text, processor) => {
    textSplittedArray = TextDivider(text);
    let i = 0;
    const recorrerPalabra = () => {
        if (i < textSplittedArray.length) {
            console.log(textSplittedArray[i]);
            i++;
        } else {
            clearInterval(timer);
            processor();
        }
    }
    const timer = setInterval(recorrerPalabra, 1000);
}

// Divide un texto en un array de palabras
let TextDivider = (text) => {
    return text.split(" ");
}

// Ejecuta la funcion TextReceiver con el texto y la funcion ProccessFinished
let TextShow = (seconds,text) => {
    setTimeout(()=>{
        TextReceiver(text,ProccessFinished)
    },seconds);
}

// Funcion que se ejecuta cuando el proceso finaliza
let ProccessFinished = () => {
    console.log("Proccess Complete");
    console.log("Total Words: " + textSplittedArray.length);
}

TextShow(1000,texto);