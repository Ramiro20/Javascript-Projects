let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*console.log(arr.length);
console.log(arr[4]);

let sum = 0;
/*for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    sum += element;
}*/

/*for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    if (typeof element != 'number') continue;
    sum += element;
}

Array.prototype.saludo = 'Hola';*/

console.log(arr.indexOf(2));

// agregar elementos con
// .push(el1,el2,el3) -> añade al final
// .unshift(el1,el2,el3) -> añade al principio 

console.log(arr.length);
let newLength = arr.unshift('Javascript', 'desde', 'cero');
console.log(arr);
console.log("este es otro array");
console.log(newLength);

//eliminar un solo elemento (sin parametros)
// .pop() -> elimina el ultimo elemento
// shift() -> elimina el primer elemento

let deletedEl = arr.pop();
console.log(arr);
console.log(deletedEl);

// join() -> convierte un array en un string
console.log(arr.join(' '));
// splice() -> elimina elementos de un array
arr.splice(2, 0, 'escuela', 'digital');
console.log(arr);
// slice() -> copia una parte de un array
let arr2 = arr.slice(2, 5);
console.log(arr2);

// ES6
// .find(cb);

let arra = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = arra.find(el => el > 3);
let numIndex = arra.findIndex(el => el > 3);
console.log(num);
console.log(numIndex);

// Iteradores
// son objetos que contienen un metodo next()
// Ese metodo devuelve un objeto con dos propiedades: value y done
// value -> valor del elemento actual
// done -> true si ya no hay mas elementos

// keys() -> devuelve un iterador con las claves del objeto
// values() -> devuelve un iterador con los valores del objeto
// entries() -> devuelve un iterador con las claves y valores del objeto

let iter = arr.keys();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());