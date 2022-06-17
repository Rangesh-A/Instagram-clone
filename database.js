// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCutruLneBKFyOIwqf1wxTEj-hserMciJI",
    authDomain: "instagram-clone-80d4d.firebaseapp.com",
    projectId: "instagram-clone-80d4d",
    storageBucket: "instagram-clone-80d4d.appspot.com",
    messagingSenderId: "350727679015",
    appId: "1:350727679015:web:cd8026a4f046e92e6bf202",
    measurementId: "G-NE45RJST3L"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function register(){
    Mobile_number=document.getElementById("mobile").value;
    Full_name=document.getElementById("fullname").value;
    Username=document.getElementById("username").value;
    Password=document.getElementById("password").value;
    firebaseConfig.database().ref("/").child(username).update({
        Mobile_number : Mobile_number,
        Full_name : Full_name,
        User_name : Username,
        Password : Password
    })
  }