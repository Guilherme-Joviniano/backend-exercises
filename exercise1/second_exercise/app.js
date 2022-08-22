/*
    Objective: Init archive to get the data for print the table, and catch the errors in the inputs 
    Author: Guilherme Joviniano de Sousa
    Data: 08/11/2022
    version: 1.0.0
*/

const table = require(`./controllers/Table`);
const input = require(`readline-sync`)

try {
    const tableInit = parseInt(input.question(`digite o inicio da tabuada (< 2) (>100): `))
    const tableEnd = parseInt(input.question(`digite o fim da tabuada: ( > 100): `))

    if (tableInit < 2 || tableEnd > 100 || tableInit > tableEnd || (isNaN(tableInit) || isNaN(tableEnd))) throw new Error(`Table out of bonds`)

    const counterInit = parseInt(input.question(`Digite o inicio do calculo da tabuada (0 - 50): `))
    const counterEnd = parseInt(input.question(`Digite o fim do calculo da tabuada (0 - 50): `))

    if (counterInit < 0 || counterEnd > 50 || counterInit > counterEnd || (isNaN(counterInit) || isNaN(counterEnd))) throw new Error(`Counter out of bonds`)
    
    table(tableInit, tableEnd, counterInit, counterEnd);
}  catch(e) {
    console.log(e)
    process.exit()
}