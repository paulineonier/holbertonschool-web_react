// task_1/js/main.ts

// Définition de l'interface Teacher
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  // Permet d'ajouter des propriétés supplémentaires
  [propName: string]: any;
}

// Définition de l'interface Directors qui étend Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Exemple d'utilisation
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Interface printTeacherFunction
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implémentation de la fonction printTeacher
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Exemple d'utilisation de printTeacher
console.log(printTeacher("John", "Doe"));

// Interface pour le constructeur de StudentClass
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface pour la classe StudentClass
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implémentation de la classe StudentClass
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Exemple d'utilisation
const student1 = new StudentClass("Alice", "Smith");
console.log(student1.displayName()); // Alice
console.log(student1.workOnHomework()); // Currently working

