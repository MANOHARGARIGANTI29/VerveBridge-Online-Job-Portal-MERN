import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAXupOxgWAYyNbMnt2hHd0IOctL8j0Z_EE",
  authDomain: "job-portal-b4be3.firebaseapp.com",
  projectId: "job-portal-b4be3",
  storageBucket: "job-portal-b4be3.appspot.com",
  messagingSenderId: "211203945891",
  appId: "1:211203945891:web:3a5dce533cb3774b551616"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;
