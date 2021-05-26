const express = require('express');

var app = express();

app.use(express.static('./25.html'));

app.listen(3000);

console.log('Express iniciado...');