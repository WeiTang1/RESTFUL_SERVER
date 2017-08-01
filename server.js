var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    User = require('./api/models/todoListModel');
mongoose.connect('mongodb://weitang:weitang@ds127993.mlab.com:27993/weitang1');
var  bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(err, req, res, next) {
    // Do logging and user-friendly error message display
    console.error(err);
    res.status(500).send('somethingbroke');
});

var routes = require('./api/routes/todoListRoutes');
routes(app);
app.listen(port);

console.log('API working on '+port);

