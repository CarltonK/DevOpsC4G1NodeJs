const express = require('express');

// Create an application
const app = express();
const port = process.env.PORT || 3000;

// Create my first request handler
app.get('/', (req, res) => {
    res.status(200).send({ message: true });
});

app.post('/', (req, res) => {
    res.status(200).send({ message: true });
});

app.listen(port, () => {
    console.log('The server is listening for requests');
});