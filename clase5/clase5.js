import http from "http";

let randomNumber;

randomNumber = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const server = http.createServer((req, res) => {
    res.setHeader('Content-type','text/html')          // Header para aceptar Img y tags html
    res.end(`
    Random Number (between 1 and 10): <b>${randomNumber(1,10)}</b> <hr/>
    Random price (between 0.00 and 999.99): <b>${randomNumber(0.00,999.99)}</b> <hr/>
    <img src="https://i.pinimg.com/474x/0c/18/d4/0c18d4728146722f70ed128dd2832f9c.jpg"> <hr/>
    Random Number (between 1 and 10): <b>${randomNumber(0.00,999.99)}</b> <hr/>

    <button onclick="window.location.reload()">Randomizer</button>
    `);

});
server.listen(8080, () => {
    console.log("Listening on port 8080")
})
