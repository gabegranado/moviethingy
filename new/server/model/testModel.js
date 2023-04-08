import mongoose from 'mongoose';


const TestSchema = mongoose.Schema({
    testData: {type: String, lowercase: true, required: true, unique: true}
})

var Test = mongoose.model('Test', TestSchema);

export default Test;
