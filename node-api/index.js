var express = require('express');
var app = express();
var routes = require('./routes');
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('./helpers/cors');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/vehicles', {"useMongoClient": true })
.then(db => {
	console.log('connected to database')
}).catch(err => {
	console.log('cannot connect to database')
})
app.use(cors);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => {
	console.log('Listening at port '+port)
})