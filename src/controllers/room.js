"use strict";

//! Room Controller:

const Room = require("../models/room");

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(Room, {}, "hotelId");

    res.status(200).send({
      error: false,
      message: "Rooms listed successfully",
      details: await res.getModelListDetails(Room),
      data,
    });
  },

  create: async (req, res) => {
    const data = await Room.create(req.body);

    res.status(201).send({
      error: false,
      message: "Room created successfully",
      data,
    });
  },

  read: async (req, res) => {
    const data = await Room.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      message: "Room found successfully",
      data,
    });
  },

  update: async (req, res) => {
    await Room.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      message: "Room updated successfully",
      data: await Room.findOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
    const data = await Room.deleteOne({ _id: req.params.id });

    const { deletedCount } = data;

    res.status(deletedCount ? 201 : 404).send({
      error: !deletedCount,
      message: deletedCount ? "Room deleted successfully" : "Room not found",
    });
  },

  listHotelRooms: async (req, res) => {
    // const data = await Room.find({ hotelId: req.params.id });
    const data = await res.getModelList(
      Room,
      { hotelId: req.params.id },
      "hotelId"
    );
    res.status(200).send({
      error: false,
      message: "Rooms listed successfully",
      data,
    });
  },
};
