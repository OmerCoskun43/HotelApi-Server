"use strict";
//! routes/auth:

const router = require("express").Router();

const { login, logout } = require("../controllers/auth");

// URL: /auth

// Login/logout:
router.post("/login", login);
router.get("/logout", logout);

/* ------------------------------------------------------- */
module.exports = router;
