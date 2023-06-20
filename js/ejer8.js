numero1 = prompt("Introduce el primer número");
numero2 = prompt("Introduce el segundo número");
numero3 = prompt("Introduce el tercero número");

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);
numero3 = parseInt(numero3);

let masGrande = numero1;
if (numero2 > masGrande) masGrande = numero2;
if (numero3 > masGrande) masGrande = numero3;

console.log("El numero más grande es " + masGrande)