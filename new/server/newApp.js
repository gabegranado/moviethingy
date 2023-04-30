import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoutes from './routes/userApi.js';
import testRoutes from './routes/testApi.js';
import movieRoutes from './routes/movieApi.js';
import movieTicketRoutes from './routes/movieTicketApi.js';
import adminRoutes from './routes/adminApi.js';
import passport from './auth/passport.js';

const app = express();
import * as CONFIG from "../../config.json" assert { type: "json" };
var dbPsw = CONFIG.default.dbPassword;
import sprintf from 'sprintf';
import MovieTicket from './model/movieTicketModel.js';

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/user', userRoutes);
app.use('/test', testRoutes);
app.use('/movie', movieRoutes);
app.use('/movieTicket', movieTicketRoutes);
app.use('/admin', adminRoutes);

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
