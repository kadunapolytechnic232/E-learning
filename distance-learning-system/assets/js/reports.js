// ===============================
// Firebase Initialization
// ===============================
import { app, db, ref, onValue } from "./firebase.js";

// ===============================
// DOM Elements
// ===============================
const studentSelect = document.getElementById("studentSelect");
const reportList = document.getElementById("reportList");

// ===============================
// Local Array for Students
// ===============================
let StudentsArray = [];

// ===============================
// Default Progress Template
// ===============================
const defaultProgress = [
  { course: "HTML & CSS", progress: "0%", quizScore: "0/10" },
  { course: "JavaScript Basics", progress: "0%", quizScore: "0/10" },
  { course: "Python", progress: "0%", quizScore: "0/10" },
  { course: "Java", progress: "0%", quizScore: "0/10" },
  { course: "C Programming", progress: "0%", quizScore: "0/10" },
  { course: "Data Structures", progress: "0%", quizScore: "0/10" },
  { course: "Algorithms", progress: "0%", quizScore: "0/10" },
  { course: "Database Management", progress: "0%", quizScore: "0/10" },
  { course: "Advanced SQL", progress: "0%", quizScore: "0/10" }
];

// ===============================
// Fetch All Students from Firebase
// ===============================
function fetchStudents() {
  const studentsRef = ref(db, "students");

  onValue(studentsRef, (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();

      // Convert Firebase object to array
      StudentsArray = Object.keys(data).map((key) => {
        let studentData = data[key];

        // ✅ Ensure progress always has all 9 courses
        let updatedProgress = defaultProgress.map((course) => {
          const existing = studentData.progress?.find(p => p.course === course.course);
          return existing || course;
        });

        return {
          id: key,
          ...studentData,
          progress: updatedProgress
        };
      });

      populateDropdown();
    } else {
      StudentsArray = [];
      studentSelect.innerHTML = "<option>No students found</option>";
      reportList.innerHTML = "";
    }
  });
}

// ===============================
// Populate Dropdown
// ===============================
function populateDropdown() {
  studentSelect.innerHTML = "";

  // Filter only students
  const studentUsers = StudentsArray.filter(s => s.role === "Student");

  studentUsers.forEach((student) => {
    const option = document.createElement("option");
    option.value = student.id; // Use Firebase key
    option.textContent = student.name;
    studentSelect.appendChild(option);
  });

  // Display first student by default
  if (studentUsers.length > 0) {
    studentSelect.value = studentUsers[0].id;
    displayReport(studentUsers[0].id);
  }
}

// ===============================
// Display Student Progress
// ===============================
function displayReport(studentId) {
  // ✅ FIX: ID is a string, so compare as string
  const student = StudentsArray.find((s) => s.id === studentId);
  if (!student) return;
  console.log(student)
  reportList.innerHTML = `
    <h2>${student.name} - Progress Report</h2>
    <table border="1" cellpadding="10" cellspacing="0">
      <tr>
        <th>Course</th>
        <th>Progress</th>
        <th>Quiz Score</th>
      </tr>
      ${student.progress
        .map(
          (p) => `
        <tr>
          <td>${p.course}</td>
          <td>${p.progress}</td>
          <td>${p.quizScore}</td>
        </tr>
      `
        )
        .join("")}
    </table>
  `;
}

// ===============================
// Dropdown Change Event
// ===============================
studentSelect.addEventListener("change", (e) => {
  displayReport(e.target.value);
});

// ===============================
// Initialize
// ===============================
fetchStudents();




// Hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});



