/* Tipos de funciones*/

function FuncionPorDefinicion() {
    // cuerpo de la funcion
}
FuncionPorDefinicion();


let funciosPorExpresion = function() {
    // cuerpo de la funcion
};

funciosPorExpresion();

let c = console.log;
//c('Hola Mundo');

/* Funciones Anonimas y Funciones Nombradas */
// callback = es una funcion que se pasa como parametro a otra funcion

/*el.addEventListener('click', function() {
    // cuerpo de la funcion
});*/

// funcio nes de flecha (arrow functions) ES6
// son funciones anonimas
let suma = (a, b) => a + b;
let misum = suma(5, 8);
c(misum);

function sumarTodos() {
    return [...arguments].reduce((a, b) => a + b);
}

console.log(sumarTodos(1, 2, 3, 4, 5, 6, 7, 8, 9));

function sum(a, b) {
    return a + b;
}

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sum(...num));