function esPrimo(numero) {
    if (numero === 1) {
        return false;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
        return false;
        }
    }

    return true;
}  

let numero = prompt("Intorudce un número");
numero = parseInt(numero);

for (let i = 1; i <= numero; i++) {
    if (esPrimo(i)) {
        console.log(i);
    }
}