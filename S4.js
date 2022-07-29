// function calculateAge(birthYear) {
//     const age = 2022 - birthYear;
//     return age;
// }

// const ageJohn = calculateAge(1969)

// console.log('La edad de John es: ', ageJohn);

// function yearsUntilRetirement(yearOfBirth, name){
//     const age = calculateAge(yearOfBirth);
//     const retirement = 65 - age;
//     console.log(`${name} retires in ${retirement} years`);
// }

// yearsUntilRetirement(1969,'Jose');

// const whatDoYouDo = function(job, name){
//     switch (job) {
//         case 'developer':
//             return name + ' develops cool apps';
//         case 'designer':
//             return name + ' designs awesome websites';
//         default:
//             return name + ' does something else';
//     }
// }

// console.log(whatDoYouDo('designer', 'Rodrigo'));

// const factorial = function fac(num) {
//     return num < 2 ? 1 : num * fac(num - 1);
// }

// console.log(factorial(5)) //120

// function logName(){
//     const name = 'John Doe';
//     console.log(name)
// }

// logName();

// (function(){
//     const name = 'John Doe';
//     console.log(name)
// })()

//const firstNames = ['John', 'Jane', 'Mark'];

// function getFullNames(names) {
//     const fullNames = [];

//     for (const name of names){
//         fullNames.push(`${name} Doe`)
//     }
//     return fullNames;
// }

// const fullNames = getFullNames(firstNames);

// console.log(fullNames);

// const getFullNames = (names) => {
//     const fullNames = [];

//     for (const name of names){
//         fullNames.push(`${name} Doe`)
//     }
//     return fullNames;
// }

// const fullNames = getFullNames(firstNames);

// console.log(fullNames);

// const logName = name => console.log(`Hello ${name}`);

// logName('Rodd');

// Reto 2

//funcion que teniendo dos nùmeros te regrese el mayor

//const getLargerInt = (a, b) => a < b ? console.log(b) : console.log(a);

// getLargerInt(15,10);

// //funcion que recibiendo un array de 2 te regrese el elemento mayor

// const getLargerIntArray = (array) => {
//     for (let i=0;i<array.length; i++){
//         let elemento[] 
//     }
// }

// getLargerIntArray([15,10]);

//secuencia de fibonacci

const fibonacci = fin => {
    let serie = [];
    serie[0] = 1;
    serie[1] = 1;
    for (let i = 2; i < fin; i++){
        serie[i] = serie [i -2] + serie [i-1];
    }
    console.log(serie);
}

fibonacci(10);

