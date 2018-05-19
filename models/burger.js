// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");
const tableCall = "burgers";
const burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(burgers, burger_name, devoured,newBurger,newDevoured, cb) {
    orm.create(tableCall, cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update(tableCall, objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = burger;