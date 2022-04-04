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

function singleRound(computerPlay, playerPlay) {
    if(computerPlay == 'Rock' && playerPlay == 'Paper') {
        return 'You win! Paper beats Rock'
    }
    if(computerPlay == 'Rock' && playerPlay == 'Scissors') {
        return 'You lose! Rock beats Scissors'
    }
    if(computerPlay == 'Rock' && playerPlay == 'Rock') {
        return 'It is a draw!'
    }
    if(computerPlay == 'Paper' && playerPlay == 'Paper') {
        return 'It is a draw!'
    }
    if(computerPlay == 'Paper' && playerPlay == 'Scissors') {
        return 'You win! Scissors beat Paper'
    }
    if(computerPlay == 'Paper' && playerPlay == 'Rock') {
        return 'You lose! Paper beats Rock'
    }
    if(computerPlay == 'Scissors' && playerPlay == 'Paper') {
        return 'You lose! Scissors beat Paper'
    }
    if(computerPlay == 'Scissors' && playerPlay == 'Rock') {
        return 'You win! Rock beats Scissors'
    }
    if(computerPlay == 'Scissors' && playerPlay == 'Scissors') {
        return 'It is a draw!'
    }
}


function game() {
    let machineVictories = 0;
    let userVictories = 0;

   
}

// Se agregan eventListeners a los botones.

const rps = Array.from(document.querySelectorAll('.rps'));
rps.forEach(choice => choice.addEventListener('click', function(e){
    console.log(singleRound(computerPlay(),this.dataset.rps));
}));


