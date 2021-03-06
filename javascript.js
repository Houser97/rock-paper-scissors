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

function RESET(e){
    machineVictory = 0;
    userVictory = 0;

    // Se agrega efecto al boton seleccionado.
    
    e.target.classList.add('effectButton');
    

    const player1 = document.querySelector('.number.player');
    const machine = document.querySelector('.number.machine');
    player1.textContent = `${0}`;
    machine.textContent = `${0}`;

    const electionPlayer = document.querySelector('.election.player');
    electionPlayer.textContent = "";

    const electionMachine = document.querySelector('.election.machine');
    electionMachine.textContent = "";

    const winnerPlayer = document.querySelector('.counter.player');
    const winnerMachine = document.querySelector('.counter.machine');

    winnerPlayer.classList.remove('effect');
    winnerMachine.classList.remove('effect');
}

function singleRound(playerPlay) {
    // Se agrega efecto al boton seleccionado.
    const button = document.querySelector(`button[data-rps=${playerPlay.target.dataset.rps}]`);
    button.classList.add('effectButton');

    computerPlay = computerElection();
    playerPlay = playerPlay.target.dataset.rps;

    if (computerPlay == 'Rock' && playerPlay == 'Paper') {
        game('player', computerPlay = computerPlay, playerPlay = playerPlay);
        return 'You win! Paper beats Rock'
    }
    if (computerPlay == 'Rock' && playerPlay == 'Scissors') {
        game('machine', computerPlay = computerPlay, playerPlay = playerPlay);
        return 'You lose! Rock beats Scissors'
    }
    if (computerPlay == 'Rock' && playerPlay == 'Rock') {
        game('draw', computer = computerPlay, player = playerPlay);
        return 'It is a draw!'
    }
    if (computerPlay == 'Paper' && playerPlay == 'Paper') {
        game('draw', computer = computerPlay, player = playerPlay);
        return 'It is a draw!'
    }
    if (computerPlay == 'Paper' && playerPlay == 'Scissors') {
        game('player', computer = computerPlay, player = playerPlay);
        return 'You win! Scissors beat Paper'
    }
    if (computerPlay == 'Paper' && playerPlay == 'Rock') {
        game('machine', computer = computerPlay, player = playerPlay);
        return 'You lose! Paper beats Rock'
    }
    if (computerPlay == 'Scissors' && playerPlay == 'Paper') {
        game('machine', computer = computerPlay, player = playerPlay);
        return 'You lose! Scissors beat Paper'
    }
    if (computerPlay == 'Scissors' && playerPlay == 'Rock') {
        game('player', computer = computerPlay, player = playerPlay);
        return 'You win! Rock beats Scissors'
    }
    if (computerPlay == 'Scissors' && playerPlay == 'Scissors') {
        game('draw', computer= computerPlay, player = playerPlay);
        return 'It is a draw!'
    }
}


function game(winner, computer, player, machineVictories = machineVictory, userVictories = userVictory) {
    
    if(userVictory >= 5){
        return;
    } else if(machineVictory >= 5){
        return;
    }

    const player1 = document.querySelector('.number.player');
    const machine = document.querySelector('.number.machine');
    player1.textContent = `${userVictories}`;
    machine.textContent = `${machineVictories}`;

    const electionPlayer = document.querySelector('.election.player');
    electionPlayer.textContent = player;

    const electionMachine = document.querySelector('.election.machine');
    electionMachine.textContent = computer;

    if (winner == 'player') {
        userVictories += 1;
        player1.textContent = `${userVictories}`;
        userVictory +=1;
        dediceWinner(userVictory,machineVictory);
    } else if (winner == 'machine') {
        machineVictories += 1;
        machine.textContent = `${machineVictories}`;
        machineVictory += 1;
        dediceWinner(userVictory,machineVictory);
    } 
}

// Se agregan eventListeners a los botones.

const rps = Array.from(document.querySelectorAll('.rps'));
rps.forEach(choice => choice.addEventListener('click', singleRound));
rps.forEach(buttons => buttons.addEventListener('transitionend',removeTransition));

const reset = document.querySelector('.reset');
reset.addEventListener('click', RESET);
reset.addEventListener('transitionend', removeTransition);





