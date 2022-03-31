function getRandomInteger() {
    // Extremos del intervalo de numeros aleatorios
    let numMax = 3;

    // Retorna un entero aleatorio entre min (incluido) y max (excluido)
    // ¡Usando Math.round() te dará una distribución no-uniforme!
    return Math.floor(Math.random()*numMax);
}

function computerPlay() {
    // Se llama getRandomInteger() y se almacena su valor
    let randomInteger = getRandomInteger();

    // Se obtiene piedra papel o tijera segun el numero conseguido
    if (randomInteger == 0) {
        return 'Rock';
    } else if(randomInteger == 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }

}

console.log(computerPlay())