var http = require ('http'); // For serving a basic web page.
var mongoose = require ("mongoose");

// Here we find an appropriate database to connect to, defaulting to localhost if we don't find one.
var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/MyMessagesDB';

// The http server will listen to an appropriate port, or default to port 27017.
var theport = process.env.PORT || 27017;

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});

// Define the message schema
var messageSchema = new mongoose.Schema({
    author: String,
    body: String
});
var Message = mongoose.model('FluxStepMessage', messageSchema);

// Retrieve all messages from the database
// Test it using curl: curl -i -X GET http://localhost:3000/messages
exports.findAll = function(req, res) {
    Message.find({}).exec(function(err, result) {
      if (err) {
        console.log ('Error on find all!');
      } else {
        res.send(result);
      };
    });
};

// Retrieve only one message by id from the database
// Test it using curl: curl -i -X GET http://localhost:3000/messages/558d457d9d63180c2b28011a
exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving message: ' + id);
    Message.find({ _id: id }).exec(function(err, result) {
      if (err) {
        console.log ('Error on find by id!');
      } else {
        res.send(result);
      };
    });
};

// Add a new message to the database
// Test it using curl: curl -i -X POST -H "Content-Type: application/json" -d @newmessage.json http://localhost:3000/messages
exports.addMessage = function(req, res) {
    var messageJSON = req.body;
    console.log('Adding message: ' + JSON.stringify(messageJSON));
    var messageToPersist = new Message(messageJSON);
    messageToPersist.save(function (err) {
        if (err) {
            console.log ('Error on save!');
        } else {
            // added
        }
    });
}

// Delete a message from the database based on its id
// Test it using curl: curl -i -X DELETE http://localhost:3000/messages/558d45af9d63180c2b28011d
exports.deleteMessage = function(req, res) {
    var id = req.params.id;
    console.log('Deleting message: ' + id);
    Message.remove({ _id: id }, function (err) {
      if (err) {
        return handleError(err);
      } else {
        // removed
      }
    });
}

// Update a message by id
// Test it using curl: curl -i -X PUT -H "Content-Type: application/json" -d @newmessageUpdate.json http://localhost:3000/messages/558d457d9d63180c2b28011a
exports.updateMessage = function(req, res) {
    var id = req.params.id;
    var message = req.body;
    console.log('Updating message: ' + id);
    console.log(JSON.stringify(message));

    Message.findByIdAndUpdate(id, message, function (err, place) {
        if (err) {
            console.log('Error updating message: ' + err);
        } else {
            console.log('' + place + ' document(s) updated');
            res.send(place);
        }
    });
}