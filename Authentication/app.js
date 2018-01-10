const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
var conString = process.env.ELEPHANTSQL_URL || "postgres://vvtvxtci:h4smDLI0EeR6WeorXCHwpsa-lNoj7vcX@horton.elephantsql.com:5432/vvtvxtci";
var client = new pg.Client(conString);

//Init app
const app = express();

//Models
let User = require('./models/user')
app.set('views,', path.join(__dirname,'views'));
app.set('view engine','pug');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Set Public Folder
app.use(express.static(path.join(__dirname,'public')));
//Database connection
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  else{
    return console.log('Connected to ElephantSQL Database');
  }
});
//Home
app.get('/',function(req,res){
  res.render('index');


  client.query('SELECT username AS "username", email as "email" FROM users', function(err, result) {
  if(err) {
    return console.error('error running query', err);
  }
  else{
    for(var i=0;i<result.rows.length;i++)
    {
      console.log(result.rows[i].username+' '+result.rows[i].email);
    }
  }
  client.end();
  });
});
/*
//Admin
app.get('/admin',function(req,res){
  User.find({}, function(err, users){
    if(err){
      console.log(err);
    }
    else{
      res.render('admin',{
        username: username
      });
    }
  });
});*/
//Login
app.get('/login',function(req,res){
  res.render('login');
});
//Login Submit
app.post('/login', function(req, res){

});
//Register
app.get('/register',function(req,res){
  res.render('register');
});
//Register Submit
app.post('/register',function(req,res){
  console.log('Register submitted');
  var user = new User();
  user.username = req.body.username;
  user.email = req.body.email;
  user.password = req.body.password;
  //Insert into Database
  client.query('INSERT into Users(username,email,password) VALUES($1,$2,$3)',[user.username,user.email,user.password],function(err,result){
  if(err){
    console.log('Register insert error');
  }
  else{
    console.log('New user inserted into databse');
  }
  client.end();
  });

  //console.log(req.body.username);
  return;
});
//Start server
app.listen(3000,function(){
  console.log('Server started on port 3000');
});
