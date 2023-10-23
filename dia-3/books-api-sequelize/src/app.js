const express = require('express');
const UserBookController = require('./controllers/userBook.controller');

const app = express();

app.use(express.json());

app.get('/userbooks/:id', UserBookController.getUsersBooksById);

module.exports = app;
