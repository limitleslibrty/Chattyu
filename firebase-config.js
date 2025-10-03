// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyAz7rvTyqiGYca63jV1diMa_nlpPh2E35w",
  authDomain: "multi-chat-21ea3.firebaseapp.com",
  databaseURL: "https://multi-chat-21ea3-default-rtdb.firebaseio.com", // Added for Realtime DB
  projectId: "multi-chat-21ea3",
  storageBucket: "multi-chat-21ea3.appspot.com", // fixed: should be .appspot.com (not .firebasestorage.app)
  messagingSenderId: "32564475349",
  appId: "1:32564475349:web:e255c4b2c7bedc4163b95c",
  measurementId: "G-VHXHHFEFXV"
};

// Initialize Firebase (v8 syntax)
firebase.initializeApp(firebaseConfig);
const database = firebase.database();