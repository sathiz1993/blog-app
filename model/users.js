var mangoose = require('mongoose');
var schema = mangoose.Schema

// Create user schema
var userSchema = new schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    age: Number,
    created_at: Date,
    updated_at: Date
});

// Create a model using schema
var User = mangoose.model('User', userSchema);

// Export to other module
module.exports = User;

