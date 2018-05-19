// NPM Packages - dependencies that this application needs
  // ==============================================================================
  const express = require("express");
  const bodyParser = require("body-parser");
  const exphbs = require("express-handlebars");
  const routes = require("./controllers/burgers_controller.js");
  const path = require("path");

 // EXPRESS setup and initializing a default port
  // ==============================================================================
  // Create the express server
  const app = express();
  const PORT = process.env.PORT || 8080;

// BODY PARSER Sets up the Express app to handle data parsing
  // ==============================================================================
  app.use(express.static("public"));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

// ROUTING - setting up routes and handlebars
  // // ==============================================================================
  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");
  
  app.use(routes);
  

// LISTEN - start the server, let the console know the server is running
  // =============================================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
