const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");

const app = express();
app.use(express.json());

app.use(favicon(path.join(__dirname, "favicon_io", "favicon.ico")));

app.use("/dist", express.static("dist"));
app.use("/favicon_io", express.static("favicon_io"));
app.use(express.static("assets"));

app.get("/", (_req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.use('/api/orders', require('./routes/orders'));
app.use('/api/sessions', require('./routes/sessions'));
app.use('/api/products', require('./routes/products'));
app.use('/api/users', require('./routes/users'));
app.use('/api/stripe', require('./routes/stripe'));

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).send({ error: err });
});

module.exports = app;
