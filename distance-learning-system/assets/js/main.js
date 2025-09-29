// ===============================
// Firebase Initialization
// ===============================
// Make sure firebase.js exports initialized app and db
import { app, db, ref, set, get, update, remove, onValue } from "./firebase.js";

// ===============================
// Students Array (Synced with Firebase)
// ===============================
let Students = [];
const studentsRef = ref(db, "students");

// ===============================
// Helpers
// ===============================
function normalizeRole(role) {
  if (!role) return "Student";
  const r = String(role).trim().toLowerCase();
  if (r === "student") return "Student";
  if (r === "admin") return "Admin";
  return role.charAt(0).toUpperCase() + role.slice(1);
}

function getDefaultProgress() {
  // progress numeric (starting at 0) and quizScore present for compatibility with reports
  return [
    { course: "HTML & CSS", progress: 0, quizScore: "0/0" },
    { course: "JavaScript Basics", progress: 0, quizScore: "0/0" },
    { course: "Python", progress: 0, quizScore: "0/0" },
    { course: "Java", progress: 0, quizScore: "0/0" },
    { course: "C Programming", progress: 0, quizScore: "0/0" },
    { course: "Data Structures", progress: 0, quizScore: "0/0" },
    { course: "Algorithms", progress: 0, quizScore: "0/0" },
    { course: "Database Management", progress: 0, quizScore: "0/0" },
    { course: "Advanced SQL", progress: 0, quizScore: "0/0" }
  ];
}

function mergeProgress(existingProgress) {
  const defaults = getDefaultProgress();
  const existing = Array.isArray(existingProgress) ? existingProgress : [];
  return defaults.map(def => {
    const found = existing.find(p => p.course === def.course);
    // If found, merge (preserve quizScore if present), else use default
    return found ? { ...def, ...found } : def;
  });
}

// ===============================
// Real-time load students (keep local cache in sync)
// ===============================
onValue(studentsRef, (snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.val();
    Students = Object.keys(data).map(key => {
      const s = data[key] || {};
      return {
        id: key,
        // support both `name` and `username` fields (make both available)
        username: s.username || s.name || "",
        name: s.name || s.username || "",
        email: s.email || "",
        password: s.password || "",
        role: normalizeRole(s.role),
        progress: mergeProgress(s.progress)
      };
    });
  } else {
    Students = [];
  }
  console.log("Students loaded:", Students);
});




// ===============================
// LOGIN FORM
// ===============================
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const usernameInput = (document.getElementById("username")?.value || "").trim();
    const password = (document.getElementById("password")?.value || "").trim();
    const message = document.getElementById("loginMessage");

    // Fetch fresh data once (avoid race condition if realtime hasn't fired yet)
    try {
      const snap = await get(studentsRef);
      let studentsData = [];
      if (snap.exists()) {
        const data = snap.val();
        studentsData = Object.keys(data).map(key => {
          const s = data[key] || {};
          return {
            id: key,
            username: s.username || s.name || "",
            name: s.name || s.username || "",
            email: s.email || "",
            password: s.password || "",
            role: normalizeRole(s.role),
            progress: mergeProgress(s.progress)
          };
        });
      }

      // Match by username OR name OR email, accept role case-insensitively
      const student = studentsData.find(s =>
        (s.username === usernameInput || s.name === usernameInput || s.email === usernameInput) &&
        s.password === password &&
        String(s.role).toLowerCase() === "student"
      );

      if (student) {
        if (message) {
          message.style.color = "green";
          message.textContent = "Login successful! Redirecting...";
        }
        localStorage.setItem("loggedInStudent", JSON.stringify({
          id: student.id,
          name: student.name,
          username: student.username,
          email: student.email,
          role: student.role,
          progress: student.progress
        }));

        
        setTimeout(() => { window.location.href = "dashboard.html"; }, 700);

      } else if(usernameInput.toLowerCase() === "hauwa'u ashir" && password.toLowerCase() === "123456789"){
        
        if (message) {
          message.style.color = "green";
          message.textContent = "Login successful! Redirecting...";
        }

        setTimeout(() => { window.location.href = "../admin/manage-users.html"; }, 700);

      } else {
        if (message) {
          message.style.color = "red";
          message.textContent = "Invalid username, password, or role!";
        } else {
          alert("Invalid username, password, or role!");
        }
      }
    } catch (err) {
      console.error("Login error:", err);
      if (message) {
        message.style.color = "red";
        message.textContent = "An error occurred while logging in. Check console.";
      } else {
        alert("An error occurred while logging in. See console.");
      }
    }
  });
}







// ===============================
// REGISTER FORM
// ===============================
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = (document.getElementById("regUsername")?.value || "").trim();
    const email = (document.getElementById("regEmail")?.value || "").trim();
    const password = (document.getElementById("regPassword")?.value || "").trim();
    const roleRaw = (document.getElementById("regRole")?.value || "Student").trim();
    const message = document.getElementById("registerMessage");

    if (!username || !email || !password || !roleRaw) {
      if (message) {
        message.style.color = "red";
        message.textContent = "Please fill in all fields!";
      } else {
        alert("Please fill in all fields!");
      }
      return;
    }

    // Prevent duplicates (check current local cache too)
    if (Students.find(s => s.username === username || s.email === email)) {
      if (message) {
        message.style.color = "red";
        message.textContent = "Student already exists!";
      } else {
        alert("Student already exists!");
      }
      return;
    }

    const id = Date.now().toString();
    const progress = getDefaultProgress();
    const role = normalizeRole(roleRaw);

    // To be compatible with other scripts that use `name` or `username`, set both
    const payload = {
      id,
      username,
      name: username,
      email,
      password,
      role,
      progress
    };

    set(ref(db, "students/" + id), payload)
      .then(() => {
        // update local cache immediately (onValue will sync anyway)
        Students.push(payload);
        if (message) {
          message.style.color = "green";
          message.textContent = "Registration successful! You can login now.";
        } else {
          alert("Registration successful! You can login now.");
        }
        registerForm.reset();
      })
      .catch((error) => {
        console.error("Register error:", error);
        if (message) {
          message.style.color = "red";
          message.textContent = "Error: " + error.message;
        } else {
          alert("Error: " + error.message);
        }
      });
  });
}




// ===============================
// HAMBURGER MENU
// ===============================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}
