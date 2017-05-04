var express = require('express');
var path = require('path');
var port = process.env.PORT || 4001;
var app = express();

app.use(express.static(path.join(__dirname, 'app')));

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'app/index.html'));
});

app.listen(port, function () {
    console.log('App listening at', port);
});