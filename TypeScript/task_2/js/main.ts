// Définition des interfaces
interface Employee {
    id: number;
    firstName: string;
    lastName: string;
}

interface Director extends Employee {
    experience: number; // Années d'expérience
}

interface Teacher extends Employee {
    subject: Subjects; // Matière enseignée
}

// Type littéral pour les matières
type Subjects = 'Math' | 'History';

// Création d'un employé
function createEmployee(id: number): Employee {
    return {
        id,
        firstName: 'John',
        lastName: 'Doe',
    };
}

// Vérifie si l'employé est un directeur
function isDirector(employee: Employee): employee is Director {
    return (employee as Director).experience !== undefined;
}

// Tâches d'un directeur
function workDirectorTasks(): void {
    console.log('Getting to director tasks');
}

// Tâches d'un enseignant
function workTeacherTasks(): void {
    console.log('Getting to work');
}

// Exécute le travail en fonction du type d'employé
function executeWork(employee: Employee): void {
    if (isDirector(employee)) {
        workDirectorTasks();
    } else {
        workTeacherTasks();
    }
}

// Fonction pour enseigner une classe
function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math'; // Retourne le message pour Math
    } else if (todayClass === 'History') {
        return 'Teaching History'; // Retourne le message pour History
    }
    return 'Invalid Subject'; // Ceci ne devrait pas être atteint
}

// Tests de la fonction executeWork
console.log(executeWork(createEmployee(200))); // Devrait afficher "Getting to work"

// Création d'un employé directeur pour le test
const director = createEmployee(1000) as Director;
director.experience = 5; // Ajoute de l'expérience au directeur
console.log(executeWork(director)); // Devrait afficher "Getting to director tasks"

// Tests de la fonction teachClass
console.log(teachClass('Math'));    // Devrait afficher "Teaching Math"
console.log(teachClass('History')); // Devrait afficher "Teaching History"
