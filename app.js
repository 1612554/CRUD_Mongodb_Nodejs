var express = require('express');
var properties = require('./config/properties');
var db = require('./config/database');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));

db();

app.use('/users', require('./routes/user'));

app.listen(properties.PORT, (req, res)=>{
    console.log("Server is listening on port", properties.PORT);
});