firebase.initializeApp({
  apiKey: 'AIzaSyDUqLg_bkz-TfJ8-C1IfS8Dzvqid-IwfIg',
  authDomain: 'personal-website-v1-65420.firebaseapp.com',
  projectId: 'personal-website-v1-65420',
});

var db = firebase.firestore();

async function sendMessage(name, email, subject, message) {
  return new Promise((resolve, reject) => {
    db.collection('messages')
      .add({
        name,
        email,
        subject,
        message,
      })
      .then((result) => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
}
