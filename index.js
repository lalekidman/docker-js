"use strict";
const express = require("express");
const app = express();
const port = process.env['PORT'] || 5000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const uuid = require('uuid/v4')
const User = require('./models/user')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
console.log('eheheh')
mongoose
  .connect('mongodb://mongodb:27017/mongodb_one', {useNewUrlParser: true})
  .then(() => console.log('DB CONNEddCTED'))
  .catch((err) => console.log('Db connection failed: ', err.message))
app.get('/', (req, res) => {
  console.log('hellow hahahah')
  User
    .find()
    .then((users) => {
      res.send(users)
    })
    .catch((err) => {
      res.send({error: err.message})
    })
})
app.post('/', (req, res) => {
  const {firstName, lastName} = req.body
  const id = uuid()
  console.log('hahaha')
  const newUser = new User({
    _id: id,
    id: id,
    firstName,
    lastName
  })
  newUser.save()
  res.send(newUser)
})
app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})
