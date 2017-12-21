var express = require('express')
var path = require('path')
var app = express()

// Configure middle ware for static
app.use(express.static(path.join(__dirname, 'public/templates')))

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.render('index')
})

app.listen(3000);