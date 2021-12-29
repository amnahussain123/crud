const db = require('./config');
const express = require('express');
const bodyParser = require('body-parser'); 
const { get } = require('express/lib/response');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/',db.getUser);
app.post('/users', db.createUser);
app.get('/users', db.getUser);
// app.get('/users/:id', db.getUserById);
app.get('/users/edit/:id', db.getUserById);
app.get('/users/delete/:id', db.deleteUserById);
app.post('/users/update', db.updateUser);
app.listen(3000, function() {
    console.log('listening on 3000')
  })