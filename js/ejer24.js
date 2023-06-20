let numero = prompt("Introduce un número");
let total = 0;
let i = 0;

while(i < numero.length){
    total += parseInt(numero[i])
    i++;
}

console.log(total);
