// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Firebase configuration
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

// Reference to the database
const contactFormRef = ref(db, "contactForm");

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
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
  const newContactRef = push(contactFormRef);
  set(newContactRef, {
    name: name,
    drink: drink,
    phone: phone,
    food: food,
  })
    .then(() => {
      alert("Order submitted successfully!");
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      console.error("Error submitting order:", error);
      alert("Failed to submit order. Please try again.");
    });
});
