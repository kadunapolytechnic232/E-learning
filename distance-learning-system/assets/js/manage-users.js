// ===============================
// Firebase Initialization
// ===============================
// Make sure firebase.js exports initialized app and db
import { app, db, ref, set, get, update, remove, onValue } from "./firebase.js";

// ===============================
// DOM Elements
// ===============================
const userList = document.getElementById("userList");

// ===============================
// Default Progress Structure
// ===============================
function getDefaultProgress() {
  return [
    { course: "HTML & CSS", progress: 0 },
    { course: "JavaScript Basics", progress: 0 },
    { course: "Python", progress: 0 },
    { course: "Java", progress: 0 },
    { course: "C Programming", progress: 0 },
    { course: "Data Structures", progress: 0 },
    { course: "Algorithms", progress: 0 },
    { course: "Database Management", progress: 0 },
    { course: "Advanced SQL", progress: 0 }
  ];
}

// ===============================
// Render Students from DB
// ===============================
function renderStudents(students) {
  userList.innerHTML = "";
  students.forEach((user, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.role}</td>
      <td>******</td>
      <td>
        <button class="edit-btn editUser" data-id="${user.id}">Edit</button>
        <button class="delete-btn deleteUser" data-id="${user.id}">Delete</button>
      </td>
    `;
    userList.appendChild(row);
  });
}

// ===============================
// Event Delegation for Edit/Delete
// ===============================
userList.addEventListener("click", (e) => {
  if (e.target.classList.contains("editUser")) {
    const id = e.target.dataset.id;
    editUser(id);
  }
  if (e.target.classList.contains("deleteUser")) {
    const id = e.target.dataset.id;
    deleteUser(id);
  }
});

// ===============================
// Add User Button
// ===============================
document.querySelector(".addUser").addEventListener("click", () => {
  addUser();
});

// ===============================
// Fetch Students (Realtime)
// ===============================
function fetchStudents() {
  const studentsRef = ref(db, "students");
  onValue(studentsRef, (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      const students = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      renderStudents(students);
    } else {
      userList.innerHTML = "<tr><td colspan='6'>No students found</td></tr>";
    }
  });
}




// ===============================
// Add or Update User
// ===============================
function addUser() {
  const name = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.getElementById("role").value;

  if (name && email && password && role) {
    // If editing an existing user
    if (editingUserId) {
      update(ref(db, "students/" + editingUserId), {
        name,
        email,
        password,
        role,
        progress: editingUserProgress // ✅ keep original progress
      }).then(() => {
        console.log("✅ User updated successfully!");
        resetForm();
      }).catch(err => {
        alert("Error updating user: " + err.message);
      });

    } else {
      // Adding new user
      const id = Date.now().toString();
      const progress = getDefaultProgress();

      set(ref(db, "students/" + id), {
        id,
        name,
        email,
        password,
        role,
        progress
      }).then(() => {
        console.log("✅ New user added!");
        resetForm();
      }).catch(err => {
        alert("Error adding user: " + err.message);
      });
    }
  } else {
    alert("Please fill in all fields");
  }
}

// ===============================
// Reset Form After Add/Edit
// ===============================
function resetForm() {
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("role").value = "Student";
  editingUserId = null;
  editingUserProgress = null;
}







// ===============================
// Delete User
// ===============================
function deleteUser(id) {
  remove(ref(db, "students/" + id))
    .then(() => console.log("User deleted"))
    .catch(err => console.error(err));
}





// ===============================
// Edit User (Preserve Progress)
// ===============================
let editingUserId = null; // store the ID of user being edited
let editingUserProgress = null; // store their current progress

function editUser(id) {
  const userRef = ref(db, "students/" + id);
  get(userRef).then((snapshot) => {
    if (snapshot.exists()) {
      const user = snapshot.val();

      // Prefill form fields
      document.getElementById("username").value = user.name;
      document.getElementById("email").value = user.email;
      document.getElementById("password").value = user.password;
      document.getElementById("role").value = user.role;

      // Store the ID and progress
      editingUserId = id;
      editingUserProgress = user.progress || getDefaultProgress();
    }
  });
}




// ===============================
// Init
// ===============================
fetchStudents();




// Hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});