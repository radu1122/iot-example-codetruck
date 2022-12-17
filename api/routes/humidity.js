/*!
* THIS CODE IS FOR NON-COMMERCIAL USE ONLY
=========================================================
* Copyright Codetruck Software (https://codetruck.io)
* Coded by Codetruck Software
=========================================================
* The above copyright informs you that all code is under
  copyright and all the intelectual property rights are owned by Codetruck Software.
*/

const express = require("express");
const router = express.Router();
const Humidity = require("../models/humidity");
const { reqAuth } = require("../config/safeRoutes");

// route /api/humidity/

router.get("/", async function(req, res) {
  const elements = await Humidity.find({}).exec();
  return res.json({ success: true, elements: elements });
});

router.get("/:_id", reqAuth, async function(req, res) {
  const elements = await Humidity.find({ _id: req.params._id }).exec();
  return res.json({ success: true, elements: elements });
});

router.post("/", reqAuth, async function(req, res) {
  const { value, addedDate } = req.body;
  const query = {
    value: value,
    addedDate: addedDate
  };

  const cb = await Humidity.create(query);

  return res.json({ success: true, elemId: cb._id });
});

router.put("/", reqAuth, async function(req, res) {
  const { id, value, addedDate } = req.body;
  if (!id) {
    return res.json({ success: false, msg: "Required fields are empty" });
  }
  const element = await Humidity.find({ _id: id }).exec();
  if (element.length != 1) {
    return res.json({ success: false, msg: "Element does not exists" });
  }
  const dataToSet = {};

  if (value != null) {
    dataToSet.value = value;
  }

  if (addedDate != null) {
    dataToSet.addedDate = addedDate;
  }

  const newvalues = { $set: dataToSet };
  const item = await Humidity.updateOne({ _id: id }, newvalues);
  return res.json({ success: true });
});

router.delete("/", reqAuth, async function(req, res) {
  const { id } = req.body;

  if (!id) {
    return res.json({ success: false, msg: "Required fields are empty" });
  }

  const item = await Humidity.deleteMany({ _id: id });
  return res.json({ success: true });
});

router.get("/pagination", async function(req, res) {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const elements = await Humidity.find({})
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .exec();
  const count = await Humidity.countDocuments({});
  return res.json({
    success: true,
    elements: elements,
    pageSize,
    page,
    elementsCount: count
  });
});

module.exports = router;
