/*
    Objective: View for print the object aluno 
    Author: Guilherme Joviniano de Sousa
    Data: 08/11/2022
    version: 1.0.0
*/

module.exports = function summary(aluno) {
    const alunoGenre = aluno.studentGenre.toUpperCase() == `M`? "o" : 'a'
    const teacherGenre = aluno.teacherGenre.toUpperCase() == `M`? "" : 'a'

    console.log(
        `
        ${alunoGenre} alun${alunoGenre} foi ${aluno.status} na disciplina ${aluno.subject} \n
        Curso: ${aluno.curse} \n
        Professor${teacherGenre}: ${aluno.teacher} \n
        Notas: ${ aluno.grades } \n
        Exame: ${ aluno.exam } \n
        Média Final: ${aluno.average} \n
        Média Final Exame: ${aluno.finalGrade}
        `
    )
}