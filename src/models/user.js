"use strict";

//! User Model:
const { mongoose } = require("../configs/dbConnection");

const passwordEncrypt = require("../helpers/passwordEncrypt");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      trim: true,
      required: true,
      // set: (password) => {
      //   if (
      //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)
      //   ) {
      //     return passwordEncrypt(password);
      //   } else {
      //     throw new Error("Password type is not correct.");
      //   }
      // },
      set: (password) =>{
        return  passwordEncrypt(password);
      }
    },

    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      validate: [
        (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
        "Email type is not correct.",
      ],
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

// Model:
const User = mongoose.model("User", UserSchema);

// Export:
module.exports = User;
