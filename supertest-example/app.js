const express = require('express');
const bodyParser = require('body-parser');
const Car = require('./models/Cars');
const carService = require('./services/CarService');

const app = express();

app.use(bodyParser.json());


app.get('/test', (req, res) => {
  res.status(200).json({ name: 'KeepCoding' });
});

app.post('/car', (req, res) => {

  const car = new Car(req.body._model, req.body._cv);
  carService.push(car);

  res.status(200).json({ car });
});

module.exports = app;
