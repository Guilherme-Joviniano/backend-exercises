import * as readline from 'node:readline/promises';
import {exit, stdin as input, stdout as output } from 'node:process'
import { alunoController, alunos }  from './controllers/Aluno';

// Instance of the readline object
const rl = readline.createInterface({ input, output });

// Getters of the necessary input datas  
const getNames = async function() {
    const studentName = await rl.question('Digite o nome do aluno: ');
    const teacherName = await rl.question('Digite o nome do professor: ')
    return { studentName, teacherName }
};
const getGenres = async function() {
    const studentGenre = await rl.question('Digite o sexo biologico do aluno: ')
    const teacherGenre = await rl.question('Digite o sexo biologico do professor: ')
    return { studentGenre, teacherGenre }
};
const getCurseName = async function() {
    const curseName = await rl.question('Digite o nome do curso: ')
    return { curseName };
};
const getGradeName = async function() {
    const gradeName = await rl.question('Digite o nome da disciplina: ')
    return { gradeName }
}
const getGradeValues = async function() {
    const grades = [];
    let grade;
    for(let i = 0; i < 4; ++i) {
        grade = parseInt(await rl.question(`Digite o valor da nota ${i + 1}: `));
        if(grade > 100 || grade < 0 || isNaN(grade)) { // Filter the numbers included in the grades array 
            console.log('Digite um valor entre 10 e 100, ou algum valor que seja valido!');
            exit();
        }  
        grades.push(parseInt(grade)); 
    } 
    return { grades };
}

const { student, teacher } = await getNames(); // names student and teacher
const { studentGenre, teacherGenre } = await getGenres(); // genres student and teacher
const { curseName } = await getCurseName();  // curse name of the student 
const { gradeName } = await getGradeName(); // grande name of the student -> change for subject the name of the all Scopo!
const { grades } = await getGradeValues(); // the 4 grades to know the status of the student 
 
alunoController.store({ student, teacher, studentGenre, teacherGenre, curseName, gradeName, grades });
console.log(alunos);


rl.close();
// adicionar caso verdadeira o condicional a nota do exame do aluno!
//Exibir de maneira correta os dados na tela!
