var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// var declaration
const app = express();
const person = {
  name: "abhishek",
  age: 28
};
const persons = [
  { name: "Abhishek", age: 28 },
  { name: "Surekha", age: 34 },
  { name: "Sarath", age: 23 },
  { name: "Dom", age: 34 }
];

// application settings
// ref https://expressjs.com/en/4x/api.html#app.settings.table
app.set('title', 'play with express');
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

// middleware
// first user defined middleware
var logger = (req, res, next) => {
  console.log('Logging...');
  next(); // chaining middlewares
};

// third party middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// express built in middleware
// by default loads index.html
app.use(express.static(path.join(__dirname, 'public', 'html'))); 

// routes
app.get('/',(req, res)=>{
  res.send('Hello World');
});
app.get('/json',(req, res)=>{
  res.json(person);
});
app.get('/array',(req, res)=>{
  res.json(persons);
});
app.get('/firstEjs', (req, res) => {
  res.render('index');
});
app.get('/doctordEjs', (req, res) => {
  res.render('doctord', {
    name: "Abhishek Das",
    users: persons
  });
});
// this will not work, because of order. 
// It should be before app.METHOD
// app.use(logger);

app.listen(3000, () => {
  console.log('server started on port 30000');
});