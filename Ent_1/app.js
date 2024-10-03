// Ejercicio 1: Plantear una clase Alumno con atributos de nombre, apellido, edad, direccion. Lo verificaremos con un programa para inscribir alumnos
class Alumno {
    constructor(nombre, apellido, edad, direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.direccion = direccion;
    }

    // Método para mostrar los detalles del alumno
    mostrarAlumnx() {
        return `Alumnx: ${this.nombre} ${this.apellido}, Edad: ${this.edad}, Dirección: ${this.direccion}`;
    }
}

// Función para inscribir un alumno
function inscribirAlumno() {
    // Obtener los valores ingresados por el usuario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const direccion = document.getElementById("direccion").value;

    // Crear un nuevo objeto Alumno con los datos
    const nuevoAlumno = new Alumno(nombre, apellido, edad, direccion);

    // Mostrar la información del alumno inscrito
    const resultado = document.getElementById("resultado-alumno");
    resultado.textContent = nuevoAlumno.mostrarAlumnx();
}

// Ejercicio 2: Verificar si una fecha corresponde a Navidad
function verificarNavidad() {
    const fechaIngresada = document.getElementById("fecha").value;
    const fecha = new Date(fechaIngresada);
    const resultado = document.getElementById("resultado-navidad");

    if (fecha.getMonth() === 11 && fecha.getDate() === 25) {
        resultado.textContent = "¡Es Navidad! Felicidades. 😃✔🎅";
    } else {
        resultado.textContent = "No es Navidad, lo siento 😟❌🎅";
    }
}

// Ejercicio 3: Verificar si tres números son menores a 10
function verificarNumerosMenores() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const num3 = parseInt(document.getElementById("num3").value);
    const resultado = document.getElementById("resultado-numeros");

    if (num1 < 10 && num2 < 10 && num3 < 10) {
        resultado.textContent = "Todos los números son menores a diez.";
    } else {
        resultado.textContent = "No todos los números son menores a diez.";
    }
}

