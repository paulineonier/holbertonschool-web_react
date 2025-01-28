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
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher(); // Si le salaire est inférieur à 500, on retourne un Teacher
  } else {
    return new Director(); // Sinon, on retourne un Director
  }
}

// Test de la fonction createEmployee
console.log(createEmployee(200) instanceof Teacher ? 'Teacher' : 'Director');  // Affiche 'Teacher'
console.log(createEmployee(1000) instanceof Director ? 'Director' : 'Teacher'); // Affiche 'Director'
console.log(createEmployee('$500') instanceof Director ? 'Director' : 'Teacher'); // Affiche 'Director'

