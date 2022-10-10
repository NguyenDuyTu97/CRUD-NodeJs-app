// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456a@',
  database: 'sys'
});

// simple query
connection.query(
  'SELECT * FROM sys.student',
  function(err, results, fields) {
    if(err){
      console.log("error");
      return;
    }

    console.log(results,"result"); // results contains rows returned by server
   // console.log(fields); // fields contains extra meta data about results, if available
  }
);


export default connection;