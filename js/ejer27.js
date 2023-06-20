let numero = prompt("Introduce un número");

let i = 1;
let suma = 0;
while(i<=numero){
    if(i%2 != 0) suma+=i
    i++;
}

console.log(suma);