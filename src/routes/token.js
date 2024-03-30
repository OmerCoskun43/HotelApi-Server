"use strict";

//! routes/token:
const router = require("express").Router();

const {
  list,
  create,
  read,
  update,
  delete: _delete,
} = require("../controllers/token");

// URL: /tokens

router.route("/").get(list).post(create);

router.route("/:id").get(read).put(update).patch(update).delete(_delete);

/* ------------------------------------------------------- */
module.exports = router;
