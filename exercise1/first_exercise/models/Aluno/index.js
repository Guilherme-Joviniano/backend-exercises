/*
    Objective: Model for the object aluno
    Author: Guilherme Joviniano de Sousa
    Data: 08/11/2022
    version: 1.0.0
*/

module.exports = class Aluno {
    constructor({student, teacher, studentGenre, teacherGenre, curse, subject, grades}) {
        this.finalGrade;
        this.exam;
        this.student = student; 
        this.teacher = teacher;
        this.studentGenre = studentGenre;
        this.teacherGenre = teacherGenre;
        this.curse = curse;
        this.subject = subject;
        this.grades = grades;
        this.average = this.calcAverage();
        this.status = this.knowStatus();
        this.id = this.generateID();
    }
    generateID() {
        return Date.now().toString(36)
    }
    calcAverage() {
        return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
    }
    knowStatus() {
        if (this.average >= 70.00) return "APROVADO";
        if (this.average < 70.00 && this.average >= 50.00) return "EXAME";
        return "REPROVADO";
    }
}