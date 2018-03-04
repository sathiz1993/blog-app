var app = require('../app')
var logger = require('../config')
var user = require('../model/users')
var mangoose = require('mongoose')

// Create users
app.post('/api/v1/users', function(req, res, nxt) {
    // Get data from request
    let data = req.body.data;

    // Create user
    user.create(data, function(err, success) {
        if (err) {
            // Error in creating document
            res.status(400).json({
                'status': 'error',
                'code': '400',
                'message': err.errmsg,
            });
        } else {
            // Sucessful creation of document
            res.send(201).json({
                'status': 'success',
                'code': '200',
                'message': 'User created successfully',
                'data': {
                    'user_id': success._id
                }
            });
        }
    })
});

// Get user
app.get('/api/v1/users/:user_id', function(req, res, nxt) {
    let user_id = req.param.user_id;
    user.findById(mangoose.Types.ObjectId(user_id), function(err, doc) {
        if (err) {
            // Error response
            res.status(404).json({
                'status': 'error',
                'code': '404',
                'message': err
            });
        } else {
            // Success response
            res.status(200).json({
                'status': 'success',
                'code': '200',
                'message': 'User find successfully',
                'data': doc
            });
        }
    })
});

// Update user
app.patch('/api/v1/users/:user_id', function(req, res, nxt) {
    let user_id = req.param.user_id;
    user.findById(mangoose.Types.ObjectId(user_id), function(err, doc){
        if (err) {
            res.status(400).json({
                // Error response
                'status': 'error',
                'code': 400,
                'message': err
            })
        }
        else {
            // Success response
            res.status(200).json({
                'status': 'success',
                'code': 200,
                'message': 'User updated successfully'
            })
        }
    })
});

// Get user
app.delete('/api/v1/users/:user_id', function(req, res, nxt) {
    var user_id = req.param.user_id;
    res.send("Delete user");
});

module.exports = app