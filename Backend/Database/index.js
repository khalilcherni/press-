const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', //username imported from the config files
    password: 'root', //password imported from the config files
    database: 'press' //database name imported from the config files
  });
console.log("database is connected 👽");

module.exports=connection