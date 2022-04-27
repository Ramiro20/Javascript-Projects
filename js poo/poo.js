// clase plantilla a partir de la cual se crean las clases
// instancia -> cada objeto que se crea a partir de una clase

const jon = {
    nombre: 'Jhon',
    apellido: 'Zenisky',
    cursos: ['react', 'angular', 'vue'],
    pais: 'mexico',
};

const alexys = {
    nombre: 'Alexys',
    apellido: 'Lozada',
    cursos: ['react', 'angular', 'Mysql'],
    pais: 'bolivia',
};

/*var profesor = function(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
};

var murrillo = new profesor('Murrillo', 'Lopez', 'mexico');
var juan = new profesor('Juan', 'Perez', 'bolivia');

console.log(murrillo);
console.log(juan);*/

/*let string = new String('hola mundo');
console.log(string);

let string2 = 'hola mundo otra vez';
console.log(string2);*/

// constructor es una funcion que se ejecuta cuando se crea un objeto
// metodos -> funciones que pertenecen a un objeto
// clases en ES6 -> plantillas de objetos
class Persona {
    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
        this.nombreCompleto = `${nombre} ${apellido}`;
    }
    saludar() {
        return `Hola , soy ${this.nombreCompleto} y vivo en ${this.pais}`;
    }

    static describirPersona(persona) {
        return `Esta persona se llama ${persona.nombreCompleto} y es de ${persona.pais}`;
    }
}

const eleazar = new Persona('Eleazar', 'Loayza', 'bolivia');
console.log(eleazar.saludar());

class Profesor extends Persona {
    constructor(nombre, apellido, pais, curso) {
        super(nombre, apellido, pais);
        this.cursos = curso;
    }
    invitarAlCurso() {
        return `Hola soy ${this.nombreCompleto}, profesor y te invito al curso ${this.cursos}. ¡Que lo disfrutes!`;
    }
}

const yolanda = new Persona('Yolanda', 'BeCool', 'Londres');
const roger = new Persona('Roger', 'Quispe', 'Perú');
const freddy = new Profesor('Freddy', 'Lopez', 'mexico');
const jose = new Profesor('Juan', 'Perez', 'bolivia');
const daniel = new Profesor('Daniel', 'Lopez', 'bolivia', 'react');

console.log(daniel.invitarAlCurso());

console.log(Persona.describirPersona(roger))
    //console.log(juan);
console.log(Persona.describirPersona)