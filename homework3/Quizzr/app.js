const express = require('express');
const logger = require('morgan');
let quiz = require('./quizzr.json');

const path = require('path');
const app = express();

let results = [];
let answers = {};

app.set('view engine', 'ejs');
app.use(logger('dev'));

app.use(express.urlencoded( { extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
  res.send("HEY TRY ADDING /quiz at the end of the url");
});



app.get('/quiz', (req, res) => {
  res.render('quiz', { quiz:quiz });
});

app.post('/results', (req, res) => {
  answers = req.body;
  // store answers
  // check answers
  //reditect to /results with marked answers
//   res.redirect('/results');
  quiz.questions.forEach((question, i) => {
    question.answerIndex == answers[`answer${i}`]
    ? results.push(true) : results.push(false);
  });

  res.redirect('/correct');
});

app.get('/results', (req, res) => {
  res.send("results");
});

app.get('/correct', (req, res) => {
  res.render("correct",  { results: results, quiz: quiz });
});


const PORT = 4646;
const DOMAIN = "localhost";
app.listen(PORT, DOMAIN, () => {
  console.log(`Server is running on ${DOMAIN}:${PORT}`);
});
