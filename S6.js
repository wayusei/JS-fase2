//  const john = {
//     name: 'John',
//     birthYear: 1990,
//     job: 'Developer'
//   }
  
//   const mark = {
//     name: 'Mark',
//     birthYear: 1985,
//     job: 'Teacher'
//   }
  
//   const jane = {
//     name: 'Jane',
//     birthYear: 1975,
//     job: 'Designer'
//   }

// Ejemplo 1
// const Person = function(name, birthYear, job) {
//     this.name = name;
//     this.birthYear = birthYear;
//     this.job = job;
//   }
  

//  var john = new Person('John', 1990, 'Developer')
//  var mark = new Person('Mark', 1985, 'Teacher')
//  var jane = new Person('Jane', 1975, 'Designer')
 
//  console.log(john);

 // Reto 1 -  Vectores

//  const Vec = function(x, y) {
//     this.x = x;
//     this.y = y;
//   }
  
//   Vec.prototype.plus = function(vector){
//     return new Vec(this.x + vector.x, this.y + vector.y);
//   }
//   Vec.prototype.minus = function(vector){
//     return new Vec (this.x - vector.x, this.y - vector.y)
//   }
//   Vec.prototype.length = function(){
//     return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
//   }

//   const vec1 = new Vec(1, 2);
//   const vec2 = new Vec(2, 3);
  
//   console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
//   console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
//   console.log(vec1.length()); // 2.23606797749979

//Ejemplo 2
// const Person = function(name) {
//     this.name = name;
//   }
  
//   const Developer = function(name, skills, yearsOfExperience) {
//     Person.call(this, name);
  
//     this.skills = skills;
//     this.yearsOfExperience = yearsOfExperience;
//   }
  
//   const john = new Developer('John', 'JavaScript', 10);
  
//   console.log( john );


// Reto 2
// const Group = function() {
//     this.members = [];      
// }

// Group.prototype.has = function(elemento){
//     return this.members.includes(elemento);
// }

// Group.prototype.add = function(elemento){
//     if(!this.has(elemento)){
//         this.members.push(elemento);
//     }
// }

// Group.from = function (arreglo){
//     const grupo = new Group();
//     for(let i=0; i< arreglo.length;i++){
//         grupo.add(arreglo[i]);
//     }
//     return grupo;
// }


//   const group = Group.from([1, 2, 3, 4, 5]);
//   console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
//   console.log(group.has(5)); // true
//   console.log(group.has(10)); // false
  
//   group.add(10);
//   console.log(group.has(10)); // true

// Ejemplo 3

// const Person = function(name, birthYear, job) {
//     this.name = name;
//     this.birthYear = birthYear;
//     this.job = job;
// }

// Person.prototype.calculateAge = function() {
//     const today = new Date();
//     const year = today.getFullYear();
  
//     console.log( year - this.birthYear );
// }
// const john = new Person('John', 1994, 'Developer');
// const mark = new Person('Mark', 1974, 'Accountant');
// const jane = new Person('Jane', 1995, 'Designer');

// mark.calculateAge();
// console.log(john);
// console.log(jane);
// console.log(mark);

// Clases

// const Person = function(name, birthYear, job) {
//     this.name = name;
//     this.birthYear = birthYear;
//     this.job = job;
// }

class Person {
    constructor(name, birthYear, job){
        this.name = name;
        this.birthYear = birthYear;
        this.job = job;
    }
    calculateAge() {
        const today = new Date();
        const year = today.getFullYear();
        console.log( year - this.birthYear );
    }
}

const john = new Person('John', 1994, 'Developer');
const mark = new Person('Mark', 1974, 'Accountant');
const jane = new Person('Jane', 1995, 'Designer');

mark.calculateAge();
console.log(john);
console.log(jane);
console.log(mark);