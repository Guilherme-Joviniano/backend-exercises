/*
    Objective: Archive with the logic to slice the odds and evens numbers in two arrays
    Author: Guilherme Joviniano de Sousa
    Data: 08/11/2022
    version: 1.0.0
*/

module.exports = (init, end) => {
    let evens = [] //par 
    let odds = [] //impar
    for(let number = init; number < end; number++) {
        if(number % 2 ==  0) evens.push(number)
        else odds.push(number)
    }
    return { evens, odds }
} 
