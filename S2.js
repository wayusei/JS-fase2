//Ejercicio 1 sesion 2
/*
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
*/

//Ejercicio 2
/*
const day = 2;
let text;

switch (day) {
    case 1:
        text = 'Monday';
        break;
    case 2:
        text = 'Tuesday';
        break;
    case 3:
        text = 'Wednesday';
        break;
    case 4:
        text = 'Thursday';
        break;
    case 5:
        text = 'Friday';
        break;
    case 6:
        text = 'Saturday';
        break;
    case 7:
        text = 'Sunday';
        break;
    default:
        text = 'Valor inválido';
        break;
}

console.log(text);
*/

//Ejemplo de operador ternario
/*
const speed = 98;
let message;

message = speed > 100 ? 'Vas muy rápido' : 'Vas por abajo del límite';
/*
if (speed > 100){
    message = 'Vas muy rápido';
} else {
    message = 'Vas por abajo del límite';
}
*/
/*
const isFast = speed > 100;

console.log(message);
console.log('En verdad vas muy rápido', isFast);
*/

//Ejemplo de Bucle
/*
console.log('Hello world!');
console.log('Hello world!');
console.log('Hello world!');
console.log('Hello world!');
console.log('Hello world!');
*/
/*
for (let index = 0; index < 200; index++) {
    
    if (index === 196) continue
    console.log('Hello world! repeticion', index );  
}
*/
/*
for (let index = 1; index <= 100; index++) {
    
    if (!(index % 2)){
        console.log('Hello world! par', index );      
    } 
*/

// Reto 3: números primos de cero a 100

for (let index = 0; index <= 100; index++) {
    let esPrimo = true;
    for (let p = 2; p <= index; p++){
        if (index % p === 0 && p !== index) esPrimo = false;   
    }
    if (esPrimo) console.log('El número es primo ', index)
}
