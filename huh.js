// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2ZO01gISs2RcGhVn-Rc7JEtNFMkbSMXc",
  authDomain: "saintnicholasepprojn.firebaseapp.com",
  databaseURL: "https://saintnicholasepprojn-default-rtdb.firebaseio.com",
  projectId: "saintnicholasepprojn",
  storageBucket: "saintnicholasepprojn.appspot.com",
  messagingSenderId: "171886577856",
  appId: "1:171886577856:web:34539f622fa29defc88525",
  measurementId: "G-GBB763DT0V"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference the database
var contactFormDB = firebase.database().ref("contactForm");

// Add event listener to the form
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Function to handle form submission
function submitForm(e) {
  e.preventDefault();

  // Get form values
  var name = getElementVal("name");
  var Drink = getElementVal("Drink");
  var phone = getElementVal("phone");
  var Food = getElementVal("Food");

  // Save the data to Firebase
  saveMessages(name, Drink, phone, Food);

  // Reset the form after submission
  document.getElementById("contactForm").reset();
}

// Save messages to Firebase
const saveMessages = (name, Drink, phone, Food) => {
  var newContactForm = contactFormDB.push();
  newContactForm.set({
    name: name,
    Drink: Drink,
    phone: phone,
    Food: Food,
  });
};

// Helper function to get form values
const getElementVal = (id) => {
  return document.getElementById(id).value;
};
