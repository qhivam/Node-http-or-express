// http methods

//Usage in Node.js
//In a Node.js application using the http or express module, you can handle these methods as follows:


const express = require('express');
const app = express();

app.use(express.json());

app.get('/users/:id', (req, res) => {
    // Handle GET request
    res.send(`GET request for user ${req.params.id}`);
});

app.post('/users', (req, res) => {
    // Handle POST request
    res.send(`POST request with data: ${JSON.stringify(req.body)}`);
});

app.put('/users/:id', (req, res) => {
    // Handle PUT request
    res.send(`PUT request to update user ${req.params.id} with data: ${JSON.stringify(req.body)}`);
});

app.delete('/users/:id', (req, res) => {
    // Handle DELETE request
    res.send(`DELETE request for user ${req.params.id}`);
});

app.patch('/users/:id', (req, res) => {
    // Handle PATCH request
    res.send(`PATCH request to update user ${req.params.id} with data: ${JSON.stringify(req.body)}`);
});

app.head('/users/:id', (req, res) => {
    // Handle HEAD request
    res.status(200).end();
});

app.options('/users', (req, res) => {
    // Handle OPTIONS request
    res.set('Allow', 'GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD');
    res.status(204).end();
});

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});