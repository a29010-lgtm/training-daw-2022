// Declarar un array numérico (entero) y crear un método que imprima:
// La suma de todos los elementos
// El elemento más grande
// El elemento más pequeño
// La media de los elementos
// Y la mediana 


function doCalculation(array) {
let sum = 0;
let max = array[0];
let min = array[0];
let avg = 0;  
let median = 0;

for (let i = 0; i < array.length; i++) {
 sum += array[i]
 avg = Math.floor(sum/array.length);
 if (i>max) {
 max=array[i]
 } 
 if(i<min){
 min=array[i]
 }
 if (array.length%2==1) {
    med = array[Math.floor(array.length/2)]
    median=array[med]
 }else{
    med = array[Math.floor(array.length/2)];
    median = (array[med-1] + array[med])/2;
 }
}
console.log(min,max,avg,median)
}


doCalculation([1,2,3,4])
doCalculation([5,5,5,5])
doCalculation([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5])