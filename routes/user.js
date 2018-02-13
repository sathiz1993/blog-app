var app = require('../app')
var logger = require('../config')

// Create users
app.post('/users', function(req,res,nxt){
    res.send("Create users");
});


