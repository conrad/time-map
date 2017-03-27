import path from 'path'
var express = require('express');
var app = express();

app.use(express.static('public'))

app.set('port', process.env.PORT || 3001)

app.get('/', function (req, res) {
  // res.sendFile('../dist/index.html');
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(app.get('port'), function () {
  console.log(`Listening on ${app.get('port')}`);
});
