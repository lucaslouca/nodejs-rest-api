var express = require('express'),
    api = require('./routes/api'),
	bodyParser = require('body-parser');
 
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Handle API calls 
app.get('/messages', api.findAll);
app.get('/messages/:id', api.findById);
app.post('/messages', api.addMessage);
app.put('/messages/:id', api.updateMessage);
app.delete('/messages/:id', api.deleteMessage);
 
app.listen(3000);
console.log('Listening on port 3000...');