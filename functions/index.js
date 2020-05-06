const express = require('express');
const cors = require('cors');
const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const config = require('./firebase-config.json');

firebase.initializeApp({
  credential: firebase.credential.cert(config),
  databaseURL: 'https://portfolio-api-77f4e.firebaseio.com/',
});

const getCertificates = (req, res) => {
  const data = firebase.database().ref('/');
  data.on('value', (snapshot) => {
    const { certificates } = snapshot.val().data;
    res.status(200).send(certificates);
  });
};

const getEducation = (req, res) => {
  const data = firebase.database().ref('/');
  data.on('value', (snapshot) => {
    const { education } = snapshot.val().data;
    res.status(200).send(education);
  });
};
const getProjects = (req, res) => {
  const data = firebase.database().ref('/');
  data.on('value', (snapshot) => {
    const { projects } = snapshot.val().data;
    res.status(200).send(projects);
  });
};
const getSkills = (req, res) => {
  const data = firebase.database().ref('/');
  data.on('value', (snapshot) => {
    const { skills } = snapshot.val().data;
    res.status(200).send(skills);
  });
};
const getExperience = (req, res) => {
  const data = firebase.database().ref('/');
  data.on('value', (snapshot) => {
    const { experience } = snapshot.val().data;
    res.status(200).send(experience);
  });
};

const app = express();
app.use(cors({ origin: true }));

app.get('/certificates', getCertificates);
app.get('/education', getEducation);
app.get('/projects', getProjects);
app.get('/skills', getSkills);
app.get('/experience', getExperience);

exports.api = functions.https.onRequest(app);
