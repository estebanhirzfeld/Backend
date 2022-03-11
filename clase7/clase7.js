import express from "express";
import fs from 'fs';

let products = JSON.parse(fs.readFileSync('../clase6/ProductList.txt', 'utf-8'))

const randomNumber = (min,max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}
// Endpoint Home page
let randomItem = randomNumber(1, products.length + 1 );

let viewsCounter = [];

const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}, visit http://localhost:${PORT}`);
});


app.get('/', (req, res) => {
    res.send(
    `
    Welcome to the Home page!<hr>
    <a href="/items">Products</a> <hr>
    <a href="items/${randomItem}"><button><span>Random Item</span></button></a>

    `);
})

// Endpoint Item List
app.get('/items', (req, res) => {;
    res.send(`
    Products List: ${products.length} <hr>
    ${products.map(product =>
        `
        <a href="items/${product.id}">${product.title}<a/> <hr/>`).join('')}
        <a href="./">Go back</a>
        `
    );
})

// Endpoint Item Detail
products.map(product => {
    viewsCounter[product.id] = 0;
    app.get(`/items/${product.id}`, (req, res) => {
        res.send(`
        <h1>${product.title}</h1>
        <img src="${product.imageUrl}"/> <hr/>
        <strong><p>$${product.price}</p></strong> <hr/>
        <p>Views Counter: ${++viewsCounter[product.id]}</p>
        <a href="/items">Go back</a>, go <a href="/">Home</a> 
        `)
    })
})
