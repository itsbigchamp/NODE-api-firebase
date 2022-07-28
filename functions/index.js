const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

//setup routes...
app.get("/test", (req, res) => {
  res.send("wow it actually Worked.");
});

app.get("/another-one", (req, res) => {
  res.send("this one Works, too!");
});

app.post('/add-one', (req, res)=> {
    res.send('add this one as well')
});

app.delete('/delete-one', (req, res) => {
    Array.splice(3,1)
})

exports.api = functions.https.onRequest(app);

exports.helloThere = functions.https.onRequest((req, res) => {
  res.send("Hello there Firebase Cloud User");
});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
