const connection = require('../config/connection.js'); 

function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

const orm = {
  selectAll: function(table, cb) {
    let queryString = `SELECT * FROM burgers;`; 
    
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }; 
      cb(result);
    }); 
  }, 
  insertOne: function(table, cols, vals, cb) {
    let queryString = `INSERT INTO burgers (${cols.toString()}) `; 
    queryString += `VALUES (${printQuestionMarks(vals.length)});`;

    connection.query(queryString, vals, function(err, result) {
      if (err) {throw err;} 
      cb(result); 
    });
  }, 
  updateOne: function(table, objColVals, condition, cb) {
    let queryString = `UPDATE burgers SET ${objToSql(objColVals)} `; 
    queryString += `WHERE ${condition};`; 
    
    connection.query(queryString, function(err, result) {
      if (err) {throw err;}
      cb(result); 
    });
  }, 
  delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
}; 

module.exports = orm; 