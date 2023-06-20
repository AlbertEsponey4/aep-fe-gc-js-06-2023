let año = prompt("Introduce un año");
año = parseInt(año);

if ((año%4 == 0 && año%100 != 0) || año%400 == 0) {
    console.log(año + " es un año bisiesto");
} else {
    console.log(año + " no es un año bisiesto");
}