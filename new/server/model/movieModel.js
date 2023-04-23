import mongoose from 'mongoose';


const MovieSchema = mongoose.Schema({
    movieTitle: {type: String, lowercase: true, required: true, unique: false},
    movieTheater: {type: String, lowercase: true, required: true, unique: false},
    movieTheaterNumber: {type: String, lowercase: true, required: true, unique: false},
    movieDate: {type: String, lowercase: true, required: true, unique: false},
    movieTime: {type: String, lowercase: true, required: true, unique: false},
    nowPlaying: {type: Boolean, default: false},
    // moviePoster: {type: String, lowercase: true, required: true, unique: true}
})

var Movie = mongoose.model('Movie', MovieSchema);

export default Movie;
