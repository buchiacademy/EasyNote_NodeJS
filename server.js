// import packages
const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse request of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

/* DataBase configuration start */
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connection the DataBase
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
})
    .then(() => {
        console.log('Successfully connected to DataBase');
    })
    .catch((err) => {
        console.log('Could not connect to DataBase. Exiting now...', err);
        process.exit();
    });

/* DataBase configuration end */

// define a base route
app.get('/', (req, res) => {
    res.json({ 'message': "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes." });
});

// listen for requests
app.listen(3000, () => {
    console.log('================================');
    console.log('Server is listening on port 3000');
    console.log('================================');
});