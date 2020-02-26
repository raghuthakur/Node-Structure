const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
var morgan = require('morgan');
require('./config/constants')
const con = require('./config/database').con;
const user_v1 = require('./routes/api/v1/user');
const admin = require('./routes/view/admin');


app.use(cors());
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next()
});
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use('/api/v1/user', user_v1);
app.use('/admin', admin);

//setup port for server
server.listen(6565, function() {
    console.log("Server now connected on port 6565.");
});