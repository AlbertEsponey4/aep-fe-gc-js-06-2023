let palabra = prompt("Ingresa una palabra");
let palabraInversa = "";

let i = palabra.length - 1; //resto uno porque tengo que tener en cuenta la posicion 0, si no haze una iteracion de más y me imprime un undefined la consola.
while (i >= 0){
    palabraInversa = palabraInversa + palabra[i];
    i--;

}

console.log(palabraInversa);
