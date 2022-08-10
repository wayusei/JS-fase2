// Programación imperativa

// const numbers = [1, 2, 3, 4, 5];
// const doubles = [];

// for(var i = 0; i < numbers.length; i++) {
//   doubles.push(numbers[i] * 2);
// }

// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(doubles); // [2, 4, 6, 8, 10]

// Programación funcional

// const numbers = [1, 2, 3, 4, 5];
// const doubles = numbers.map(function(number) {
//   return number * 2;
// });

// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(doubles); // [2, 4, 6, 8, 10]

// Ejemplo 1:

// const car = {
//     brand: 'Nissan',
//     model: 'Sentra',
//     year: 2020
//   }

//   function addColor(car) {
//     car.color = 'Black';
//     return car;
//   }

// function addColor(car) {
//     const newCar = Object.assign({}, car, {
//         color: 'Black'
//     });
//     return newCar;
//   }

//  function addColor(car){ 
//     const newCar = {
//         ...car,
//         color: 'Black'
//     }
//     return newCar;
// }

//   console.log('Antes de ejecutar la funcion', car);

//   const sameCar = addColor(car);

//   console.log('Después de ejecutar la funcion', car);
//   console.log('Después de ejecutar la funcion', sameCar);

//   console.log('Son los mismos autos? ', car === sameCar);

// Ejemplo 2

// function add(a, b) {
//     return a + b;
// }

// function randomNumber() {
//     return Math.floor(Math.random() * 10);
// }

// console.log(add(2, 3));
// console.log(randomNumber());

// let cart = [
//     {
//         item: 'Laptop',
//         quantity: 1
//     }
// ]

// function addItemToCart(item, quantity) {
//     cart.push({
//         item,
//         quantity
//     })
// }

// function addItemToCart(cart, item, quantity) {
//     // const newCart = cart.map(function(element){
//     //     return element;
//     // })
//     const newCart = [...cart]
//     newCart.push({
//         item,
//         quantity
//     })
//     return newCart;
// }

// cart = addItemToCart(cart, 'Telefono', 2);
// cart = addItemToCart(cart, 'Tablet', 4);

// console.log(cart);

// let square = function(number) {
//     return number * number;
//   }
  
// let squareOfFour = square(4);
  
// console.log(squareOfFour); // 16

// const numbers = [1, 2, 3, 4, 5];
// const doubles = numbers.map(function(number) {
//   return number * 2;
// });

// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(doubles); // [2, 4, 6, 8, 10]

// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter(function(number) {
//   return number % 2 === 0;
// });

// console.log(evenNumbers); // [2, 4]

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0); // Initial value

// console.log(sum); // 15

// Reto 1

// function flatten(arrays) {
//     const resultado = arrays.reduce(function(acumulador, valorActual){
//         return acumulador.concat(valorActual)
//     },[]);
//     return resultado;
//  }
  
//   const arrays = [[1, 2, 3], [4, 5], [6]];
//   const array = flatten(arrays);
  
//   console.log(array); // [1, 2, 3, 4, 5, 6]

// Reto 2

// function compact(array) {
//     const resultado = array.filter(function(element){
//         return !!element
//     });
//     return resultado
//   }
  
// const array = [0, '0', NaN, null, [], {}, 1, false, 2, '', 3];
// const compactedArray = compact(array);

// console.log(compactedArray); // [1, 2, 3]

// Reto 3

function loop(start, test, update, body) {
    for(let i = start; test(i); i= update(i)){
        body(i);
    }
  }
  
  const test = function(n) {
    return n > 0;
  }
  
  const update = function(n) {
    return n - 1;
  }
  
  loop(7, test, update, console.log);
  // 3
  // 2
  // 1