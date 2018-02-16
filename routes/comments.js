var app = require('../app')
var logger = require('../config')

// Create comment
app.post('/posts/:post_id/comments', function(req,res,nxt){
    res.send("add post");
});

// Get all comment of a post
app.get('/posts/:post_id/comments', function(req, res, nxt){
    res.send("Get all comment");
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
