"use strict";

//! Reservation Model:

const { mongoose } = require("../configs/dbConnection");

const ReservationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },

    arrivalDate: {
      type: Date,
      required: true,
      trim: true,
    },

    departureDate: {
      type: Date,
      required: true,
      trim: true,
    },
    guestNumber: {
      type: Number,
      required: true,
      trim: true,
      autoIncrement: true,
    },
    night: {
      type: Number,
      default: function () {
        let diffTime =
          this.departureDate.getTime() - this.arrivalDate.getTime();
        let diffDays = Math.floor(diffTime / (1000 * 3600 * 24));
        return diffDays;
      },
      transform: function () {
        let diffTime =
          this.departureDate.getTime() - this.arrivalDate.getTime();
        let diffDays = Math.floor(diffTime / (1000 * 3600 * 24));
        return diffDays;
      },
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },

    totalPrice: {
      type: Number,
      default: function () {
        return this.night * this.price;
      },
      transform: function () {
        return this.night * this.price;
      },
    },
  },
  {
    timestamps: true,
    collection: "reservations",
  }
);

const Reservation = mongoose.model("Reservation", ReservationSchema);

module.exports = Reservation;
