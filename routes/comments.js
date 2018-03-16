var app = require('../app')
var logger = require('../config')
var comment = require('../model/comment')

// Create comment
app.post('/posts/:post_id/comments', function(req,res,nxt){
	// Get the data from request
	let data = request.body.data;

	// Get the post id
	let post_id = req.param.post_id

	// Embeded post doc and create

	// Create the comment
	comment.create(data, function(err, response){
		if (err){
			// Error in creating post
			res.status(500).json({
				'status': 'error',
				'code': 500,
				'message': err.errmsg
			});
		} else {
			// Comment creation success
			res.status(201).json({
				'status': 'success',
				'code': 201,
				'message': 'Comment creation success.'
			});
		}
	})
});

// Get all comment of a post
app.get('/posts/:post_id/comments', function(req, res, nxt){
    // Get the post id
	let post_id = req.param.post_id

	// Query for getting comments of the post
	query = {
		'post_id': post_id
	}

	comment.find(query).limit(10).sort({'created': -1}).exec(function(err, docs){
		if (comments) {
			// Return the response with filtered results
			res.json(200).json({
				'status': 'success',
				'code': 200,
				'data': docs.map(doc:function(doc){
					return doc.toResJSON();
				});
			});
		} else {
			// Rerurn the error response
			res.json(400).json({
				'status': 'error',
				'code': 500,
				'message': 'Unable to get the data'
			});
		}
	});
});

// Get single comment
app.get('/posts/:post_id/comments/:comment_id', function(req, res, nxt){
    res.send("Get the particular comment");
});

// Update the comment
app.patch('/posts/:post_id/comments/:comment_id', function(req, res, nxt){
    res.send("Update the particular comment");
});

// Delete the comment
app.delete('/posts/:post_id/comments/:comment_id', function(req, res, nxt){
    res.send("Delete the particular comment");
});

module.exports = app
