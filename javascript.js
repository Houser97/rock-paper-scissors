let machineVictory = 0;
let userVictory = 0;

function getRandomInteger() {
    // Extremos del intervalo de numeros aleatorios
    let numMax = 3;

    // Retorna un entero aleatorio entre min (incluido) y max (excluido)
    // ¡Usando Math.round() te dará una distribución no-uniforme!
    return Math.floor(Math.random() * numMax);
}

function computerElection() {
    // Se llama getRandomInteger() y se almacena su valor
    let randomInteger = getRandomInteger();

    // Se obtiene piedra papel o tijera segun el numero conseguido
    if (randomInteger == 0) {
        return 'Rock';
    } else if (randomInteger == 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function removeTransition(e){
    e.target.classList.remove('effectButton');
}

function dediceWinner(userVictory, machineVictory) {
    if(userVictory >= 5){
        const boxWinner = document.querySelector('.counter.player');
        boxWinner.classList.add('effect');
        return;
    } else if(machineVictory >= 5){
        const boxWinner = document.querySelector('.counter.machine');
        boxWinner.classList.add('effect');
        return;
    }
}

function singleRound(playerPlay) {
    // Se agrega efecto al boton seleccionado.
    const button = document.querySelector(`button[data-rps=${playerPlay.target.dataset.rps}`);
    button.classList.add('effectButton');

    computerPlay = computerElection();
    playerPlay = playerPlay.target.dataset.rps;

    if (computerPlay == 'Rock' && playerPlay == 'Paper') {
        game('player');
        return 'You win! Paper beats Rock'
    }
    if (computerPlay == 'Rock' && playerPlay == 'Scissors') {
        game('machine');
        return 'You lose! Rock beats Scissors'
    }
    if (computerPlay == 'Rock' && playerPlay == 'Rock') {
        game('draw');
        return 'It is a draw!'
    }
    if (computerPlay == 'Paper' && playerPlay == 'Paper') {
        game('draw');
        return 'It is a draw!'
    }
    if (computerPlay == 'Paper' && playerPlay == 'Scissors') {
        game('player');
        return 'You win! Scissors beat Paper'
    }
    if (computerPlay == 'Paper' && playerPlay == 'Rock') {
        game('machine');
        return 'You lose! Paper beats Rock'
    }
    if (computerPlay == 'Scissors' && playerPlay == 'Paper') {
        game('machine');
        return 'You lose! Scissors beat Paper'
    }
    if (computerPlay == 'Scissors' && playerPlay == 'Rock') {
        game('player');
        return 'You win! Rock beats Scissors'
    }
    if (computerPlay == 'Scissors' && playerPlay == 'Scissors') {
        game('draw');
        return 'It is a draw!'
    }
}


function game(winner, machineVictories = machineVictory, userVictories = userVictory) {
    
    if(userVictory >= 5){
        return;
    } else if(machineVictory >= 5){
        return;
    }
    
    if (winner == 'player') {
        userVictories += 1;
        const player = document.querySelector('.number.player');
        player.textContent = `${userVictories}`;
        userVictory +=1;
        dediceWinner(userVictory,machineVictory);
    } else if (winner == 'machine') {
        machineVictories += 1;
        const machine = document.querySelector('.number.machine');
        machine.textContent = `${machineVictories}`;
        machineVictory += 1;
        dediceWinner(userVictory,machineVictory);
    }
}

// Se agregan eventListeners a los botones.

const rps = Array.from(document.querySelectorAll('.rps'));
rps.forEach(choice => choice.addEventListener('click', singleRound));
rps.forEach(buttons => buttons.addEventListener('transitionend',removeTransition));





