// for

/*for (let i = 1; i <= 10; i++) {
    console.log(i);
}*/

let teachers = ['John', 'Jane', 'Mark', 'Mary', 'Bob', 'Alisson', 'Alicia', 'Juan', 'Juana', 'Juanita'];
/*for (let i = 0; i < teachers.length; i++) {
    if (teachers[i].toUpperCase().indexOf('A') == 0) {
        break;
    }
    console.log(teachers[i]);
}*/

let i = 100;
while (i--) {
    console.log('Debo atender a la clase y no distraerme');
}

let password = 'ED';
let pass;
do {
    pass = prompt('Ingresa tu contraseña');
} while (pass != password);

let name = 'ELEAZAR';
for (let char of name) {
    console.log(char);
}