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

// Exemple d'utilisation de la fonction printTeacher
console.log(printTeacher("John", "Doe")); // Affiche "J. Doe"

