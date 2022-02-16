class Person {
    // declare a constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // greet the person
    greet() {
        console.log(`Hi, I'm ${this.name}!`);
    }

    // set name
    setName(name) {
        this.name = name;
    }

    // set age 
    setAge(age) {
        this.age = age;
    }

    // define a method
    getName() {
        return this.name;
    }

    // define a method
    getAge() {
        return this.age;
    }

    // print user
    person() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// create a student class to inherit from person
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    // override the greet method
    greet = () => {
        console.log(`Hi, I'm ${this.name} and I'm in ${this.grade}!`);
    }

    // The setGrade method
    setGrade = (grade) => this.grade = grade;

    // The getGrade method
    getGrade = () => this.grade;

    // overide the person method
    person = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}

// create a teacher class to inherit from Person class
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    // override the greet method
    greet = () => {
        console.log(`Hi, I'm ${this.name} and I teach ${this.subject}!`);
    }

    // The setSubject method
    setSubject = (subject) => this.subject = subject;

    // The getSubject method
    getSubject = () => this.subject;
}

// create an instances of a student
const john = new Student('John', 20, 'A');
const jane = new Student('Jane', 21, 'B');
const mark = new Student('Mark', 22, 'C');
const bob = new Student('Bob', 23, 'D');
const tom = new Student('Tom', 24, 'E');

// create an array for students
let students = [];

// add all students to the array
students.push(john, jane, mark, bob, tom);

// create an instance of a teacher
let teacher = new Teacher('Jane', 30, 'Math');

// log the students to the console
students.forEach(student => {
    student.person();
});
