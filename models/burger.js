// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");
const tableCall = "burgers";
const burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },

  insertOne: function(burgers, burger_name, devoured,newBurger,newDevoured, cb) {
    orm.insertOne('burgers', req.params.burger_name, req.params.devoured,req.params.id,cb, function(res) {
      cb(res);
    });
  },

  updateOne: function(tableOneCol, tableTwoForeignKey,ableOne,tableTwo, cb) {
    orm.updateOne(burger, objColVals, condition, function(res) {
      cb(res);
    });
  },

  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = burger;