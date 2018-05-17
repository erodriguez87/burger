// NPM Packages - dependencies that this application needs
  // ==============================================================================
  const express = require("express");
  const bodyParser = require("body-parser");
  const path = require("path");

  // EXPRESS setup and initializing a default port
  // ==============================================================================
  // Create the express server
  const app = express();
  const PORT = process.env.PORT || 8080;

// BODY PARSER Sets up the Express app to handle data parsing
  // ==============================================================================
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

// ROUTING - pointing our server to the routes
  // ==============================================================================
  require("./app/routes/apiRoutes.js")(app); //this needs to go first, html uses
  require("./app/routes/htmlRoutes.js")(app);

// LISTEN - start the server, let the console know the server is running
  // =============================================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
