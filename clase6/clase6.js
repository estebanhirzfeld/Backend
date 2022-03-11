import fs from 'fs';

let productList = [];

class Product {
    constructor(title, price, imageUrl) {
        this.title = title;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}

const guardar = async (product) => {
    try{
        if(fs.existsSync('ProductList.txt')){
            productList = JSON.parse(await fs.promises.readFile('ProductList.txt', 'utf-8'));
            product.id = productList.length + 1;
            productList.push(product);
            await fs.promises.writeFile('ProductList.txt', JSON.stringify(productList));
            console.log('Se guardo el archivo');
        } else {
            await fs.promises.writeFile('ProductList.txt', '[]');
            console.log('No se encontro el archivo y se creo uno nuevo vacio');
        }
    }
    catch (err){
        console.log("no se pudo escribir el archivo" + err);
    }
}
const leer = async () => {
    try{
        if(fs.existsSync('ProductList.txt')){
            await fs.promises.readFile('ProductList.txt', 'utf-8');
            console.log(productList);
        } else {
            console.log("Error al leer, no se encontro el archivo")
        }
    }
    catch (err){
        console.log("no se pudo leer el archivo" + err);
    }
}
const borrar = async () => {
    try{
        if(fs.existsSync('ProductList.txt')){
            await fs.promises.unlink('ProductList.txt');
            console.log('Archivo borrado');
        } else {
            console.log('Error al borrar, no se encontro el archivo');
        }
    }
    catch (err){
        console.log("no se pudo borrar el archivo" + err);
    }
}

let Product1 = new Product('Lapiz', 100.00, 'https://cdn3.iconfinder.com/data/icons/education-209/64/pencil-pen-stationery-school-256.png');

guardar(Product1)
// leer()

// borrar()
