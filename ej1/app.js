class Alumno {
    constructor(nombre, apellido, edad, direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.direccion = direccion;
    }

    mostrarDatos() {
        console.log(`Nombre: ${this.nombre} ${this.apellido}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Dirección: ${this.direccion}`);
    }
}

let alumno1 = new Alumno('Luis', 'Mendoza Rubí', 27, 'De los Manzanos, Num ext: 300, Colonia: Mirasol,');
alumno1.mostrarDatos();