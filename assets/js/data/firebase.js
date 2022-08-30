  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCzuvxGO_JjiBWM8KgWlHLj8ezC23WDLls",
    authDomain: "projeto-teste-fe1b3.firebaseapp.com",
    projectId: "projeto-teste-fe1b3",
    storageBucket: "projeto-teste-fe1b3.appspot.com",
    messagingSenderId: "32548104803",
    appId: "1:32548104803:web:5005d40bb406c073dbe656"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default app