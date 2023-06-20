let numero = prompt("Ingresa un número");
let factorial = 1; //se inicializa a uno igual que la i porque si no la multipplicación da siempre 0

for(let i = 1; i<=numero; i++){
    factorial = i * factorial;  
}

console.log(factorial);