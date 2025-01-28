interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allows adding any extra property dynamically
}

interface Directors extends Teacher {
  numberOfReports: number; // The number of reports for the Director
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17, // Required attribute for Directors
};

console.log(director1);

// should print
// {
//   firstName: "John",
//   fullTimeEmployee: true,
//   lastName: "Doe",
//   location: "London",
//   numberOfReports: 17
// }

