// Sample courses (same as course-list.js)
const courses = [
    { id: 1, title: "HTML & CSS", description: "Learn how to design web pages using HTML and CSS.", image: "../assets/images/courses.png", progress: 80 },
    { id: 2, title: "JavaScript Basics", description: "Learn basic JavaScript programming for web development.", image: "../assets/images/accessible.png", progress: 60 },
    { id: 3, title: "Firebase Integration", description: "Integrate Firebase to manage your web app backend.", image: "../assets/images/progress.png", progress: 40 },
    { id: 4, title: "Database Management", description: "Understand databases and CRUD operations.", image: "../assets/images/courses.png", progress: 20 }
];

// Get course ID from URL
const urlParams = new URLSearchParams(window.location.search);
const courseId = parseInt(urlParams.get("id"));
const course = courses.find(c => c.id === courseId);

// Render course detail
const courseDetailDiv = document.getElementById("courseDetail");
if(course){
    courseDetailDiv.innerHTML = `
        <div class="course-detail-card">
            <img src="${course.image}" alt="${course.title}">
            <h1>${course.title}</h1>
            <p>${course.description}</p>
            <h3>Progress: ${course.progress}%</h3>
            <div class="progress-bar">
                <div class="progress-bar-inner" style="width:${course.progress}%;"></div>
            </div>
            <button class="btn btn-primary" onclick="alert('Quiz/Content not implemented yet')">Start Course</button>
        </div>
    `;
} else {
    courseDetailDiv.innerHTML = `<p>Course not found.</p>`;
}

// Hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});