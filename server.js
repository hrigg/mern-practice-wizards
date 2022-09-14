///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// initialize .env variables
require("dotenv").config();

// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT, MONGODB_URI } = process.env;
const mongoose = require('mongoose');

// import express
const express = require("express");

// create application object
const app = express();

const wizController = require('./controllers/wizard-controller')
const cors = require("cors")
const morgan = require("morgan")
///////////////////////////////
// MIDDLEWARE
////////////////////////////////
app.use(express.json()); // parse json bodies - this will run before our request accesses the people router

// all requests for endpoints that begin with '/people'
app.use('/wizards', wizController)
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging for developments

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
mongoose.connect(MONGODB_URI)

// Connection Events
mongoose.connection
  .on("open", () => console.log("Youre connected to mongoose"))
  .on("close", () => console.log("Youre disconnected from mongoose"))
  .on("error", (error) => console.log(error));



///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
