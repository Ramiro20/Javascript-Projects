//console.log('Hola Mundo');
//console.dir();

{
    let hola = 'Hola Mundo';
    console.log(hola);
}

//olvidarse de poner ; en las variables
// olvidarse de poner ; en las funciones
//olvidarse de poner var en las variables

let precio = 125,
    impuesto = precio * 0.16,
    descuento = precio * 0.05,
    total = precio + impuesto - descuento;
console.log(total);

//const year = 2010;
//console.log(year);
// primitivas
// string

let amigo = "Jhon Villar";
//let saludar = console.log("Hola amigo " + amigo);
let numero = 2;
let saludar = `Hola amigo ,${amigo}, ${numero * 3} veces`;
console.log(saludar);


// number

let nacimiento = 1990;
let year = new Date().getFullYear();
let edad = year - nacimiento;

console.log('5' + 4);

// boolean

if ('a' == 'b') {
    console.log('son iguales');
} else {
    console.log('no son iguales');
}


// undefined

let nodefninida;

let title = document.getElementById('title');

// null

// compuestas
// object
// array
// maps
// sets
// functions

//incremento
//++
//decremento
//--

// +=, -=, *=, /=
let num = 10;
num += 5;

// operadores con comparacion (devuelven un booleano)

let condicion1 = 5 > 2
let condicion2 = 8 === 8
let condicion3 = 5 === '5'

let prof1 = 'Alexys'
let prof2 = 'Eleazar'
let prof3 = 'Alex'
let prof4 = 'Miranda'

console.log(prof1.toUpperCase().indexOf('A') == 0)

let a = 10.4646546;