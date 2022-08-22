/*
    Objective: Controller for the model Aluno
    Author: Guilherme Joviniano de Sousa
    Data: 08/11/2022
    version: 1.0.0
*/

const Aluno = require(`../../models/Aluno`)
const alunos = []

class AlunoController {
    store = (data) => {
        const aluno = new Aluno(data);
        alunos.push(aluno);
        return aluno;
    }

}

module.exports = { AlunoController, alunos }