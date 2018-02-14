var app = require('../app')
var logger = require('../config')

// Create users
app.post('/users', function(req,res,nxt){
    res.send("Create users");
});

// Get user
app.get('/users/:user_id', function(req,res,nxt){
    var user_id = req.param.user_id;
    res.send("Get user");
});

// Update user
app.patch('/users/:user_id', function(req,res,nxt){
    var user_id = req.param.user_id;
    res.send("Update user");
});

// Get user
app.delete('/users/:user_id', function(req,res,nxt){
    var user_id = req.param.user_id;
    res.send("Delete user");
});

module.exports = app

