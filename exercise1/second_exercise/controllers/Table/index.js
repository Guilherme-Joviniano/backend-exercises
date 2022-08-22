/*
    Objective: Archive with the logic to print the correctly table in the terminal
    Author: Guilherme Joviniano de Sousa
    Data: 08/11/2022
    version: 1.0.0
*/

module.exports = (tableInit, tableEnd, counterInit, counterEnd) => {
    for(let table = tableInit; table <= tableEnd; ++table) {
        console.log(`Tabuada do ${table}`)
        for(let counter = counterInit; counter <= counterEnd; counter++) {
            let value = table * counter;
            console.log(`${table} X ${counter} = ${value}`);
        }
    }
}

