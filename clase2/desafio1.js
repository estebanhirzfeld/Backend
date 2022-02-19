// Back ////////////////////////////////////////////////////////////////////////////////////////////

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



// Front ////////////////////////////////////////////////////////////////////////////////////////////
let user;


function DataDraw() {
    $(".dataContainer").empty();
    $(".dataContainer").append(
        `
        <h4 class="col-12 my-4">Nombre Completo:</h4>
        <h4 class="col-12 text-secondary">${user.getFullName()}</h4>
        
        <h4 class="col-12 my-4">Libros:</h4>
        <h4 class="col-12 text-secondary">${user.getBook()}</h4>
        
        <h4 class="col-12 my-4">Mascotas:</h4>
        <h4 class="col-12 text-secondary">${user.getMascota()}</h4>
        
    `
    );
}


$("#submit__button").click(function () {
    user = new Usuario($("#nombreInput").val(), $("#apellidoInput").val(), [{ titulo: $("#tituloInput").val(), autor: $("#autorInput").val() }], [$("#mascotaInput").val()]);
    $("#autorInput").val("");
    $("#mascotaInput").val("");
    $("#tituloInput").val("");
    DataDraw();
})

$("#mascotaInput__button").click(function () {
    user.addMascota($("#mascotaInput").val());
    $("#mascotaInput").val("");
    DataDraw();
})

$("#tituloInput__button").click(function () {
    user.addBook(titulo = $("#tituloInput").val(), autor = $("#autorInput").val());
    $("#autorInput").val("");
    $("#tituloInput").val("");
    DataDraw();
})

$("#getFullName").click(function () {
    alert(user.getFullName());
})
$("#getBook").click(function () {
    alert(user.getBook());
})
$("#getMascota").click(function () {
    alert(user.getMascota());
})

