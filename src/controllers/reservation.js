"use strict";

//! Reservation Controller:

const Reservation = require("../models/reservation");
const Room = require("../models/room");
const User = require("../models/user");

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(Reservation, {}, ["userId", "roomId"]);

    res.status(200).send({
      error: false,
      message: "Reservations listed successfully",
      details: await res.getModelListDetails(Reservation),
      data,
    });
  },
  create: async (req, res) => {
    const room = await Room.findOne({ _id: req.body.roomId });

    const data = await Reservation.create({
      ...req.body,
      price: room.price,
      guestNumber: Date.now(),
      
    });

    res.status(201).send({
      error: false,
      message: "Reservation created successfully",
      data,
    });
  },

  read: async (req, res) => {
    const data = await Reservation.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      message: "Reservation found successfully",
      data,
    });
  },

  update: async (req, res) => {
    await Reservation.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      message: "Reservation updated successfully",
      data: await Reservation.findOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
    const data = await Reservation.deleteOne({ _id: req.params.id });

    const { deletedCount } = data;

    res.status(deletedCount ? 201 : 404).send({
      error: !deletedCount,
      message: deletedCount
        ? "Reservation deleted successfully"
        : "Reservation not found",
    });
  },
};
