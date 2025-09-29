// Full 20 Computer Science courses with 20 lessons each
const courseContents = [
    {
        id: 1,
        title: "HTML & CSS",
        lessons: Array.from({length: 10}, (_, i) => ({
            title: `Lesson ${i+1}: HTML & CSS Topic`,
            video: `https://www.youtube.com/embed/pQN-pnXPaVg?lesson=${i+1}`,
            quizId: 100 + i + 1
        }))
    },
    {
        id: 2,
        title: "JavaScript",
        lessons: Array.from({length: 10}, (_, i) => ({
            title: `Lesson ${i+1}: JavaScript Topic`,
            video: `https://www.youtube.com/embed/W6NZfCO5SIk?lesson=${i+1}`,
            quizId: 200 + i + 1
        }))
    },
    {
        id: 3,
        title: "Python Programming",
        lessons: Array.from({length: 10}, (_, i) => ({
            title: `Lesson ${i+1}: Python Topic`,
            video: `https://www.youtube.com/embed/_uQrJ0TkZlc?lesson=${i+1}`,
            quizId: 300 + i + 1
        }))
    },
    {
        id: 4,
        title: "Java Programming",
        lessons: Array.from({length: 10}, (_, i) => ({
            title: `Lesson ${i+1}: Java Topic`,
            video: `https://www.youtube.com/embed/grEKMHGYyns?lesson=${i+1}`,
            quizId: 400 + i + 1
        }))
    },
    {
        id: 5,
        title: "C Programming",
        lessons: Array.from({length: 10}, (_, i) => ({
            title: `Lesson ${i+1}: C Programming Topic`,
            video: `https://www.youtube.com/embed/KJgsSFOSQv0?lesson=${i+1}`,
            quizId: 500 + i + 1
        }))
    },
    {
        id: 6,
        title: "C++ Programming",
        lessons: Array.from({length: 10}, (_, i) => ({
            title: `Lesson ${i+1}: C++ Topic`,
            video: `https://www.youtube.com/embed/vLnPwxZdW4Y?lesson=${i+1}`,
            quizId: 600 + i + 1
        }))
    },
    {
        id: 7,
        title: "Data Structures",
        lessons: Array.from({length: 10}, (_, i) => ({
            title: `Lesson ${i+1}: Data Structures Topic`,
            video: `https://www.youtube.com/embed/bum_19loj9A?lesson=${i+1}`,
            quizId: 700 + i + 1
        }))
    },
    {
        id: 8,
        title: "Algorithms",
        lessons: Array.from({length: 10}, (_, i) => ({
            title: `Lesson ${i+1}: Algorithms Topic`,
            video: `https://www.youtube.com/embed/8hly31xKli0?lesson=${i+1}`,
            quizId: 800 + i + 1
        }))
    },
    {
        id: 9,
        title: "Database Systems",
        lessons: Array.from({length: 10}, (_, i) => ({
            title: `Lesson ${i+1}: Database Topic`,
            video: `https://www.youtube.com/embed/HXV3zeQKqGY?lesson=${i+1}`,
            quizId: 900 + i + 1
        }))
    },
    {
        id: 10,
        title: "SQL & MySQL",
        lessons: Array.from({length: 10}, (_, i) => ({
            title: `Lesson ${i+1}: SQL Topic`,
            video: `https://www.youtube.com/embed/7S_tz1z_5bA?lesson=${i+1}`,
            quizId: 1000 + i + 1
        }))
    },
    {
        id: 11,
        title: "Firebase",
        lessons: Array.from({length: 10}, (_, i) => ({
            title: `Lesson ${i+1}: Firebase Topic`,
            video: `https://www.youtube.com/embed/9kRgVxULbag?lesson=${i+1}`,
            quizId: 1100 + i + 1
        }))
    },
    {
        id: 12,
        title: "React JS",
        lessons: Array.from({length: 10}, (_, i) => ({
            title: `Lesson ${i+1}: React Topic`,
            video: `https://www.youtube.com/embed/Dorf8i6lCuk?lesson=${i+1}`,
            quizId: 1200 + i + 1
        }))
    },
    {
        id: 13,
        title: "Node JS",
        lessons: Array.from({length: 10}, (_, i) => ({
            title: `Lesson ${i+1}: Node Topic`,
            video: `https://www.youtube.com/embed/TlB_eWDSMt4?lesson=${i+1}`,
            quizId: 1300 + i + 1
        }))
    },
    {
        id: 14,
        title: "Express JS",
        lessons: Array.from({length: 10}, (_, i) => ({
            title: `Lesson ${i+1}: Express Topic`,
            video: `https://www.youtube.com/embed/L72fhGm1tfE?lesson=${i+1}`,
            quizId: 1400 + i + 1
        }))
    },
    {
        id: 15,
        title: "MongoDB",
        lessons: Array.from({length: 10}, (_, i) => ({
            title: `Lesson ${i+1}: MongoDB Topic`,
            video: `https://www.youtube.com/embed/Of1vO_dYV_U?lesson=${i+1}`,
            quizId: 1500 + i + 1
        }))
    },
    {
        id: 16,
        title: "Python Django",
        lessons: Array.from({length: 10}, (_, i) => ({
            title: `Lesson ${i+1}: Django Topic`,
            video: `https://www.youtube.com/embed/F5mRW0jo-U4?lesson=${i+1}`,
            quizId: 1600 + i + 1
        }))
    },
    {
        id: 17,
        title: "Machine Learning",
        lessons: Array.from({length: 10}, (_, i) => ({
            title: `Lesson ${i+1}: ML Topic`,
            video: `https://www.youtube.com/embed/GwIo3gDZCVQ?lesson=${i+1}`,
            quizId: 1700 + i + 1
        }))
    },
    {
        id: 18,
        title: "Artificial Intelligence",
        lessons: Array.from({length: 10}, (_, i) => ({
            title: `Lesson ${i+1}: AI Topic`,
            video: `https://www.youtube.com/embed/5tvmMX8r_OM?lesson=${i+1}`,
            quizId: 1800 + i + 1
        }))
    },
    {
        id: 19,
        title: "Cybersecurity",
        lessons: Array.from({length: 10}, (_, i) => ({
            title: `Lesson ${i+1}: Cybersecurity Topic`,
            video: `https://www.youtube.com/embed/1c0uNzAv6bs?lesson=${i+1}`,
            quizId: 1900 + i + 1
        }))
    },
    {
        id: 20,
        title: "Software Engineering",
        lessons: Array.from({length: 10}, (_, i) => ({
            title: `Lesson ${i+1}: Software Eng. Topic`,
            video: `https://www.youtube.com/embed/4Z4lJtUu1co?lesson=${i+1}`,
            quizId: 2000 + i + 1
        }))
    }
];







