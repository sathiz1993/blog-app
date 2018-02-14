var app = require('../app')
var logger = require('../config')

// Create post
app.post('/users/:user_id/posts', function(req, res, nxt){
    res.send("Create post");
});

// Get post
app.get('/users/:user_id/posts/:post_id', function(req, res, nxt){
    res.send("Get post");
});

// Update post
app.patch('/users/:user_id/posts/:post_id', function(req, res, nxt){
    res.send("Update post");
});

// Delete post
app.delete('/users/:user_id/posts/:post_id', function(req, res, nxt){
    res.send("Delete post");
});

module.exports = app
