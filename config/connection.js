// Setup MySQL connection
var mysql = require("mysql");

// MySQL DB Connection Information
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db",
  port: 8889
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export the connection for the ORM
module.exports = connection;