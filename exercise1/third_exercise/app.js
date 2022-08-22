/*
    Objective: Init archive to get all the data and print the correctly numbers in the terminal
    Author: Guilherme Joviniano de Sousa
    Data: 08/11/2022
    version: 1.0.0
*/

const input = require(`readline-sync`)
const sliceNumbers = require(`./controllers/sliceNumbers`);

const init = parseInt(input.question(`Digite o valor inicial (0, 500)`))
if (init < 0 || init > 500 || isNaN(init)) {
    console.log(`Digite um valor que esteja dentro de 0 a 500`)
    process.exit()
}
const end = parseInt(input.question(`Digite o valor final (100, 1000)`))
if (end < 100 || end > 1000 || init > end || isNaN(end)) {
    console.log(`Digite um valor maior que o inicial e que esteja dentro da faixa permitida!`)
    process.exit()
}

const { evens, odds } = sliceNumbers(init, end);

const show = parseInt(input.question(`Escolha qual numeros quer ver \n [1] - Pares \n [2] - Impares \n [3] - Ambos \n`))
if( (!show == 1) || (!show == 2) || (!show == 3) ) {
    console.log(`Digite um valor de escolha valido!`);
    process.exit()
}

const showValues = (show) => {
    switch(show) {
        case 1:
            console.log(`os numeros pares encontrados foram \n ${evens}`)
            break
        case 2: 
            console.log(`os numeros impares encotrados foram \n ${odds}`)
            break
        case 3:
            console.log(`Os numeros pares foram ${evens} \n Os numeros impares foram ${odds}`)
            break
    }
}

showValues(show);