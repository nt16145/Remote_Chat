const functions = require('firebase-functions')
const express = require('express')
const basicAuth = require('basic-auth-connect')
const app = express()
require('dotenv').config()

app.all('/*', basicAuth(function (user, password) {
  return user === process.env.USER && password === process.env.PASS;
}));

app.use(express.static(__dirname + '/static/'))

exports.app = functions.https.onRequest(app)