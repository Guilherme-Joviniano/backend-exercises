// controller to object Student
const { Aluno } = require('../../models/Aluno');
const alunos = [];

class AlunoController {
    store = (data) => {
        const aluno = new Aluno(data);
        alunos.push(aluno);
        return aluno;
    }
    delete = (id) => {
        // try to select via id in the array alunos the correctly obj
        try {
            
            return {message: 'Sucefful deleted'}    
        } catch (e) {
            return { message: 'Unsucefful action! (verify the typed ID)' }
        }
        
    } 

}

module.exports = new AlunoController();
module.exports = alunos;