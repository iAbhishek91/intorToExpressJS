const express = require('express');

const app = express();

app.set('jsonp callback name', 'jsonpCallback');

// user defined middleware
const sayHello = (req, _, next) => {
  // only one response can be sent and cant configure header multiple time
  //res.send(['a', 'b', 'c']);
  console.log(`Hi, you have invoked the server at "${req.url}"`);
  next();
};
const sayGoodBye = (_, res) => {
  console.log('Good Bye');
}

const jsonpCallback = () => {
  console.log('jsonp callback is called successfully');
};

//invoke middleware in sequence
app.use(sayHello);
app.get('/', (req, res, next) => {
  console.log(' processing something for u....');
  res.send('i am in the body');
  next();
}, sayGoodBye);

// demostration of json
app.get('/json', (_, res) => {
  res.json({first: "abhishek", last: "das"})
});

// demostration of jsonp
app.get('/jsonp', (_, res) => {
  res.jsonp({first: "doctor", last: "D"})
});

app.get('/status/Demo404', (_, res) => {
  res.status(404).send('not found');
});

app.get('/sendStatus/Demo404', (_, res) => {
  res.sendStatus(404);
});

app.get('/status/Demo403', (_, res) => {
  res.status(403).json({error: 'Forbidden'});
});

app.get('/sendStatus/Demo404', (_, res) => {
  res.sendStatus(404);
});

app.get('/redirectToSendStatusDemo404', (_, res) => {
  console.log('redirecting...');
  res.redirect('/sendStatus/Demo404');
});

app.get('/redirectGoogle', (_, res) => {
  console.log('redirecting...');
  res.redirect('http://www.google.com');
});

app.get('/redirectOneStepBack', (_, res) => {
  console.log('redirecting...');
  res.redirect('..');
});

//server starts listening
app.listen(4321, () => {
  console.log('server is listening @4321...');
});