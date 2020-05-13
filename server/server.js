const express = require('express');
const app = express();
const port = 3000 || process.env.port



var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'jezebel',
  database: 'ww2Mod'
});
connection.connect();

app.listen(port, () => {
  console.log(`On port # ${port}`)
})