# nodejs-restapi
A simple REST API Server using <a href="https://nodejs.org" target="_blank">Node.js</a>, <a href="http://expressjs.com" target="_blank">Express</a> and <a href="https://www.mongodb.org" target="_blank">MongoDB</a>.

### The API supports the following operations:
- Fetch all messages in the database (GET)
- Find a message by id (GET)
- Add a new message to the database (POST)
- Update an existing message (PUT)
- Remove a message from the database (DELETE)

### How to run the code
1. <a href="https://nodejs.org/download/" target="_blank">Download and install</a> Node.js
2. <a href="https://www.mongodb.org/downloads" target="_blank">Download</a> and <a href="http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/" target="_blank">install</a>
3. Clone the repo: `$ git clone https://github.com/lucaslouca/nodejs-rest-api.git` 
4. `$ cd rest-api`
5. `$ npm install` (you may need root access)
6. Start MongoDB: `$ mongod`
7. Start the server: `$ node server.js`

When everything started just fine you should see something like this in your Terminal:
> Listening on port 3000...
> Succeeded connected to: mongodb://localhost/MyMessagesDB

