import mongoose from 'mongoose';


const MovieTicketSchema = mongoose.Schema({
    movieId: {type: mongoose.Schema.Types.ObjectId},
    userId: {type: mongoose.Schema.Types.ObjectId},
})

var MovieTicket = mongoose.model('MovieTicket', MovieTicketSchema);

export default MovieTicket;
