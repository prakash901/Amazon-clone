import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyB36YUs8AR69XhP5ZPVATLnpx4VF7KfEJk",
  authDomain: "ecommerce-c43bc.firebaseapp.com",
  databaseURL: "https://ecommerce-c43bc.firebaseio.com",
  projectId: "ecommerce-c43bc",
  storageBucket: "ecommerce-c43bc.appspot.com",
  messagingSenderId: "714396372015",
  appId: "1:714396372015:web:3db7c68f725dfed335cada",
  measurementId: "G-676HK5J49L",
});

const auth = firebase.auth();

export { auth };
