// Sesión 3 Ejemplo 1
/*
const numbers = [1, 3, 4, 7, 2, 1, 9, 0]

// Resultado: const doubled = [2, 6, 8, 14, 4, 2, 18, 0]

const doubled = []

for (let i=0; i < numbers.length; i++){
    doubled.push(numbers[i] * 2)
    //doubled[i] = numbers[i] * 2   <- mi forma
}
console.log('Numbers: ', numbers)
console.log('Doubled: ',doubled)
*/
/*
//otra version... pero con 'for of'
const numbers = [1, 3, 4, 7, 2, 1, 9, 0]
const doubled = []

for (const number of numbers) {
    doubled.push(number * 2)    
}

console.log('Numbers: ', numbers)
console.log('Doubled: ',doubled)
*/
/*
const numbers = [1, 3, 4, 7, 2, 1, 9, 0]
const doubled = []

for (const number of numbers) {

    doubled.push(number * 2)    
}

console.log('Numbers: ', numbers)
console.log('Doubled: ',doubled)
*/

// Reto 1: obtener el promedio de todos los numeros del array
// const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7]

// let resultado = 0
// let suma = 0

// for (const numero of numbers) {
//     suma += numero
// }
// resultado = suma / numbers.length

// console.log('El resultado es: ', resultado)

// Objetos

// const john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     birthYear: 1990
// }

// console.log(john.firstName)
// console.log(john['lastName'])

// Ejemplo convirtiendo un objeto en array

// const car = {
//     brand: 'Nissan',
//     model: 'Versa',
//     year: 2020
// }

// const keys = Object.keys(car)
// const pairs = []

// for (let i = 0; i < keys.length; i++){
//     pairs.push([keys[i], car[keys[i]]])
// }

// console.log(pairs)

//Reto 2

// const car = [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]

// const object = {}

// for (let i = 0; i < car.length; i++){
//     object[car[i][0]] = car[i][1]
// }

// console.log(object)

// const colors = ['red', 'blue', 'green'];

// const myColors = colors;
// Reto 3
const person = {
    firstName: 'John',
    lastName: 'Doe',
    links: {
      web: {
        blog: 'https://johndoe.com'
      }, 
      social: {
        facebook: 'https://facebook.com/john.doe',
        instagram: 'https://instagram.com/john.doe'
      } 
    }
  }

  const {links: {social: {facebook: fb}}} = person
  const {links: {social: {instagram: ig}}} = person
  
  console.log(fb)
  console.log(ig)