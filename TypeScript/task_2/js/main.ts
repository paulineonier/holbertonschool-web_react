// Interface pour les Directeurs
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Interface pour les Enseignants
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Classe Director qui implémente l'interface DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Classe Teacher qui implémente l'interface TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Fonction pour créer un employé en fonction du salaire
function createEmployee(salary: number | string): Director | Teacher {
  let numericSalary = 0;

  // Vérification si le salaire est une chaîne (ex: "$500"), et extraction de la valeur numérique
  if (typeof salary === 'string') {
    numericSalary = parseFloat(salary.replace(/[^\d.-]/g, '')); // On supprime tout sauf les chiffres et le point
  } else if (typeof salary === 'number') {
    numericSalary = salary;
  }

  // Si le salaire est inférieur à 500, on retourne un Teacher, sinon un Director
  if (numericSalary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Type prédicat pour vérifier si l'employé est un Director
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Fonction pour exécuter le travail en fonction de l'employé
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());  // Si Director, on appelle workDirectorTasks
  } else {
    console.log(employee.workTeacherTasks());   // Si Teacher, on appelle workTeacherTasks
  }
}

// Test de la fonction createEmployee et executeWork
const employee1 = createEmployee(200);
executeWork(employee1);  // Affiche 'Getting to work' pour Teacher

const employee2 = createEmployee(1000);
executeWork(employee2);  // Affiche 'Getting to director tasks' pour Director

const employee3 = createEmployee('$500');
executeWork(employee3);  // Affiche 'Getting to director tasks' pour Director

const employee4 = createEmployee('400$');
executeWork(employee4);  // Affiche 'Getting to work' pour Teacher

const employee5 = createEmployee('250');
executeWork(employee5);  // Affiche 'Getting to work' pour Teacher

