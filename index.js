require('dotenv').config({path: __dirname + '/.env'});
const express = require('express');
const app = express();
const routes = require('./routes/routes');

// Other middleware and configurations...

// Middleware for parsing JSON bodies
app.use(express.json());

// Static middleware
app.use(express.static("public/"))

// Mount the routes
 app.use('/', routes);

// app.get('/', (req, res) => {
//     res.send('Hello World!');
//     });
	

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
