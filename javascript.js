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

    let keepGoing = true;

    // Ciclo while que se detiene hasta que se ingresa una respuesta valida
    while (keepGoing) {
        let playerPlay = prompt('Choose your answer, please:');

        // First letter to upper case.
        let firstLetter = playerPlay.slice(0,1);
        firstLetter = firstLetter.toUpperCase();

        // Rest of the letters to lower case.
        let restLetters = playerPlay.slice(1);
        restLetters = restLetters.toLowerCase();

        playerPlay = firstLetter + restLetters;

        // Condicional para verificar que la entrada es valida
        if(playerPlay === 'Rock' || playerPlay === 'Paper' || playerPlay === 'Scissors') {
            keepGoing = false;
            return playerPlay;
        } 
    }
}

function singleRound(computerPlay, playerPlay) {

}

console.log(playerElection())