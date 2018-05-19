// Connection requirement 
  var connection = require("./connection.js");

// ORM creation and module export
  var orm = {
    selecAll: function(tableInput,burgRes) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableInput], function(err, result) {
        if (err) { throw err;
        }
       burgRes(result);
      });
    },
    insertOne: function(tableInput,col1,col2,burger,devoured,burgRes) {
      var queryString = "INSERT INTO ? (?,?) VALUES (?,?) ";
      console.log(queryString);
      connection.query(queryString, [tableInput, col1,col2, burger,devoured], function(err, result) {
        if (err) { throw err;}
        burgRes(result);
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
