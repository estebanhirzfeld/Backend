class Usuario {
    constructor(nombre, apellido, libros, mascotas){
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
}
    getFullName = () => {
        console.log(`Nombre Completo: ${this.nombre} ${this.apellido}`);   //Console para verlo desde el VsCode
        return (`${this.nombre} ${this.apellido}`);                        //Return para verlo desde el HTML
    }
    getMascota = () => {
        console.log(`${this.nombre} tiene: ${this.mascotas.length} mascotas entre ellas: ${this.mascotas}`);  //Console para verlo desde el VsCode
        return (`${this.mascotas}`);                                                                          //Return para verlo desde el HTML
    }
    addMascota = (mascota) => {
        console.log(`Nueva mascota! `)  //Console para verlo desde el VsCode
        this.mascotas.push(mascota);    //Return para verlo desde el HTML
    }
    getBook = () => {
        const librosMap = this.libros.map(function (libro) {
            return libro.titulo;  //Console para verlo desde el VsCode
        })
        console.log(`Cant de Libros: ${this.libros.length}, entre ellos: ${librosMap} `);  //Console para verlo desde el VsCode
        return (`${librosMap}`);                                                           //Return para verlo desde el HTML
    }
    addBook = () => {
        console.log(`Nuevo libro! `);        //Console para verlo desde el VsCode
        this.libros.push({ titulo, autor })  //Return para verlo desde el HTML
    }
}

let user = new Usuario ("Usuario","Admin",[{titulo: "Harry Potter y la camara de los secretos", autor: "J. K. Rowling"},{titulo: "Harry Potter y el prisionero de Azkaban", autor: "J. K. Rowling"}], ["Gatos", "Perros"]);
user.getFullName();
user.getMascota();
user.getBook();
user.addMascota("Loro");
user.getMascota();
user.addBook(titulo = "Harry Potter y la piedra filosofal",autor = "J. K. Rowling Bunny");
user.getBook();