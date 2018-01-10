const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
var conString = process.env.ELEPHANTSQL_URL || "postgres://vvtvxtci:h4smDLI0EeR6WeorXCHwpsa-lNoj7vcX@horton.elephantsql.com:5432/vvtvxtci";
var client = new pg.Client(conString);

//Init app
const app = express();

app.set('views,', path.join(__dirname,'views'));
app.set('view engine','pug');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Database connection
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  else{
    return console.log('Connected to database');
  }
});
//Home
app.get('/',function(req,res){
  res.render('index');
});

//Login
app.get('/login',function(req,res){
  res.render('login');
});
//Login Submit
app.post('/login', function(req, res){
  console.log('Submitted');
  return;
});
//Register
app.get('/register',function(req,res){
  res.render('register');
});
//Start server
app.listen(3000,function(){
  console.log('Server started on port 3000');
});
