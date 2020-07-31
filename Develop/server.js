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

// API routes
app.get("/api/notes", function (req, res) {
  // when the /api/notes is requested use this function to send the data back in json format
  res.json(notes);
});

app.post("/api/notes", function (req, res) {
  const newNote = req.body;
  // setting conditional to check if the note has an id, and assigns a new accordingly
  if (notes.length === 0) {
    newNote.Id = 1;
  } else {
    const newNoteId = notes[notes.length - 1].Id + 1;
    newNote.Id = newNoteId;
  }

  console.log(newNote);
  // pushing the new note to the notes array
  notes.push(newNote);
  // writing the string into the json file, in json format
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  res.json(notes);
});

// method to remove an id from the notes array
app.delete("/api/notes/:id", function (req, res) {
  const id = req.params.id;
  console.log(newNote);
  // filter?
  // splice?
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  res.json(notes);
});

// Listener
app.listen(PORT, function () {
  console.log("App listening on PORT" + PORT);
});
