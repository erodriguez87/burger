// Connection requirement 
  const connection = require("./connection.js");

// ORM creation and module export
  var orm = {
    selectAll: function(tableInput,cb) {
      var queryString = "SELECT * FROM burgers";
      console.log('select all querystring ' + queryString);
      connection.query(queryString, function(err, result) {
        if (err) { throw err;
        }
       cb(result);
      });
    },
    insertOne: function(tableInput,col1,col2,burger,devoured,cb) {
      var queryString = "INSERT INTO ? (?,?) VALUES (?,?) ";
      console.log(queryString);
      connection.query(queryString, [tableInput, col1,col2, burger,devoured], function(err, result) {
        if (err) { throw err;}
        cb(result);
      });
    },
    updateOne: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
      var queryString =
        "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

      connection.query(
        queryString,
        [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
        function(err, result) {
          if (err) { throw err; }
          console.log(result);
        }
      );
    }
  };

  module.exports = orm;
