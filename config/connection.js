// Create the connection to mySQL
  // ===========================================

// Require mysql
  const mysql = require("mysql");

// Set up our connection information
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "SQLPassword!",
    database: "burgers_db"
  });

// Connect to the database
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

// Export connection
  module.exports = connection;
