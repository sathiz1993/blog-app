var mangoose = require('mangoose');
var schema = mangoose.Schema

// Create comment model schema
var commentSchema = new Schema({
    post_id: schema.ObjectId,
    comment: String,
    author: schema.ObjectId,
    created_at: Date,
    updated_at: Date
});

// Create a model using schema
var Comments = mangoose.model('Comments', commentSchema);

// Function to get comment in response format
Comments.methods.toResJSON = function (this) {
	return {
		'comment': this.comment,
		'created': this.created,
		'updated': this.updated,
		'author': this.author
	}
};

// Export to other module
module.exports = Comments;
