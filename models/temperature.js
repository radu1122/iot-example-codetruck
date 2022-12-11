/*!
* THIS CODE IS FOR NON-COMMERCIAL USE ONLY
=========================================================
* Copyright Codetruck Software (https://codetruck.io)
* Coded by Codetruck Software
=========================================================
* The above copyright informs you that all code is under
  copyright and all the intelectual property rights are owned by Codetruck Software.
*/

const mongoose = require("mongoose");
const temperatureSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: false
  },
  addedDate: {
    type: Date,
    required: true,
    default: Date.now
  }
});

const temperature = mongoose.model("temperature", temperatureSchema);

module.exports = temperature;
