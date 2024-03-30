"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// ROUTER INDEX:

// URL: /

// auth:
router.use("/auth", require("./auth"));
// user:
router.use("/users", require("./user"));
// token:
router.use("/tokens", require("./token"));
router.use("/hotels", require("./hotel"));
// room:
router.use("/rooms", require("./room"));

// reservation:
router.use("/reservations", require("./reservation"));

/* ------------------------------------------------------- */
module.exports = router;
