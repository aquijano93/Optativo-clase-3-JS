// For + break

// En una clase el profesor sugiere a sus 20 alumnos que adivinen un numero que escribió en su notario, aquel que lo haga podra retirarse 10' antes de finalizar la clase.
// Para ello deberan decir su nombre y un numero al azar entre el 1 y el 20.

let numeroGanador = 7;

for (let i=1; i<=20; i++){
    let alumnoA = prompt("Dime tu nombre");
    let nuemeroElegido = parseInt(prompt("Dime un numero"));
    if (nuemeroElegido == numeroGanador){
        alert ("Felicitaciones " + alumnoA +" "+"puedes retirarte 10 minutos antes de la clase");
        break;
    }else{
        alert ("Que lastima " + alumnoA +" "+"ese no era el numero ganador.")
    }
}