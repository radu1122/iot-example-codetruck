const express = require("express");
const router = express.Router();
const Humidity = require("../models/humidity");
const Temperature = require("../models/temperature");
const Pressure = require("../models/pressure");

// route POST /api/data/

router.post("/", async function(req, res) {
  const { temperature, humidity, pressure } = req.body;

  try {
    const resp = await Promise.all([
      Temperature.create({ value: temperature }),
      Humidity.create({ value: humidity }),
      Pressure.create({ value: pressure })
    ]);
    res.status(200).json({ succcess: true });
  } catch (err) {
    res.status(500).json({ succcess: false });
  }
});

module.exports = router;
