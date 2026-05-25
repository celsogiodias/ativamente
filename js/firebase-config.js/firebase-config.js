import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Configuração do Firebase para o projeto Ativamente
const firebaseConfig = {
  apiKey: "AIzaSyDK5qXLqNcM6DKvB6ES_sDNtGAqmV25Iio",
  authDomain: "espaco-ativamente-psi.firebaseapp.com",
  projectId: "espaco-ativamente-psi",
  storageBucket: "espaco-ativamente-psi.firebasestorage.app",
  messagingSenderId: "922679253668",
  appId: "1:922679253668:web:fd2ac83d559c9af49f2431"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta os serviços de autenticação e Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };