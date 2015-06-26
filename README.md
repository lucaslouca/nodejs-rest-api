# nodejs-restapi
A simple REST API Server using <a href="https://nodejs.org" target="_blank">Node.js</a>, <a href="http://expressjs.com" target="_blank">Express</a> and <a href="https://www.mongodb.org" target="_blank">MongoDB</a>.

### The API supports the following operations:
- Fetch all messages in the database (GET)
- Find a message by id (GET)
- Add a new message to the database (POST)
- Update an existing message (PUT)
- Remove a message from the database (DELETE)

### How to start the server
1. <a href="https://nodejs.org/download/" target="_blank">Download and install</a> Node.js
2. <a href="https://www.mongodb.org/downloads" target="_blank">Download</a> and <a href="http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/" target="_blank">install</a>
3. Clone the repo: `$ git clone https://github.com/lucaslouca/nodejs-rest-api.git` 
4. `$ cd rest-api`
5. `$ npm install` (you may need root access)
6. Start MongoDB: `$ mongod`
7. Start the server: `$ node server.js`

When everything started just fine you should see something like this in your Terminal:
> Listening on port 3000...
>
> Succeeded connected to: mongodb://localhost/MyMessagesDB

### How to use the API
You can access the API using ``curl``:
> Retrieve all messages from the database
>
> ```curl -i -X GET http://localhost:3000/messages```	

<br>
> Retrieve only one message by id from the database
>
> ```curl -i -X GET http://localhost:3000/messages/558d457d9d63180c2b28011a```	

<br>
> Add a new message to the database
>
> ```curl -i -X POST -H "Content-Type: application/json" -d @newmessage.json http://localhost:3000/messages```

<br>
> Delete a message from the database based on its id
>
> ```curl -i -X DELETE http://localhost:3000/messages/558d45af9d63180c2b28011d```

<br>
> Update a message by id
>
> ```curl -i -X PUT -H "Content-Type: application/json" -d @newmessageUpdate.json http://localhost:3000/messages/558d457d9d63180c2b28011a```
