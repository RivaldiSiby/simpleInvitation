import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDCuqThhDMP4-zvzCyZycour0U79IuOFG4",
  authDomain: "wisudainvit.firebaseapp.com",
  projectId: "wisudainvit",
  storageBucket: "wisudainvit.appspot.com",
  messagingSenderId: "1095765645631",
  appId: "1:1095765645631:web:f7a44f614da381fcfe5b8a",
  measurementId: "G-FDNR9VXWV6",
};

export const app = initializeApp(firebaseConfig);
