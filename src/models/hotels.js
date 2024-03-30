"use strict";

const { mongoose } = require("../configs/dbConnection");

const HotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      index: true,
    },
    city: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    image: [
      {
        type: String,
        trim: true,
        required: true,
      },
    ],
  },
  {
    collection: "hotels",
    timestamps: true,
  }
);

const Hotels = mongoose.model("Hotels", HotelSchema);
module.exports = Hotels;
