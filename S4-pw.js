// Postwork de la sesión 4:

// Deep Equal:
// Escribir una función llamada deepEqual que reciba dos argumentos y retorne true si son el mismo valor 
// o si son objetos con las mismas propiedades, en este último caso los valores de las propiedades deben 
// ser comparados con una llamada recursiva de deepEqual.

// Usando el operador typeof puedes determinar si ambas variables son objetos, de ser así se debe llamar 
// nuevamente deepEqual para comparar las propiedades de dichos objetos, en caso contrario solo es necesario 
// revisar si ambas variables son estrictamente iguales.

// La función Object.keys() es útil para obtener las propiedades de los objetos.

function deepEqual(a, b) {
    if (typeof(a) === 'object' && typeof(b) === 'object'){
        const keysA = Object.keys(a).sort();
        const keysB = Object.keys(b).sort();
    
        if (!deepEqual(keysA.length, keysB.length)){
            return false;
        }

        for(let i = 0; i < keysA.length; i++){
            if(!deepEqual(keysA[i], keysB[i])){
                return false;
            }
            if(!deepEqual(a[keysA[i]], b[keysB[i]])){
                return false;
            }
        }
        return true;
    }else if (a === b){
        return true;
    }else{
        return false;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Doe'
}
console.log('Deep Equal');
console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false

// Chunk:
// Escribir una función chunk que recibe un arreglo y un número entero size. La función debe dividir el arreglo 
// en múltiples arreglos del tamaño determinado por size.

function chunk(array, size) {
    const resultado = [];
    const recorridos = array.length / size;
    let inicio = 0;
    let fin = size;
    for (let i = 0; i < recorridos; i++){
        resultado.push(array.slice(inicio, fin));
        inicio = fin;
        fin += size;
    }
    return resultado;
}

const data = [1, 2, 3, 4, 5, 6, 7, 8]

console.log('Chunk');
console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]

// Frequency
// Escribir una función frequency que recibe un string como argumento. Esta función debe contar la frecuencia o el 
// número de veces que se repite cada carácter.

// El resultado debe mostrarse en un objeto donde las propiedades sean los caracteres, y los valores sean la frecuencia. 
// Los resultados deben ordenarse de manera ascendente por los caracteres y no la frecuencia.


function frequency(string) {
    const resultado = {}; 
    for (caracter of string){
        let frecuencia = 0;
        for (let i = 0; i < string.length; i++){
            if (string[i] === caracter){
                frecuencia++; 
            }
        }
        resultado[caracter] = frecuencia;            
    }
    let clavesResultado = Object.keys(resultado).sort();
    let ordenado = {};
    clavesResultado.forEach(elemento => ordenado[elemento] = resultado[elemento]);
    
    return ordenado;
}

console.log('Frequency');
console.log('Test 1:', frequency('cccbbbaaa'))
// {a: 3, b: 3, c: 3}
console.log('Test 2:', frequency('www.bedu.org'))
// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('Test 3:', frequency('john.doe@domain.com'))
// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}
