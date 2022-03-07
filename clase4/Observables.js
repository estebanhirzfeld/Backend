const { fromEvent, map } = rxjs;

let isSuscribed = true;

//Definiendo los elementos del DOM:
const inputField = document.getElementById("inputField");
const finalText = document.getElementsByTagName("span")[0];

//Definiendo el Elemento del Observable:
const observable = fromEvent(inputField, "keyup");

const unSubscribe = () => {
    observer.unsubscribe();
    isSuscribed = false
}

//espejando el texto mediante un pipe:
const mirrorInput = observable.pipe(
    map(event => {
        if (event.target.value === "error") {
            observer.error("Se desuscribió al observer por escribir ´error´");
        }
        if (event.target.value === "completed") {
            observer.complete();
        }
        let mirrorText = event.target.value.split('').reverse().join('');
        return mirrorText
    })
)

let observer = mirrorInput.subscribe({
    next: (value) => {
        finalText.innerHTML = value;
    },
    error: (error) => {
        disableInput();
        console.error(error);
    },
    complete: () => {
        disableInput();
        console.info("Operacion Completada, se desuscribió al observer.");
    }
})


//Deshabilitando y limpia el input:
const disableInput = () => {
    inputField.value = "";
    inputField.setAttribute("disabled", true)
    finalText.innerHTML = "";
    unSubscribe();
    isSuscribed = false;
}

const timerCountDown = (enable) => {
    if(enable) {
        var timeleft = 30;
        var downloadTimer = setInterval(function () {
            if (timeleft <= 0) {
                clearInterval(downloadTimer);
                document.getElementById("countdown").innerHTML = "Finished";
            } else {
                document.getElementById("countdown").innerHTML = `Tiene ${timeleft} segundos para completar la prueba`;
            }
            timeleft -= 1;
        }, 1000);
    } else {
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Finished";
        isSuscribed = false;
    }
}

timerCountDown(isSuscribed);

setTimeout(() => {
    if (isSuscribed) {
        disableInput();
        console.log("Se desuscribió al observable luego de pasar 30 segundos.")
    } else {
        console.log("Pasó el tiempo pero ya se había desuscrito")
    }
}, 31000);

