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

function playerElection() {
    let playerElection = prompt('Choose your answer, please:');

    // First letter to upper case.
    let firstLetter = playerElection.slice(0,1);
    firstLetter = firstLetter.toUpperCase();

    // Rest of the letters to lower case.
    let restLetters = playerElection.slice(1);
    restLetters = restLetters.toLowerCase();

    return playerElection = firstLetter + restLetters;
}

function singleRound(computerPlay, playerElection) {

}

console.log(playerElection())