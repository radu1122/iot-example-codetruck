/*!
* THIS CODE IS FOR NON-COMMERCIAL USE ONLY
=========================================================
* Copyright Codetruck Software (https://codetruck.io)
* Coded by Codetruck Software
=========================================================
* The above copyright informs you that all code is under
  copyright and all the intelectual property rights are owned by Codetruck Software.
*/

require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

module.exports = {
  mongoURI: MONGO_URI,
  secret: process.env.SECRET
};
