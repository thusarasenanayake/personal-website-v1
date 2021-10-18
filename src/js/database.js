import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { addDoc, collection } from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDUqLg_bkz-TfJ8-C1IfS8Dzvqid-IwfIg',
  authDomain: 'personal-website-v1-65420.firebaseapp.com',
  projectId: 'personal-website-v1-65420',
});

const db = getFirestore();

async function sendMessage(name, email, subject, message) {
  return new Promise((resolve, reject) => {
    addDoc(collection(db, 'messages'), {
      name,
      email,
      subject,
      message,
    })
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export { sendMessage };
