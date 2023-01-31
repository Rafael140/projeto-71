import firebase from "firebase";
require("@firebase/firestore");

//Cole sua Configuração do Firebase aqui
const firebaseConfig = {
  apiKey: "AIzaSyAIOMRwsYCrT8sM2cAovYY6N7h9QVOX9Lc",
  authDomain: "projeto-71-c1771.firebaseapp.com",
  projectId: "projeto-71-c1771",
  storageBucket: "projeto-71-c1771.appspot.com",
  messagingSenderId: "232337472482",
  appId: "1:232337472482:web:b9e2480bb93d002044d7bb",
  measurementId: "G-CXTH4K4932"
}

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
