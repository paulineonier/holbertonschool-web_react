// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 22,
  location: "New York",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Johnson",
  age: 25,
  location: "California",
};

// Store the students in an array
const studentsList: Student[] = [student1, student2];

// Render a table and append rows for each student
const body = document.body;

// Create the table element
const table = document.createElement("table");
table.style.width = "50%";
table.style.border = "1px solid black";

table.createTHead().appendChild(document.createElement("tr"));
const headerRow = table.tHead!.rows[0];
const headers = ["First Name", "Location"];
headers.forEach((header) => {
  const th = document.createElement("th");
  th.textContent = header;
  th.style.border = "1px solid black";
  headerRow.appendChild(th);
});

// Append rows to the table
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = "1px solid black";
  row.appendChild(firstNameCell);

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.border = "1px solid black";
  row.appendChild(locationCell);

  table.appendChild(row);
});

// Append the table to the document body
body.appendChild(table);
