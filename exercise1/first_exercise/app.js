/*
    Objective: Init archive, to get all the data to input in the object aluno, and call the funcion to print for the views folder 
    Author: Guilherme Joviniano de Sousa
    Data: 08/11/2022
    version: 1.0.0
*/


const rl = require('readline-sync')
const { AlunoController, alunos } = require(`./controllers/Aluno`)
const summary = require(`./views/summary`)

// Instance of the readline object

// Getters of the necessary input datas  
const getNames = function() {
    const student = rl.question('Digite o nome do aluno(a): ');
    const teacher = rl.question('Digite o nome do professor(a): ')
    return { student, teacher }
};

const getGenres = function() {
    const studentGenre = rl.question('Digite o sexo biologico do aluno(a) [M/F]:')
    const teacherGenre = rl.question('Digite o sexo biologico do professor(a) [M/F]:')
    if(studentGenre.toLowerCase() == `f` || studentGenre.toLowerCase() == `m` || teacherGenre.toLowerCase() == `f` || teacherGenre.toLowerCase() == `m`)
      return { studentGenre, teacherGenre }
    console.log(`Digite um genero valido!`)
    process.exit();
};

const getCurseName = function() {
    const curse =  rl.question('Digite o nome do curso: ')
    return { curse };
};

const getGradeName = function() {
    const subject =  rl.question('Digite o nome da disciplina: ')
    return { subject }
}

const getGradeValues = function() {
    const grades = [];
    let grade;
    for(let i = 0; i < 4; ++i) {
        grade = parseInt( rl.question(`Digite o valor da nota ${i + 1}: `));
        if(grade > 100 || grade < 0 || isNaN(grade)) { // Filter the numbers included in the grades array 
            console.log('Digite um valor entre 10 e 100, ou algum valor que seja valido!');
            process.exit();
        }  
        grades.push(parseInt(grade)); 
    } 
    return { grades };
}

const getAlunoData = function() {
    const { student, teacher } = getNames(); // names student and teacher
    const { studentGenre, teacherGenre } =  getGenres(); // genres student and teacher
    const { curse } =  getCurseName();  // curse name of the student 
    const { subject } =  getGradeName(); // grande name of the student -> change for subject the name of the all Scopo!
    const { grades } =  getGradeValues(); // the 4 grades to know the status of the student 
    return { student, teacher, studentGenre, teacherGenre, curse, subject, grades }
}

const knowExam = function () {
    const exame = rl.question(`Digite a nota de exame: `)
    if (exame >= 60 && aluno.average >= 60) aluno.status = 'APROVADO'
    else aluno.status = 'REPROVADO'
    return exame
}

const alunoController = new AlunoController();
const aluno = alunoController.store(getAlunoData());

if (aluno.status == "EXAME") aluno.exam = knowExam()
else aluno.exam = "Nao Houve Exame"

if (typeof(aluno.exam) != 'string') aluno.finalGrade = (parseFloat(aluno.average) + parseFloat(aluno.exam)) / 2
else aluno.finalGrade = aluno.average;

summary(aluno)

// adicionar caso verdadeira o condicional a nota do exame do aluno!
//Exibir de maneira correta os dados na tela!
