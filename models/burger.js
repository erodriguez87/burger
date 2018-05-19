// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
var tableCall = "burger";
var burger = {
  selectAll: function(tableCall,burgRes) {
    orm.selectAll(tableCall, function(res) {
      burgRes(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(burgers, burger_name, devoured,newBurger,newDevoured, burgRes) {
    orm.create(tableCall, cols, vals, function(res) {
      burgRes(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update(tableCall, objColVals, condition, function(res) {
      burgRes(res);
    });
  }
};

// Export the database functions for the controller
module.exports = burger;