import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const AdminSchema = mongoose.Schema({
    username: {type: String, lowercase: true, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, lowercase: true, required: true, unique: true}
})

AdminSchema.pre('save', function(next) {
    var admin = this;
    bcrypt.hash(admin.password, null, null, function(err, hash) {
        if(err) return next(err);
        admin.password = hash;
        next();
    });
})

var Admin = mongoose.model('Admin', AdminSchema);

export default Admin;
