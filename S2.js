//Ejercicio 1 sesion 2

const time = 11;
let greeting;

if (time >= 24 || time < 0){
    greeting = 'time debe tener valores entre 0 y 23'
} else if (time >= 0 && time < 12){
    greeting = 'Buenos días!'
} else if (time < 19){
    greeting = 'Buenas tardes!'
} else if (time >= 19){
    greeting = 'Buenas noches!'
}

console.log(greeting);
alert(greeting);