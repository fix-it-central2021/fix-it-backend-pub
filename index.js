
const express = require("express");
const app = express();
app.use(express.json());




const repuestos_todos = require('./routes/repuestos_todos')


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,access-token,access-user");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE , PUT");
    next();
  });
  
app.use('/repuestos',repuestos_todos)


app.use(express.static('public'))

module.exports = app
