//Load HTTP module
var express = require('express');
const app = express();
var http = require("http");
const path = require('path');
const routes = require('express').Router();
var port = process.env.PORT|| 8000 ;
var serveStatic = require('serve-static');


app.use('/scripts', express.static(__dirname + '/app/scripts'));
app.use('/scripts', express.static(__dirname + '/app/scripts/controllers'));
app.use('/bower_components', express.static(__dirname + '/app/bower_components'));
app.use('/styles', express.static(__dirname + '/app/styles'));

app.use('/views', express.static(__dirname + '/app/views'));
app.use('/Forms', express.static(__dirname + '/app/Forms'));
app.use('/tests', express.static(__dirname + '/app/tests'));
app.use('/PureJS', express.static(__dirname + '/app/PureJS'));
app.use('/w3test', express.static(__dirname + '/app/w3test'));
app.use('/unitTest', express.static(__dirname + '/app/unitTest'));
app.use('/servComm', express.static(__dirname + '/app/servComm'));
app.use('/dash', express.static(__dirname + '/app/dash'));

	
app.get('/', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('/app/index.html', { root: __dirname });
});

console.log("\n\n\n"+__dirname+" is the __dirname\n\n\n\n");
console.log("\n\n"+process.version+"\n\n\n\n");

// Print URL for accessing server
app.listen(port);
var date =new Date();
console.log('Server running at '+port+' at time: '+date);