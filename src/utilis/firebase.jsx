// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAOB-q3HELoj0O66RdYCer2-vkxzakccAk",
    authDomain: "netflixgpt-c13fe.firebaseapp.com",
    projectId: "netflixgpt-c13fe",
    storageBucket: "netflixgpt-c13fe.firebasestorage.app",
    messagingSenderId: "854273881912",
    appId: "1:854273881912:web:75edfbdaaa81165532f3cd",
    measurementId: "G-RSVCJ0J3ZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth=getAuth();
