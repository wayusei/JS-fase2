//
// if (true) {
//     var foo = 'John Doe'
//     console.log(foo);
// }

// console.log(foo)

// var numbers = [1, 2, 3, 4, 5]
// var doubles = []

// for (let i = 0; i < numbers.length; i++){
//     doubles.push(numbers[i] * 2)
// }

// console.log(numbers);
// console.log(doubles);
// console.log(i);

// (function prueba (){
//     var foo = "HOLA"
//     console.log(foo);
// })();

// console.log(foo);

// function logThis (){
//     console.log(`Is this === window?` + (this === window))
// }
//  const foo {
//     logThis: logThis
//  }

//  logThis() // Is this === window? true

//  foo.logThis() // Is this === window? false
 

//  const john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     birthYear: 1990,
//     calculateAge: function(birthYear) {
//       const today = new Date()
//       const year = today.getFullYear()
//       return year - birthYear
//       }
//   }

//   console.log( john );
/*
Valor actual
{
  firstName: "John",
  lastName: "Doe",
  birthYear: 1990,
  calculateAge: ƒ
}
*/

// john.calculateAge();

// console.log( john );
/*
Después de llamar el método calculateAge()
{
  firstName: "John",
  lastName: "Doe",
  birthYear: 1990,
  age: 31,
  calculateAge: ƒ
}
*/

// EJEMPLO DE HOISTING

//function power <- revisar del repo del profesor

// const john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     birthYear: 1990,
//     calculateAge: () => {
//       const today = new Date()
//       const year = today.getFullYear()
//       this.age = year - john.birthYear
//     }
//   }

//   john.calculateAge()

//   console.log(john)

// var singers = [
//     { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
//     { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
//     { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
//     { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
//   ];
  
//   function pluck(list, propertyName) {
//     const salida = []
//     for (i = 0; i < list.length; i++){
//         salida.push(list[i][propertyName]);
//     }
//     console.log(salida);
//   }
  
//   console.log( pluck(singers, 'name') );
//   // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]
  
//   console.log( pluck(singers, 'band') );
//   // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]
  
//   console.log( pluck(singers, 'born') );
//   // [1948, 1950, 1967, 1964]

// Reto 2
// Escribir una función que reciba un arreglo de 10 enteros entre 0 - 9, 
// y retorne un string en forma de número telefónico. 
// añadir manejo de excepción por si tiene letras o son menos de 10 caracteres

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // "(123) 456-7890"

function createPhoneNumber(array) {
    let salida = "(xxx) xxx-xxxx";
    if (array.length > 10){
        return console.log("Son más de 10 digitos!");
    }
    for(parte of array){
        if (!isNaN(parte)){
            if (parte < 10 && parte >= 0){
                salida = salida.replace("x", parte)
            }else{
                return console.log("Solo se admiten numeros del 0 al 9");
            }
        }
    }
    console.log(salida);
}


// Escribir una función que reciba un arreglo de n cantidad de enteros positivos
// que pueden no estar ordenados. La función debe retornar un nuevo arreglo con 
// los elementos faltantes del primer arreglo.

// function findMissingNumbers (array){
//     array.sort()
//     console.log(array);
// }

// findMissingNumbers([2, 1, 9, 5, 7, 3, 10]); // [4, 6, 8]