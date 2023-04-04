var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./routes/api.js')(router);
var path = require('path');
var CONFIG = require('../../config.json');
var dbPsw = CONFIG.dbPassword;
var sprintf = require('sprintf');
const uri = sprintf("mongodb+srv://casgrana:%s@cluster0.jlyjhgq.mongodb.net/?retryWrites=true&w=majority", dbPsw);
var cors = require('cors')

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
//backend routes
app.use(cors())
app.use('/api', appRoutes);


mongoose.connect(uri, function(err) {
    if (err) {
        console.log('error, not connected to database' + err);
    } else {
        console.log('connection to database succesful');
    }
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
})

// run().catch(console.dir);
app.listen(port, function() {
    console.log('running the server on port ' + port);
});
