let saludo = 'Bienvenido a JavaScript en español';
let saludo2 = saludo.toLowerCase();
//propiedades
let longitud = saludo.length; // Devuelve el número de caracteres
console.log(saludo);

//metodos sin parametros

console.log(saludo.trim());
console.log(saludo.toUpperCase());
console.log(saludo.toLowerCase());

//metodo con parametros
// indexOf(string[,i])
console.log(saludo2.lastIndexOf('javascript'));

// split separa un string en un array
let arrayFromSaludo = saludo.split('i');
console.log(arrayFromSaludo);

let subs = saludo.substring(10, -7);
console.log(subs);

let sli = saludo.slice(-10, -7);
console.log(sli);

console.log(saludo.startsWith('B'));
console.log(saludo.includes('do'));
console.log(saludo.endsWith('español'));

/*let edad = prompt('¿Cuál es tu edad?');
if (edad < 12) {
    console.log('Eres un niño');
} else if (edad >= 12 && edad < 14) {
    console.log('Eres un adolescente');
} else if (edad >= 15 && edad < 26) {
    console.log('Eres un Joven');
} else if (edad >= 27 && edad < 60) {
    console.log('Eres un adulto');
} else {
    console.log('Eres un anciano');
}*/

let color = prompt(`Escoge un color: 
1. Rojo
2. Amarillo
3. Verde
4. Negro
5. Cafe
6. Celeste
`);

switch (color) {
    case '1':
        console.log('Escogiste Rojo,Eres romantico');
        break;
    case '2':
        console.log('Escogiste Amarillo');
        break;
    case '3':
        console.log('Escogiste Verde');
        break;
    case '4':
        console.log('Escogiste el color negro');
        break;
    case '5':
        console.log('Escogiste el color cafe');
        break;
    case '6':
        console.log('Escogiste el color celeste');
        break;
    default:
        console.log('No escogiste ningun color');
        break;
}