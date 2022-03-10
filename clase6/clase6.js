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
        await fs.promises.readFile('ProductList.txt', 'utf-8');
        console.log(productList);
    }
    catch (err){
        console.log("no se pudo leer el archivo" + err);
    }
}
const borrar = async () => {
    try{
        await fs.promises.unlink('ProductList.txt');
        console.log('Archivo borrado');
    }
    catch (err){
        console.log("no se pudo borrar el archivo" + err);
    }
}

let Product1 = new Product('Producto 1', 100, 'imagen1');

guardar(Product1)
leer()

// borrar()
