// Setup dependencies
  const express = require("express");
  const router = express.Router();

// Import the burger model
  const burger = require("../models/burger.js");

// Create routes and logic, export
  router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      let hbsObj = {
        burgers: data
      };
      console.log(hbsObj);
      res.render("index", hbsObj);
    });
  });

router.post("/api/burgers", function(req, res) {
  burger.insertOne([
     'burger_name', 'devoured'
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put('/api/burgers/:id', function(req, res) {
  let condition = `id = ${req.params.id}`; 
  let objColVals = {devoured: req.body.devoured}; 
  
  burger.updateOne(objColVals, condition, function(result) {
    // return 404 if no error is found
    if (result.changedRows === 0) {
      return res.status(404).end(); 
    } else {
      res.status(200).end(); 
    }
  }); 
});

router.delete("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;
