let numero = prompt("Introduce un número");

let sumaDivisores=0;
let i = 0;
while(i < numero){
    if(numero%i == 0) sumaDivisores+=i;
    i++;
}

if (sumaDivisores == numero) console.log("Es perfecto")
else console.log("NO es perfecto")