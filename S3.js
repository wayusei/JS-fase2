// Sesión 3 Ejemplo 1

const numbers = [1, 3, 4, 7, 2, 1, 9, 0]

// Resultado: const doubled = [2, 6, 8, 14, 4, 2, 18, 0]

const doubled = []

for (let i=0; i < numbers.length; i++){
    doubled[i] = numbers[i] * 2
}

console.log(doubled)