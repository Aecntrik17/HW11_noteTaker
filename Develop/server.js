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
