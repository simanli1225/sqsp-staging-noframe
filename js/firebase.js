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
var contactFormDB = firebase.database().ref("testFolder");

// Get a reference to the storage service, which is used to create references in your storage bucket
// const storage = getStorage(app);
var storage = firebase.storage();

// const database = getDatabase();
var database = firebase.database();

// const databaseReference = dbRef(database, "files");
const databaseReference = firebase.database().ref("files");

const saveMessages = (name, password, msgContent) => {
  var newContactForm = contactFormDB.push();
  newContactForm.set({
    name: name,
    password: password,
    msgContent: msgContent,
  });
};

function sendData() {
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
}

