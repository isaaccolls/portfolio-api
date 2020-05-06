const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const config = require('./firebase-config.json');

firebase.initializeApp({
  credential: firebase.credential.cert(config),
  databaseURL: 'https://portfolio-api-77f4e.firebaseio.com/',
});

exports.api = functions.https.onRequest((req, res) => {
  res.header('Content-Type', 'application/json');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'GET') {
    const data = firebase.database().ref('/');
    data.on('value', (snapshot) => {
      // res.json(snapshot.val());
      res.json({ test: 420 });
    });
  }
});
