const firebaseConfig = {
  apiKey: "AIzaSyA2ZO01gISs2RcGhVn-Rc7JEtNFMkbSMXc",
  authDomain: "saintnicholasepprojn.firebaseapp.com",
  databaseURL: "https://saintnicholasepprojn-default-rtdb.firebaseio.com",
  projectId: "saintnicholasepprojn",
  storageBucket: "saintnicholasepprojn.appspot.com",
  messagingSenderId: "171886577856",
  appId: "1:171886577856:web:34539f622fa29defc88525",
  measurementId: "G-GBB763DT0V"
}

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var Food = getElementVal("Food");
  var phone = getElementVal("phone");
  var Drink = getElementVal("Drink");

  saveMessages(name, Food, phone, Drink);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, Food, phone, Drink) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    Food: Food,
    phone: phone,
    Drink: Drink,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
