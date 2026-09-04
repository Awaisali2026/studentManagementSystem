const students = [
  { id: 1, name: "Ali", marks: 85 },
  { id: 2, name: "Sara", marks: 45 },
  { id: 3, name: "Ahmed", marks: 72 },
  { id: 4, name: "Zain", marks: 30 },
];

// Question 1 — Student Data 

// 1: Get students whose marks are 50 or higher.
const passedStudent = students.filter((student) => student.marks >= 50);
// console.log(passedStudent)

// 2: Create an array containing only student names.
const studentName = students.map((student) => student.name);
// console.log(studentName)

// 3: Find the student with id 3.
const studentData = students.find((data) => data.id === 3);
// console.log(studentData)

// 4: Calculate total marks using reduce().

const totalMarks = students.reduce(
  (total, student) => total + student.marks,
  0,
);

// console.log(totalMarks)

// Question 2 — Immutable Object Update 
const user = { 
  id: 1, 
  name: "Farhan", 
  age: 25, 
  address: { 
    city: "Karachi", 
    country: "Pakistan" 
  } 
}; 
// Change age to 26. 
const ageChange = {...user, age: 26};

// console.log(ageChange)
// console.log(user)

// Change city to "Lahore". 
const cityChange = {...ageChange, address: {
    ...ageChange.address, city: "Lahore"
} }
// console.log(cityChange)

const {name, age, address} = cityChange;

// console.log(name)
// console.log(age)
// console.log(address.city)
