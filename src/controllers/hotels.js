"use strict";

//! Hotel Controller:

const Hotel = require("../models/hotels");

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(Hotel);

    res.status(200).send({
      error: false,
      message: "Hotels listed successfully",
      details: await res.getModelListDetails(Hotel),
      data,
    });
  },

  create: async (req, res) => {
    const data = await Hotel.create(req.body);

    res.status(201).send({
      error: false,
      message: "Hotel created successfully",
      data,
    });
  },

  read: async (req, res) => {
    const data = await Hotel.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      message: "Hotel found successfully",
      data,
    });
  },

  update: async (req, res) => {
    await Hotel.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      message: "Hotel updated successfully",
      data: await Hotel.findOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
    const data = await Hotel.deleteOne({ _id: req.params.id });

    const { deletedCount } = data;

    res.status(deletedCount ? 201 : 404).send({
      error: !deletedCount,
      message: deletedCount ? "Hotel deleted successfully" : "Hotel not found",
    });
  },
};
