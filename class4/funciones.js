function sumar(a, b) {
    return {
        a: a + 1,
        b: b + 1
    }
}

let miSuma = sumar(5, 8);
console.log(miSuma);

let obj = {
    nombre: 'Objeto',
    sumar(a, b) {
        {
            return a + b;
            lc
        }
    }
}

let miOtraSuma = obj.sumar(5, 8);
console.log(miOtraSuma);

/*  Funcion dentro e otra funcion */

function restar(a) {
    return function(b) {
        return a - b;
    }
}

/*let Miresta = restar(5)(3);
console.log(Miresta);*/

let Miresta = restar(5);
console.log(Miresta(3));

/* funciones autoinvocadas */

let multiplicar = (function(a, b) {
    return a * b;
})(5, 8);

console.log(multiplicar);

let Pais = function(nombre, moneda) {
    this.nombre = nombre;
    this.moneda = moneda;
}

let peru = new Pais('Peru', 'Soles');

console.log(peru);

function add(a, b, c) {
    return a + b + c;
}

let numeros = [1, 2, 3];

let myAdd = add.apply(null, numeros);

console.log(myAdd);

let myOtherAdd = add.call(undefined, 1, 2, 3);
console.log(myOtherAdd);