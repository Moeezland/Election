import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  OAuthProvider,
  deleteUser
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCs-pheSxe9bkAqnhG9qOjF7RvFfb9k00A",
  authDomain: "e-civilian-portal2007.firebaseapp.com",
  projectId: "e-civilian-portal2007",
  storageBucket: "e-civilian-portal2007.firebasestorage.app",
  messagingSenderId: "465001179759",
  appId: "1:465001179759:web:60a45e286fbf1a39ac7b9a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔴 GOOGLE LOGIN
export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);

  if (result._tokenResponse.isNewUser) {
    alert("Access denied: You are not registered as a citizen.");

    // 🔥 DELETE USER
    await deleteUser(result.user);

    return;
  }

  window.location.href = "index.html";
}

// 🔵 MICROSOFT LOGIN
export async function loginWithMicrosoft() {
  const provider = new OAuthProvider('microsoft.com');
  const result = await signInWithPopup(auth, provider);

  if (result._tokenResponse.isNewUser) {
    alert("Access denied: You are not registered as a citizen.");

    // 🔥 DELETE USER
    await deleteUser(result.user);

    return;
  }

  window.location.href = "index.html";
}