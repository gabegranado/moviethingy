import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';


const UserSchema = mongoose.Schema({
    username: {type: String, lowercase: true, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, lowercase: true, required: true, unique: true}
})

UserSchema.pre('save', function(next) {
    var user = this;
    bcrypt.hash(user.password, null, null, function(err, hash) {
        if(err) return next(err);
        user.password = hash;
        next();
    });
})

var User = mongoose.model('User', UserSchema);

export default User;
