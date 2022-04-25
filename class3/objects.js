/*let myobj = {
    propiedad: valor,
    propiedad2: valor2,
    propiedad3: valor3
}*/

let yo = {
    nombre: 'Alvaro',
    edad: 23,
    pais: 'México',
    esPadre: true,
    hijos: ['Juan', 'Pedro', 'María']
}

console.log(yo.hijos[2]);

const ED = {
    nombre: 'Escuela Digital',
    sedes: ['Bogota', 'Lima'],
    profesores: ['Alexis', 'Juan', 'Pedro'],
    fundacion: '2010',
    mejorPlataforma: true,
    eslogan: 'Aprende desde cero',
    usp: 'Somos el primer sitio orientado a objetos',
    saludar() {
        return 'Bienvenidos a la escuela digital';
    }
};

// operadores
// delete -> elimina una propiedad
// in -> verifica si una propiedad existe

delete ED.fundacion;
console.log(ED);

console.log('profesores' in ED);

Object.prototype.numeroMagico = 27;
console.log('numeroMagico' in ED);
console.log(ED.numeroMagico);
console.log(ED.hasOwnProperty('numeroMagico'));

let ED2 = Object.assign({}, ED);
console.log(ED2);

let a = 'hola',
    b = 'mundo';
let myobj = {
    a,
    b
};

console.log(myobj);

let myObj2 = {
    [a + b]: 'hola mundo'
};

console.log(myObj2);