const courseId = parseInt(new URLSearchParams(window.location.search).get("id"));
const course = courseContents.find(c => c.id === courseId);
const contentContainer = document.getElementById("contentContainer");

if(course){
    // Display all lessons
    course.lessons.forEach((lesson) => {
        const lessonCard = document.createElement("div");
        lessonCard.className = "content-card";
        lessonCard.innerHTML = `
            <h3>${lesson.title}</h3>
            <div class="video-container">
                <iframe src="${lesson.video}" frameborder="0" allowfullscreen></iframe>
            </div>
        `;
        contentContainer.appendChild(lessonCard);
    });

    // Add quiz section at the end
    const quizSection = document.createElement("div");
    quizSection.className = "quiz-section";
    quizSection.innerHTML = `
        <h3>Test Your Knowledge</h3>
        <p>You've completed all lessons! Click the button below to take the quiz for this course.</p>
        <button class="btn-content" onclick="goToQuiz(${course.id})">Take Quiz</button>
    `;
    contentContainer.appendChild(quizSection);

} else {
    contentContainer.innerHTML = `<p>Course content not found.</p>`;
}

// Save course ID to localStorage and go to quiz
function goToQuiz(courseId){
    localStorage.setItem("quizCourseId", courseId);
    window.location.href = `quiz.html`;
}

// Hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

