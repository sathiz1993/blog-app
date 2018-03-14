var app = require('../app')
var logger = require('../config')
var post = require('../model/post')

// Create post
app.post('/users/:user_id/posts', function(req, res, nxt) {
    // Get the data from request
    let data = request.body.data;

    // Create post
    post.create(data, function(err, response) {
        if (err) {
            // Error in creating document
            res.status(400).json({
                'status': 'error',
                'code': 400,
                'message': err.errmsg
            });
        } else {
            // Successfull creation of post
            res.status(201).json({
                'status': 'success',
                'code': 201,
                'message': 'Successfully posted',
                'data': response
            });
        }
    });
});

// Get post
app.get('/users/:user_id/posts/:post_id', function(req, res, nxt) {
    // Get the post id
    let post = req.param.post_id;

    // Get the post
    post.findById(mangoose.Types.ObjectId(post_id), function(err, data){
        if (err) {
            // Return the error resposne
            res.status(500).json({
                'status': 'error',
                'code': 500,
                'message': 'Unable to get the data'
            })
        } else {
            // Return the post data
            res.status(200).json({
                'status': 'success',
                'code': 200,
                'data': data
            })
        }
    })
});

// Update post
app.patch('/users/:user_id/posts/:post_id', function(req, res, nxt) {
    res.send("Update post");
});

// Delete post
app.delete('/users/:user_id/posts/:post_id', function(req, res, nxt) {
    res.send("Delete post");
});

module.exports = app