const express = require('express');
const app = express();
app.use(express.json());
const { User } = require('./db');
const path = require('path');

app.use('/dist', express.static('dist'));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

app.use('/api/orders', require('./routes/orders'));
app.use('/api/sessions', require('./routes/sessions'));
app.use('/api/products', require('./routes/products'));

app.use((err, req, res, next)=> {
console.log(err);
res.status(err.status || 500).send({ error: err });
});

module.exports = app;
