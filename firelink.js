const firebaseConfig = {
  apiKey: "AIzaSyCrv3uwsQKuMyQXir31SFKiySdkVr8v9tc",
  authDomain: "form2-fd533.firebaseapp.com",
  projectId: "form2-fd533",
  storageBucket: "form2-fd533.appspot.com",
  messagingSenderId: "425015030298",
  appId: "1:425015030298:web:4ad0c93eb63d14382717a3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
