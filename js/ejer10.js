numeroSemana = prompt('Introduce un número que corresponda a un día de la semana (del 1 al 7)');
numeroSemana = parseInt(numeroSemana);

switch(numeroSemana){
    case 1: 
        console.log("Lunes");
        break;
    case 2: 
        console.log("Martes");
        break;
    case 3: 
        console.log("Miércoles");
        break;
    case 4: 
        console.log("Jueves");
        break;
    case 5: 
        console.log("Viernes");
        break;
    case 6: 
        console.log("Sábado");
        break;
    case 7: 
        console.log("Domingo");
        break;
    default:
        console.log("No es un número que corresponda a un día de la semana");
}