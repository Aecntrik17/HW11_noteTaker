// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
const notes = require("./db/db.json");

// connecting express, activating the server
const app = express();
// setting the local host port for the app to run on
const PORT = 8080;
// allowing for nested objects
app.use(express.urlencoded({ extended: true }));
// when sending data back and forth make sure its formatted in JSON
app.use(express.json());
// for all frontend files, search the "public" folder
app.use(express.static("public"));

// Routes
// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  // when the / is requested use this function to send the html file to the browser
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
app.get("/notes", function (req, res) {
  // when the /notes is requested use this function to send the html file to the browser
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// Listener
app.listen(PORT, function () {
  console.log("App listening on PORT" + PORT);
});
