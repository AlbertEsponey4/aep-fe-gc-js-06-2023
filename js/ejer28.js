let numero = prompt("Introduce un número");
numero = parseInt(numero);

let cont=0;
for(let i = 0; i <= numero; i++){
    if(numero%i == 0) cont++
}

//Els números primers només tenen de divisors l'1 i ells mateixos --> 2 divisors
if (cont > 2) console.log("No es primero")
else console.log("Sí que es primero")