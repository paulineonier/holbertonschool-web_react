// Interface Teacher
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Permet d'ajouter dynamiquement des propriétés
}

// Exemple d'objet Teacher
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // Propriété ajoutée dynamiquement
};

console.log(teacher3);

// Interface Directors qui étend Teacher et ajoute l'attribut numberOfReports
interface Directors extends Teacher {
  numberOfReports: number; // Le nombre de rapports pour le directeur
}

// Exemple d'objet Directors
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17, // Attribut requis pour Directors
};

console.log(director1);

// Interface pour la fonction printTeacher
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Fonction printTeacher qui correspond à l'interface
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

// Affichage dans le DOM
const teacherName = printTeacher("John", "Doe");
const outputDiv = document.createElement('div');
outputDiv.textContent = teacherName; // Affiche "J. Doe" dans la page
document.body.appendChild(outputDiv);

// Ajouter les objets teacher3 et director1 dans la page
const teacherDetails = document.createElement('pre');
teacherDetails.textContent = JSON.stringify(teacher3, null, 2);
document.body.appendChild(teacherDetails);

const directorDetails = document.createElement('pre');
directorDetails.textContent = JSON.stringify(director1, null, 2);
document.body.appendChild(directorDetails);

// ------------------------------------------------------------------------------

// Interface pour le constructeur de StudentClass
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Interface pour la classe StudentClass
interface StudentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Classe StudentClass qui implémente l'interface
class Student implements StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Création d'un étudiant et test de la classe
const student1: StudentClass = new Student("Jane", "Smith");

const studentOutputDiv = document.createElement('div');
studentOutputDiv.textContent = `${student1.displayName()} is ${student1.workOnHomework()}`;
document.body.appendChild(studentOutputDiv);

// Affichage de l'objet student1 dans la page
const studentDetails = document.createElement('pre');
studentDetails.textContent = JSON.stringify(student1, null, 2);
document.body.appendChild(studentDetails);
