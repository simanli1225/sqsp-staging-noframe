console.log("firebase js");
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYwHs51iq0BTqPUr8YZetl-_kcrLGuR-Y",
  authDomain: "creative-staging-site.firebaseapp.com",
  databaseURL: "https://creative-staging-site-default-rtdb.firebaseio.com",
  projectId: "creative-staging-site",
  storageBucket: "creative-staging-site.appspot.com",
  messagingSenderId: "364348348699",
  appId: "1:364348348699:web:f8d795122dd6a7f7c61bbe",
};

// initialize firebase
// firebase.initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);

//-------for the images------//
// var contactFormDB = firebase.database().ref("contactForm");

// Get a reference to the storage service, which is used to create references in your storage bucket
// const storage = getStorage(app);
var storage = firebase.storage();

// const database = getDatabase();
var database = firebase.database();

// const databaseReference = dbRef(database, "files");
// const databaseReference = firebase.database().ref("files");
var dataRef = firebase.database().ref("testFolder/");



const saveMessages = (name, password) => {
  var dataRef = firebase.database().ref("testFolder/"+name+"/info");
  var newContactForm = dataRef.push();
  newContactForm.set({
    name: name,
    password: password,
  });
};
const saveImageNames = (image,name) => {
  var dataRef = firebase.database().ref("testFolder/"+name+"/images");
  var newContactForm = dataRef.push();
  newContactForm.set({
    images: image,
  });
};
// const saveMessages = (name, password) => {
//   var dataRef = firebase.database().ref("testFolder/");
//   var newContactForm = dataRef.push();
//   newContactForm.set({
//     name: name,
//     password: password,
//   });
// };
// const saveImageNames = (image,name) => {
//   var dataRef2 = firebase.database().ref("testFolder/"+name);
//   var newContactForm = dataRef2.push();
//   newContactForm.set({
//     images: image,
//   });
// };

// function sendData() {
//   const getElementVal = (id) => {
//     return document.getElementById(id).value;
//   };
// }
