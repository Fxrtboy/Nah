// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2ZO01gISs2RcGhVn-Rc7JEtNFMkbSMXc",
  authDomain: "saintnicholasepprojn.firebaseapp.com",
  databaseURL: "https://saintnicholasepprojn-default-rtdb.firebaseio.com",
  projectId: "saintnicholasepprojn",
  storageBucket: "saintnicholasepprojn.appspot.com",
  messagingSenderId: "171886577856",
  appId: "1:171886577856:web:34539f622fa29defc88525",
  measurementId: "G-GBB763DT0V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Reference the database path for storing form data
const contactFormRef = ref(db, "contactForm");

// Function to save form data
function saveMessage(name, drink, phone, food) {
  const newContactRef = push(contactFormRef);
  set(newContactRef, {
    name: name,
    drink: drink,
    phone: phone,
    food: food,
  })
    .then(() => {
      alert("Form submitted successfully!");
    })
    .catch((error) => {
      console.error("Error saving data: ", error);
    });
}

// Attach event listener to the form
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Collect form values
  const name = document.getElementById("name").value;
  const drink = document.getElementById("Drink").value;
  const phone = document.getElementById("phone").value;
  const food = document.getElementById("Food").value;

  // Validate input
  if (!name || !drink || !phone || !food) {
    alert("Please fill out all fields.");
    return;
  }

  // Save data to Firebase
  saveMessage(name, drink, phone, food);

  // Reset the form
  document.getElementById("contactForm").reset();
});
