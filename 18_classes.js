class Student {

    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }

    // instance methods
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }

    markLate(){
        this.tardies += 1;
        if (this.tardies >= 3) return "YOU ARE EXPELLED!!!!"
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }

    addScore(score){
        this.scores.push(score);
        return this.scores;
    }

    calculateAverage(){
        let sum = this.scores.reduce((a,b) => a+b);
        return sum/this.scores.length;
    }

    // class methods
    static enrollStudents(){
        return "ENROLLING STUDENTS!";
    }
}

let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("John", "Doe");

firstStudent.addScore(80)
firstStudent.addScore(90)
console.log(firstStudent.calculateAverage());
console.log(Student.enrollStudents());