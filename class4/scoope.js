// scope es el ambito o contexto donde se ejecuta una funcion y existe una variable

let hola;

function holaMundo() {
    hola = 'hola mundo';
}
holaMundo();
console.log(hola);

function holaDeNuevo() {
    hola = 'hola otra vez';
}
holaDeNuevo();
console.log(hola);

function saludar() {
    let saludo = 'hola';
    return function saludarInterno(amigo) {
        console.log(`${saludo}   ${amigo}`);
    }
}

let misaludo = saludar();
misaludo('juan');
misaludo('Eleazar');

function afuera() {
    let numero = 0;
    return function() {
        numero++;
        console.log(numero);
    }
}

let aumento = afuera();
aumento();
aumento();
aumento();
aumento();
aumento();
aumento();
aumento();