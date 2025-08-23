// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyBrpVslfly1LKOkPi-SLBkbRvTHKi9-FS0",
  authDomain: "hhjkk-faaa8.firebaseapp.com",
  databaseURL: "https://hhjkk-faaa8-default-rtdb.firebaseio.com",
  projectId: "hhjkk-faaa8",
  storageBucket: "hhjkk-faaa8.appspot.com",  // Fixed small typo: it was `.firebasestorage.app` (wrong)
  messagingSenderId: "472968904632",
  appId: "1:472968904632:web:e107e37a9bc20af6b4994d",
  measurementId: "G-LC113Y0X00"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();