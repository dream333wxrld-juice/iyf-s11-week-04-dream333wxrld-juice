// Mini-Project: Student Grade Tracker

const gradeTracker = {
    students: [],
    
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },
    
    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },
    
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;
        const gradesArray = Object.values(student.grades);
        const sum = gradesArray.reduce((total, grade) => total + grade, 0);
        return (sum / gradesArray.length).toFixed(2);
    },
    
    getSubjectAverage(subject) {
        const grades = this.students.map(student => student.grades[subject]).filter(grade => grade !== undefined);
        const sum = grades.reduce((total, grade) => total + grade, 0);
        return (sum / grades.length).toFixed(2);
    },
    
    getTopStudent() {
        let topStudent = null;
        let highestAverage = 0;
        
        for (const student of this.students) {
            const average = parseFloat(this.getStudentAverage(student.name));
            if (average > highestAverage) {
                highestAverage = average;
                topStudent = student.name;
            }
        }
        
        return topStudent;
    },
    
    getStrugglingStudents() {
        return this.students.filter(student => {
            const average = parseFloat(this.getStudentAverage(student.name));
            return average < 70;
        });
    },
    
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },
    
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return "Student not found";
        
        const average = this.getStudentAverage(name);
        const letterGrade = this.getLetterGrade(average);
        
        let report = `Report Card for ${name}\n`;
        report += `==================\n`;
        for (const [subject, grade] of Object.entries(student.grades)) {
            report += `${subject}: ${grade} (${this.getLetterGrade(grade)})\n`;
        }
        report += `==================\n`;
        report += `Average: ${average} (${letterGrade})\n`;
        
        return report;
    }
};

// Test
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("Alice"));      // 91.67
console.log(gradeTracker.getSubjectAverage("math"));       // 75.67
console.log(gradeTracker.getTopStudent());                 // Alice
console.log(gradeTracker.getStrugglingStudents());         // [Charlie]
console.log(gradeTracker.generateReportCard("Alice"));
