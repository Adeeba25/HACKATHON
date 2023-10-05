import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const signIn = () => {
  const email = document.querySelector("#login-email");
  const pass = document.querySelector("#login-pass");
  console.log("Pass");
  console.log(email);

  const auth = getAuth();

signInWithEmailAndPassword(auth, email.value, pass.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    console.log("123");
    location.href = "pages/dashboard.html"




    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Faild");
  });
};

const loginBtn = document.querySelector(".login-a")
loginBtn.addEventListener("click", signIn)




