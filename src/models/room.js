"use strict";

//! Room Model:
const { mongoose } = require("../configs/dbConnection");

const RoomSchema = new mongoose.Schema(
  {
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotels",
      required: true,
      unique: true,
      index: true,
    },
    roomNumber: {
      type: Number,
      trim: true,
      required: true,
      unique: true,
      index: true,
    },
    image: [
      {
        type: String,
        trim: true,
        required: true,
      },
    ],

    bedType: {
      type: String,
      trim: true,
      required: true,
      enum: ["single", "double", "king", "queen", "twin", "full"],
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
  },
  { timestamps: true, collection: "rooms" }
);

const Room = mongoose.model("Room", RoomSchema);

module.exports = Room;
