function computerPlay() {
    // Extremos del intervalo de numeros aleatorios
    let numMax = 3.1;
    let numMin = 1;

    // Retorna un entero aleatorio entre min (incluido) y max (excluido)
    // ¡Usando Math.round() te dará una distribución no-uniforme!
    return Math.floor(Math.random()*(numMax-numMin)+numMin)
}

console.log(computerPlay())