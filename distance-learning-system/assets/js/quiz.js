
// ===============================
// Firebase Initialization
// ===============================
import { db, ref, get, update } from "./firebase.js";

// ===============================
// Quizzes (kept your questions, no change except note about entities)
// ===============================
const quizzes = {
    1: [ // HTML & CSS
    { question: "Which tag is used to create a hyperlink in HTML?", options: ["&lt;a&gt;", "&lt;p&gt;", "&lt;div&gt;", "&lt;h1&gt;"], answer: "&lt;a&gt;" },
    { question: "Which property is used to change text color in CSS?", options: ["color", "font-color", "text-style", "text-color"], answer: "color" },
    { question: "HTML stands for?", options: ["HyperText Markup Language", "Hyperlink Text Mark Language", "Hyper Transfer Markup Language", "HyperText Markdown Language"], answer: "HyperText Markup Language" },
    { question: "Which tag is used for headings?", options: ["&lt;head&gt;", "&lt;h1&gt;-&lt;h6&gt;", "&lt;header&gt;", "&lt;title&gt;"], answer: "&lt;h1&gt;-&lt;h6&gt;" },
    { question: "How do you insert an image in HTML?", options: ["&lt;img src='...'&gt;", "&lt;image src='...'&gt;", "&lt;pic src='...'&gt;", "&lt;src img='...'&gt;"], answer: "&lt;img src='...'&gt;" },
    { question: "Which CSS property controls the text size?", options: ["font-size", "text-size", "font-style", "text-style"], answer: "font-size" },
    { question: "Which tag is used for an unordered list?", options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;list&gt;"], answer: "&lt;ul&gt;" },
    { question: "How do you make text bold in HTML?", options: ["&lt;b&gt;", "&lt;strong&gt;", "&lt;bold&gt;", "Both &lt;b&gt; and &lt;strong&gt;"], answer: "Both &lt;b&gt; and &lt;strong&gt;" },
    { question: "Which CSS property changes background color?", options: ["background-color", "bg-color", "color-bg", "background"], answer: "background-color" },
    { question: "How do you link an external CSS file?", options: ["&lt;link rel='stylesheet' href='style.css'&gt;", "&lt;css href='style.css'&gt;", "&lt;style src='style.css'&gt;", "&lt;link src='style.css'&gt;"], answer: "&lt;link rel='stylesheet' href='style.css'&gt;" }
],
    2: [ // JavaScript
        { question: "Which method adds an element to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()" },
        { question: "Which keyword declares a block-scoped variable?", options: ["let", "var", "const", "All"], answer: "let" },
        { question: "How do you write a comment in JavaScript?", options: ["// comment", "<!-- comment -->", "/* comment */", "' comment"], answer: "// comment" },
        { question: "Which operator is used for strict equality?", options: ["===", "==", "=", "!=="], answer: "===" },
        { question: "How do you define a function?", options: ["function myFunc() {}", "def myFunc() {}", "func myFunc() {}", "function: myFunc() {}"], answer: "function myFunc() {}" },
        { question: "Which method converts JSON string to JavaScript object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.convert()"], answer: "JSON.parse()" },
        { question: "Which event occurs when a user clicks on an element?", options: ["onclick", "onmouseover", "onchange", "onhover"], answer: "onclick" },
        { question: "Which statement is used to stop a loop?", options: ["break", "stop", "exit", "return"], answer: "break" },
        { question: "How do you create an array?", options: ["let arr = []", "let arr = {}", "let arr = ()", "array arr = []"], answer: "let arr = []" },
        { question: "Which method removes the last element of an array?", options: ["pop()", "push()", "shift()", "unshift()"], answer: "pop()" }
    ],
    3: [ // Python
        { question: "Which keyword is used to define a function in Python?", options: ["def", "function", "func", "define"], answer: "def" },
        { question: "How do you create a list in Python?", options: ["[]", "{}", "()", "<>"], answer: "[]" },
        { question: "Which operator is used for exponentiation?", options: ["**", "^", "*", "pow"], answer: "**" },
        { question: "What is the output of print(type([]))?", options: ["<class 'list'>", "<class 'dict'>", "<class 'tuple'>", "<class 'set'>"], answer: "<class 'list'>" },
        { question: "Which method adds an item to the end of a list?", options: ["append()", "add()", "push()", "insert()"], answer: "append()" },
        { question: "How do you create a dictionary in Python?", options: ["{}", "[]", "()", "<>"], answer: "{}" },
        { question: "Which keyword is used for a conditional statement?", options: ["if", "for", "while", "switch"], answer: "if" },
        { question: "Which keyword exits a loop in Python?", options: ["break", "stop", "exit", "return"], answer: "break" },
        { question: "Which function returns the length of a list?", options: ["len()", "size()", "count()", "length()"], answer: "len()" },
        { question: "How do you handle exceptions in Python?", options: ["try-except", "catch", "throw", "handle"], answer: "try-except" }
    ],
    4: [ // Java
        { question: "Which keyword is used to define a class in Java?", options: ["class", "Class", "define", "object"], answer: "class" },
        { question: "Which method is the entry point of a Java program?", options: ["main()", "start()", "run()", "init()"], answer: "main()" },
        { question: "Which operator is used for logical AND?", options: ["&&", "||", "&", "|"], answer: "&&" },
        { question: "Which keyword is used to inherit a class?", options: ["extends", "implements", "inherits", "base"], answer: "extends" },
        { question: "Which data type is used for decimal numbers?", options: ["double", "int", "float", "decimal"], answer: "double" },
        { question: "How do you create a constant variable?", options: ["final", "const", "let", "var"], answer: "final" },
        { question: "Which method prints output to the console?", options: ["System.out.println()", "console.log()", "print()", "echo"], answer: "System.out.println()" },
        { question: "Which keyword is used to catch exceptions?", options: ["catch", "except", "try", "handle"], answer: "catch" },
        { question: "Which keyword is used to declare an interface?", options: ["interface", "class", "implements", "extends"], answer: "interface" },
        { question: "Which keyword is used to create an object?", options: ["new", "create", "object", "init"], answer: "new" }
    ],
    5: [ // C Programming
        { question: "Which function is used to print in C?", options: ["printf()", "print()", "echo()", "console.log()"], answer: "printf()" },
        { question: "Which header file is needed for printf()?", options: ["stdio.h", "stdlib.h", "math.h", "string.h"], answer: "stdio.h" },
        { question: "Which operator is used for logical OR?", options: ["||", "&&", "|", "&"], answer: "||" },
        { question: "Which data type stores integers?", options: ["int", "float", "double", "char"], answer: "int" },
        { question: "Which symbol is used to indicate comments?", options: ["//", "/* */", "#", "<!-- -->"], answer: "//" },
        { question: "Which operator is used for assignment?", options: ["=", "==", "+=", "-="], answer: "=" },
        { question: "How do you define a function?", options: ["return_type name() {}", "function name() {}", "def name() {}", "func name() {}"], answer: "return_type name() {}" },
        { question: "Which keyword exits a loop?", options: ["break", "continue", "exit", "stop"], answer: "break" },
        { question: "Which symbol is used for multiplication?", options: ["*", "x", ".", "%"], answer: "*" },
        { question: "Which symbol is used for equality comparison?", options: ["==", "=", "===", "!="], answer: "==" }
    ],
7: [ { question: "Which data structure uses FIFO principle?", options: ["Queue", "Stack", "Tree", "Graph"], answer: "Queue" }, { question: "Which data structure uses LIFO principle?", options: ["Stack", "Queue", "Array", "Linked List"], answer: "Stack" }, { question: "Which data structure is non-linear?", options: ["Tree", "Array", "Stack", "Queue"], answer: "Tree" }, { question: "Which data structure allows dynamic memory allocation?", options: ["Linked List", "Array", "Stack", "Queue"], answer: "Linked List" }, { question: "Which traversal visits left, root, right?", options: ["Inorder", "Preorder", "Postorder", "Level Order"], answer: "Inorder" }, { question: "Which data structure is used to implement recursion?", options: ["Stack", "Queue", "Array", "Linked List"], answer: "Stack" }, { question: "Which operation removes an element from the queue?", options: ["Dequeue", "Push", "Pop", "Insert"], answer: "Dequeue" }, { question: "Which data structure stores key-value pairs?", options: ["Hash Table", "Stack", "Queue", "Tree"], answer: "Hash Table" }, { question: "Which operation adds an element to the stack?", options: ["Push", "Pop", "Enqueue", "Insert"], answer: "Push" }, { question: "Which data structure is used for priority-based processing?", options: ["Priority Queue", "Queue", "Stack", "Linked List"], answer: "Priority Queue" } ] ,
8: [ { question: "Which algorithm finds the shortest path in a graph?", options: ["Dijkstra's", "Binary Search", "Merge Sort", "Quick Sort"], answer: "Dijkstra's" }, { question: "Which algorithm uses divide and conquer?", options: ["Merge Sort", "Bubble Sort", "Linear Search", "DFS"], answer: "Merge Sort" }, { question: "Which algorithm searches in a sorted array?", options: ["Binary Search", "Linear Search", "DFS", "BFS"], answer: "Binary Search" }, { question: "Which algorithm detects cycles in a graph?", options: ["DFS", "BFS", "Dijkstra's", "Prim's"], answer: "DFS" }, { question: "Which algorithm is used to find minimum spanning tree?", options: ["Kruskal's", "DFS", "Binary Search", "Heap Sort"], answer: "Kruskal's" }, { question: "Which algorithm sorts by repeatedly swapping adjacent elements?", options: ["Bubble Sort", "Merge Sort", "Quick Sort", "Insertion Sort"], answer: "Bubble Sort" }, { question: "Which algorithm is used for recursive sorting?", options: ["Quick Sort", "Selection Sort", "Bubble Sort", "Linear Search"], answer: "Quick Sort" }, { question: "Which algorithm traverses nodes level by level?", options: ["BFS", "DFS", "Binary Search", "Merge Sort"], answer: "BFS" }, { question: "Which algorithm traverses nodes depth-first?", options: ["DFS", "BFS", "Heap Sort", "Quick Sort"], answer: "DFS" }, { question: "Which algorithm finds maximum subarray sum efficiently?", options: ["Kadane's", "Bubble Sort", "Linear Search", "DFS"], answer: "Kadane's" } ] ,
9: [ { question: "Which language is used to query databases?", options: ["SQL", "HTML", "CSS", "JavaScript"], answer: "SQL" }, { question: "Which database is relational?", options: ["MySQL", "MongoDB", "Cassandra", "Redis"], answer: "MySQL" }, { question: "Which key uniquely identifies a record?", options: ["Primary Key", "Foreign Key", "Candidate Key", "Index Key"], answer: "Primary Key" }, { question: "Which key establishes a relationship between tables?", options: ["Foreign Key", "Primary Key", "Unique Key", "Composite Key"], answer: "Foreign Key" }, { question: "Which command retrieves data from a table?", options: ["SELECT", "INSERT", "UPDATE", "DELETE"], answer: "SELECT" }, { question: "Which command modifies existing data?", options: ["UPDATE", "INSERT", "SELECT", "DELETE"], answer: "UPDATE" }, { question: "Which command removes data from a table?", options: ["DELETE", "DROP", "UPDATE", "INSERT"], answer: "DELETE" }, { question: "Which constraint ensures no duplicate values?", options: ["UNIQUE", "PRIMARY", "FOREIGN", "CHECK"], answer: "UNIQUE" }, { question: "Which database stores data as documents?", options: ["MongoDB", "MySQL", "Oracle", "PostgreSQL"], answer: "MongoDB" }, { question: "Which SQL clause filters records?", options: ["WHERE", "ORDER BY", "GROUP BY", "HAVING"], answer: "WHERE" } ] ,
10: [ { question: "Which SQL statement adds new records?", options: ["INSERT INTO", "SELECT", "UPDATE", "DELETE"], answer: "INSERT INTO" }, { question: "Which SQL statement removes a table?", options: ["DROP TABLE", "DELETE", "REMOVE TABLE", "TRUNCATE"], answer: "DROP TABLE" }, { question: "Which clause sorts the results?", options: ["ORDER BY", "GROUP BY", "WHERE", "HAVING"], answer: "ORDER BY" }, { question: "Which clause groups rows based on a column?", options: ["GROUP BY", "ORDER BY", "WHERE", "HAVING"], answer: "GROUP BY" }, { question: "Which SQL statement modifies existing records?", options: ["UPDATE", "INSERT", "DELETE", "ALTER"], answer: "UPDATE" }, { question: "Which function counts rows in a table?", options: ["COUNT()", "SUM()", "AVG()", "TOTAL()"], answer: "COUNT()" }, { question: "Which function calculates the average value?", options: ["AVG()", "SUM()", "COUNT()", "MIN()"], answer: "AVG()" }, { question: "Which command removes all rows but keeps the table?", options: ["TRUNCATE", "DROP", "DELETE", "REMOVE"], answer: "TRUNCATE" }, { question: "Which operator is used for pattern matching?", options: ["LIKE", "MATCH", "PATTERN", "REGEX"], answer: "LIKE" }, { question: "Which statement retrieves data from multiple tables?", options: ["JOIN", "UNION", "MERGE", "COMBINE"], answer: "JOIN" } ] 

    // Continue for courses 1-10 similarly
};

