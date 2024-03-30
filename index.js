"use strict";
const express = require("express");
const app = express();
const cors = require("cors");

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require("dotenv").config();
app.use(cors());
const PORT = process.env?.PORT || 8000;
const HOST = process.env?.HOST || "127.0.0.1";

// asyncErrors to errorHandler:
require("express-async-errors");

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json());

// Logger:
// app.use(require("./src/middlewares/logger"));

// Auhentication:
app.use(require("./src/middlewares/authentication"));

// findSearchSortPage / res.getModelList:
app.use(require("./src/middlewares/queryHandler"));

/* ------------------------------------------------------- */
// Routes:
// Routes:

// routes/index.js:
app.use("/", require("./src/routes/"));

// HomePath:
app.get("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to Hotel API",
    // docs: {
    //   swagger: "/documents/swagger",
    //   redoc: "/documents/redoc",
    //   json: "/documents/json",
    // },
    user: req.user,
  });
});

/* ------------------------------------------------------- */

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log(HOST + ":" + PORT));

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.
