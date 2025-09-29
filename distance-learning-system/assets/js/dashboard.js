// Get logged-in student from localStorage
const student = JSON.parse(localStorage.getItem("loggedInStudent")) || { name: "" };

// List of all course titles (match your courseContents array)
const courseTitles = [
    "HTML & CSS",
    "JavaScript Basics",
    "Python Programming",
    "Java Programming",
    "C Programming",
    "C++ Programming",
    "Data Structures",
    "Algorithms",
    "Database Systems",
    "SQL & MySQL",
    "Firebase",
    "React JS",
    "Node JS",
    "Express JS",
    "MongoDB",
    "Python Django",
    "Machine Learning",
    "Artificial Intelligence",
    "Cybersecurity",
    "Software Engineering"
];

// Build courses array with progress from localStorage
const courses = courseTitles.map((title, index) => {
    const courseId = index + 1; // IDs start from 1
    const savedScore = localStorage.getItem(`score_course_${courseId}`);
    const progress = savedScore ? parseInt(savedScore) : 0; // default 0 if no score
    return { title, progress };
});

// Set student name
document.getElementById("studentName").textContent = student.name;

// Set total courses
document.getElementById("totalCourses").textContent = courses.length;

// Calculate total progress
let totalProgress = Math.round(courses.reduce((sum, c) => sum + c.progress, 0) / courses.length);
document.getElementById("totalProgress").textContent = totalProgress + "%";

// Calculate completed courses
let completed = courses.filter(c => c.progress >= 100).length;
document.getElementById("completedCourses").textContent = completed;

// Render course list
const courseListDiv = document.getElementById("courseList");
courseListDiv.innerHTML = ""; // Clear existing content
courses.forEach(course => {
    const courseCard = document.createElement("div");
    courseCard.className = "course-card";
    courseCard.innerHTML = `
        <h3>${course.title}</h3>
        <p>Progress: ${course.progress}%</p>
        <div class="progress-bar">
            <div class="progress-bar-inner" style="width:${course.progress}%;"></div>
        </div>
    `;
    courseListDiv.appendChild(courseCard);
});

// Hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

