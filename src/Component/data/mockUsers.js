// Single source of truth for all mock users (Suggested Mock Data requirement).
// Login checks credentials against this array, and StudentSlice derives its
// initial student records from the same array — so a student's login id
// always matches their student record, and enrollments never point to the
// wrong person. In a real app this file is what gets replaced by an API call.

export const users = [
  { id: 1, name: "Admin", email: "admin@test.com", password: "admin123", role: "admin" },
  { id: 2, name: "Ali", email: "ali@test.com", password: "student123", role: "student", marks: 85, active: true },
  { id: 3, name: "Sara", email: "sara@test.com", password: "student123", role: "student", marks: 45, active: true },
  { id: 4, name: "Ahmed", email: "ahmed@test.com", password: "student123", role: "student", marks: 72, active: true },
  { id: 5, name: "Zain", email: "zain@test.com", password: "student123", role: "student", marks: 30, active: false },
];
