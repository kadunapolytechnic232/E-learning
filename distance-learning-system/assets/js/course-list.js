// Sample 20 Computer Science Courses
const courses = [
    { id: 1, title: "HTML & CSS", description: "Learn how to design web pages using HTML and CSS.", image: "../assets/images/courses.png", progress: 80 },
    { id: 2, title: "JavaScript Basics", description: "Learn basic JavaScript programming for web development.", image: "../assets/images/courses.png", progress: 60 },
    { id: 3, title: "Advanced JavaScript", description: "Deep dive into JavaScript concepts like closures, async, and DOM manipulation.", image: "../assets/images/courses.png", progress: 50 },
    { id: 4, title: "ReactJS Fundamentals", description: "Build modern user interfaces with ReactJS.", image: "../assets/images/courses.png", progress: 40 },
    { id: 5, title: "Node.js & Express", description: "Create backend applications using Node.js and Express framework.", image: "../assets/images/courses.png", progress: 30 },
    { id: 6, title: "Database Management", description: "Understand relational databases and SQL queries.", image: "../assets/images/courses.png", progress: 20 },
    { id: 7, title: "MongoDB & NoSQL", description: "Learn about NoSQL databases and data modeling using MongoDB.", image: "../assets/images/courses.png", progress: 10 },
    { id: 8, title: "Firebase Integration", description: "Integrate Firebase for authentication and database.", image: "../assets/images/courses.png", progress: 25 },
    { id: 9, title: "Python Programming", description: "Learn Python programming for web, data, and automation.", image: "../assets/images/courses.png", progress: 60 },
    { id: 10, title: "Data Structures & Algorithms", description: "Master essential DS & algorithms for programming.", image: "../assets/images/courses.png", progress: 70 },
    { id: 11, title: "Object-Oriented Programming (OOP)", description: "Learn OOP concepts in Java or C++.", image: "../assets/images/courses.png", progress: 50 },
    { id: 12, title: "Software Engineering", description: "Understand software development lifecycle and methodologies.", image: "../assets/images/courses.png", progress: 30 },
    { id: 13, title: "Web Security", description: "Learn essential web security practices and protection techniques.", image: "../assets/images/courses.png", progress: 20 },
    { id: 14, title: "Mobile App Development", description: "Build mobile applications using React Native or Flutter.", image: "../assets/images/courses.png", progress: 35 },
    { id: 15, title: "Computer Networks", description: "Understand networking concepts, protocols, and architecture.", image: "../assets/images/courses.png", progress: 45 },
    { id: 16, title: "Operating Systems", description: "Learn OS concepts including processes, threads, and memory management.", image: "../assets/images/courses.png", progress: 55 },
    { id: 17, title: "Artificial Intelligence Basics", description: "Introduction to AI concepts and applications.", image: "../assets/images/courses.png", progress: 25 },
    { id: 18, title: "Machine Learning", description: "Learn supervised and unsupervised machine learning algorithms.", image: "../assets/images/courses.png", progress: 15 },
    { id: 19, title: "Cloud Computing", description: "Understand cloud services, AWS, and deployment.", image: "../assets/images/courses.png", progress: 30 },
    { id: 20, title: "Cybersecurity Fundamentals", description: "Protect systems and networks from cyber threats.", image: "../assets/images/courses.png", progress: 40 }
];





// Render courses dynamically
const coursesContainer = document.getElementById("coursesContainer");
coursesContainer.innerHTML = ""; // clear container

courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
        <img src="${course.image}" alt="${course.title}">
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <button class="btn btn-primary">View Lessons</button>
    `;
    // Navigate to course content page
    card.querySelector("button").addEventListener("click", () => {
        window.location.href = `course-content.html?id=${course.id}`;
    });
    coursesContainer.appendChild(card);
});

// Hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});





