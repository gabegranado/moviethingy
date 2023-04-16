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

import userRoutes from './routes/userApi.js';
import testRoutes from './routes/testApi.js';
import movieRoutes from './routes/movieApi.js';
import movieTicketRoutes from './routes/movieTicketApi.js';
import passport from './auth/passport.js';


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/user', userRoutes);
app.use('/test', testRoutes);
app.use('/movie', movieRoutes);
app.use('/movieTicket', movieTicketRoutes);

const CONNECTION_URL = sprintf("mongodb+srv://casgrana:%s@cluster0.jlyjhgq.mongodb.net/?retryWrites=true&w=majority", dbPsw);
const PORT = process.env.PORT|| 3000;

mongoose.connect(CONNECTION_URL, function(err) {
    if (err) {
        console.log('error, not connected to database' + err);
    } else {
        console.log('connection to database succesful');
    }
})

app.listen(PORT, function() {
    console.log('running the server on port ' + PORT);
});
