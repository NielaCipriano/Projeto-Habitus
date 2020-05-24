const mongoose = require('mongoose');


//login
const UserSchema = new mongoose.Schema({
    email: String,
});

module.exports = mongoose.model('User',UserSchema);
