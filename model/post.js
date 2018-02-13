var mangoose = require('mangoose');
var schema = mangoose.Schema

// Create ranking subschema
var rankSubschema = new Schema({
    like: Boolean,
    dislike: Boolean,
    last_updated: Date,
    user: schema.ObjectId
});

// Create post schema
var postSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: schema.ObjectId,
        required: true
    },
    created_at: Date,
    updated_at: Date,
    categories: Array,
    tags: Array,
    ranking: rankSubschema
});

// Create a model using schema
var Post = mangoose.model('Post', postSchema);

// Export to other module
module.exports = Post;
