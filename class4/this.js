let myObj = {
    nombre: 'Eleazar',
    saludar() {
        console.log(`Hola ${this.nombre}`);
    }
};

myObj.saludar();

'use strict';

function checkThis() {
    console.log(this);
}

checkThis();

function Boy() {
    this.edad = 0;
    setInterval(() => { this.edad++ }, 1000)
}

let juanito = new Boy();