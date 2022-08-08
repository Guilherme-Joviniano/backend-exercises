export default class Aluno {
    constructor({student, teacher, studentGenre, teacherGenre, curse, subject, grades}) {
        this.student = student; 
        this.teacher = teacher;
        this.studentGenre = studentGenre;
        this.teacherGenre = teacherGenre;
        this.curse = curse;
        this.subject = subject;
        this.grades = grades;
        this.average = this.getAverage();
        this.status = this.getStatus();
        this.id = this.generateID();
    }
    
    get average() {
        return this.calcAverage();
    }
    get status() {
        return this.knowStatus();
    }
    calcAverage() {
        return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
    }
    knowStatus() {
        if (this.average >= 70.00) return "APROVADO";
        if (this.average > 70.00 && this.average <= 50.00) return "EXAME";
        return "REPROVADO";
    }
    generateID() {
        return this.hashCode();   
    }
}

 
// Termino da modelagem do objeto Aluno e implenentar a prova de exame no objeto caso o desvio for veradeiro 
