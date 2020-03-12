const express = require("express");
var path= require('path');
const consign = require("consign");
var bodyParser=require('body-parser');
const app = express();

app.set('views', path.join(__dirname, '../app/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({extended:true}));


consign().include('app/routes')
.then('config/dbconnection.js')
.then('app/models')
// .then('app/controllers')
.into(app)

module.exports= app;