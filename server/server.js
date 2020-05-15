const express = require('express');
const app = express();
const port = 3000 || process.env.port



// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'jezebel',
//   database: 'ww2Mod'
// });
// connection.connect();

// app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => 
  console.log(`On port # ${port}`)
)

app.get('/ammo', (req, res) => {
  console.log('server up')
    res.send({foo: "sfds"})
    // if (error) throw error;
});


