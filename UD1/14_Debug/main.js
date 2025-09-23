for (let i = 1; i > -5; i--) {
    console.log(i);
}
function factorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) { 
        resultado *= i;
    }
    return resultado;
}

facto = n => n ? n * facto (n-1):1

console.log(facto(5))
console.log(factorial(5)); 

function maximo(lista) {
    let max = lista[0]
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > max) {
            max = lista[i];
        }
    }
    return max;
}
console.log(maximo([-10, -3, -50])); 

// Debería calcular el precio final con IVA incluido

function precioConIVA(precio, iva) {
    return precio + iva * precio / 100;
}

console.log(precioConIVA(100, 21)); // Esperado: 121

// Debería calcular la media de tres números

function media(a, b, c) {
    return (a + b + c) / 3;
}

console.log(media(4, 10, 16)); 
// Esperado: 10