var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api.js')(router);
var path = require('path');
var CONFIG = require('../config.json');
var dbPsw = CONFIG.dbPassword;
const uri = "mongodb+srv://casgrana:${dbPsw}@cluster0.jlyjhgq.mongodb.net/?retryWrites=true&w=majority";

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
//backend routes
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




// const { MongoClient, ServerApiVersion } = require('mongodb');
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
// async function run() {
    //     console.log('testetings')
    //   try {
    //     const database = client.db('sample_airbnb');
    //     const movies = database.collection('listingsAndReviews');
    
    //     // Query for a movie that has the title 'Back to the Future'
    //     const query = { _id: '1003530' };
    //     const movie = await movies.findOne(query);
    
    //     // console.log(movie);
    //   } finally {
    //     // Ensures that the client will close when you finish/error
    //     await client.close();
    //   }
    // }
    //