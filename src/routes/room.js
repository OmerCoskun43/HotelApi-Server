"use strict";

//! Room Routes:

const router = require("express").Router();
const {
  list,
  create,
  read,
  update,
  delete: _delete,
  listHotelRooms,
} = require("../controllers/room");

router.route("/").get(list).post(create);

router.route("/hotel/:id").get(listHotelRooms);

router.route("/:id").get(read).put(update).patch(update).delete(_delete);

module.exports = router;