// ===============================
// Helpers
// ===============================
function getLoggedInStudentId() {
  // Primary: loggedInStudent (object)
  const raw = localStorage.getItem("loggedInStudent");
  if (raw) {
    try {
      const obj = JSON.parse(raw);
      if (obj && obj.id) return String(obj.id);
    } catch (e) {
      // not JSON — ignore
    }
  }
  // Fallback (older key)
  const fallback = localStorage.getItem("currentStudentId");
  if (fallback) return String(fallback);
  return null;
}

// decode HTML entities like "&lt;a&gt;" -> "<a>"
function decodeHTML(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

// Default progress entries (store as strings like "0%")
function getDefaultProgress() {
  return [
    { course: "HTML & CSS", progress: "0%", quizScore: "0/0" },
    { course: "JavaScript Basics", progress: "0%", quizScore: "0/0" },
    { course: "Python", progress: "0%", quizScore: "0/0" },
    { course: "Java", progress: "0%", quizScore: "0/0" },
    { course: "C Programming", progress: "0%", quizScore: "0/0" },
    { course: "Data Structures", progress: "0%", quizScore: "0/0" },
    { course: "Algorithms", progress: "0%", quizScore: "0/0" },
    { course: "Database Management", progress: "0%", quizScore: "0/0" },
    { course: "Advanced SQL", progress: "0%", quizScore: "0/0" }
  ];
}

// ===============================
// Get Course & Student IDs
// ===============================
const courseId = parseInt(localStorage.getItem("quizCourseId"), 10);
const studentId = getLoggedInStudentId();
const quizQuestions = quizzes[courseId] || [];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById("quizContainer");

// ===============================
// Load Question
// ===============================
function loadQuestion() {
  if (!quizContainer) return;

  if (currentQuestion >= quizQuestions.length) {
    const percentageScore = quizQuestions.length === 0 ? 0 : Math.round((score / quizQuestions.length) * 100);
    const quizScoreText = `${score}/${quizQuestions.length}`;

    localStorage.setItem(`score_course_${courseId}`, percentageScore);

    const courseName = getCourseName(courseId);
    if (studentId && courseName) {
      updateStudentResult(studentId, courseName, percentageScore, quizScoreText);
    } else {
      console.warn("Quiz: No studentId or courseName - skipping update", { studentId, courseName });
    }

    quizContainer.innerHTML = `
      <h2>You scored ${percentageScore}%</h2>
      <p>Out of ${quizQuestions.length} questions for this course.</p>
      <button class="btn-submit restartQuiz">Try Again</button>
      <button class="btn-submit goToDashboard">Back to Dashboard</button>
    `;

    document.querySelector(".restartQuiz").addEventListener("click", restartQuiz);
    document.querySelector(".goToDashboard").addEventListener("click", goToDashboard);
    return;
  }

  const q = quizQuestions[currentQuestion];
  quizContainer.innerHTML = `
    <div class="quiz-card">
      <h3>Q${currentQuestion + 1}. ${decodeHTML(q.question)}</h3>
      ${q.options.map(opt => `<div class="quiz-option">${opt}</div>`).join("")}
      <button class="btn-submit submitAnswer">Submit</button>
    </div>
  `;

  document.querySelectorAll(".quiz-option").forEach(opt => {
    opt.addEventListener("click", () => selectOption(opt));
  });

  document.querySelector(".submitAnswer").addEventListener("click", submitAnswer);
}

let selectedOption = null;

function selectOption(element) {
  document.querySelectorAll(".quiz-option").forEach(opt => opt.classList.remove("selected"));
  element.classList.add("selected");
  selectedOption = (element.textContent || "").trim();
}

function submitAnswer() {
  if (selectedOption === null) {
    alert("Please select an option!");
    return;
  }

  const current = quizQuestions[currentQuestion];
  // compare decoded values to handle entities
  const sel = decodeHTML(selectedOption).trim();
  const ans = decodeHTML(current.answer).trim();

  if (sel === ans) {
    score++;
  }

  currentQuestion++;
  selectedOption = null;
  loadQuestion();
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  loadQuestion();
}

function goToDashboard() {
  window.location.href = "../dashboard.html";
}

// ===============================
// Update Student Progress in Firebase
// ===============================
async function updateStudentResult(studentId, courseName, percentageScore, quizScoreText) {
  const studentRef = ref(db, `students/${studentId}`);
  try {
    const snapshot = await get(studentRef);
    if (!snapshot.exists()) {
      console.warn("updateStudentResult: student not found:", studentId);
      return;
    }

    const student = snapshot.val();
    let updatedProgress = Array.isArray(student.progress) ? student.progress.slice() : getDefaultProgress();

    // Ensure all courses exist
    const defaultCourses = getDefaultProgress().map(p => p.course);
    defaultCourses.forEach(course => {
      if (!updatedProgress.some(p => p.course === course)) {
        updatedProgress.push({ course, progress: "0%", quizScore: "0/0" });
      }
    });

    // Update the current course entry (store progress as "NN%")
    const idx = updatedProgress.findIndex(p => p.course === courseName);
    if (idx >= 0) {
      updatedProgress[idx] = {
        ...updatedProgress[idx],
        progress: `${percentageScore}%`,
        quizScore: quizScoreText
      };
    } else {
      updatedProgress.push({ course: courseName, progress: `${percentageScore}%`, quizScore: quizScoreText });
    }

    await update(studentRef, { progress: updatedProgress });
    console.log(`✅ Progress updated for ${courseName} (${percentageScore}%) for student ${studentId}`);
  } catch (error) {
    console.error("❌ Firebase update error:", error);
  }
}

// ===============================
// Map Course IDs to Names
// ===============================
function getCourseName(id) {
  const map = {
    1: "HTML & CSS",
    2: "JavaScript Basics",
    3: "Python",
    4: "Java",
    5: "C Programming",
    7: "Data Structures",
    8: "Algorithms",
    9: "Database Management",
    10: "Advanced SQL"
  };
  return map[id] || null;
}

// ===============================
// Initialize Quiz
// ===============================
loadQuestion();

// ===============================
// Hamburger Menu Toggle
// ===============================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}
