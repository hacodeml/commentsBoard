const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// the folder where our statics files will be served
app.use(express.static(__dirname + '/dist'));

// redirect the user to our index.html page regardless of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);