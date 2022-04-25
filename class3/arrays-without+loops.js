// .map()
// .reduce()
// .filter()

let estudiantes = [{
        nombre: 'Alvaro',
        calificacion: 20
    },
    {
        nombre: 'Pedro',
        calificacion: 80
    },
    {
        nombre: 'Roberto',
        calificacion: 50
    },
    {
        nombre: 'Rosalinda',
        calificacion: 90
    },
    {
        nombre: 'Ximena',
        calificacion: 100
    }
];

// map(cb)
// transforma cada elemento del array segun el callback
// devuelve un nuevo array con los resultados

/*let estudiantesNombres = [];
for (var i = 0; i < estudiantes.length; i++) {
    estudiantesNombres.push(estudiantes[i].nombre);
}*/

let estudiantesNombres = estudiantes.map(estudiante => estudiante.nombre);

console.log(estudiantesNombres);

let estudiantesAprobados = estudiantes.filter(estudiante => estudiante.calificacion >= 70);

console.log(estudiantesAprobados);

let estudiantesAprobadosNombres = estudiantesAprobados.map(estudiante => estudiante.nombre);

// reduce(cb(prev,current[,i,array])[,initial]
let numeros = [2, 4, 60, 8, 10];
let suma = numeros.reduce((a, b) => a + b);
console.log(suma);

let max = numeros.reduce((a, b) => a > b ? a : b);
console.log(max);

let prom = numeros.reduce((a, b) => a + b) / numeros.length;
console.log(prom);

let promedio = numeros.reduce((a, b, i, arr) => {
    b += a;
    return i === arr.length - 1 ? b / arr.length : b;
});
console.log(promedio);

/*let mejorEstudiante = estudiantes.reduce((a, b) => a.calificacion > b.calificacion ? a : b);*/
let mejorEstudiante = estudiantes
    .reduce((a, b) => {
        if (a.calificacion > b.calificacion) {
            return {
                nombre: a.nombre,
                calificacion: a.calificacion
            }
        } else {
            return {
                nombre: b.nombre,
                calificacion: b.calificacion
            }
        }
    });
console.log(mejorEstudiante);