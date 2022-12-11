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
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const compression = require("compression");
const http = require("http");
const cors = require("cors");

require("dotenv").config();

// Instantiate express
const app = express();
app.use(compression());

// Connect to MongoDB
const mongoURI = require("./config/keys").mongoURI;
mongoose.set("strictQuery", false);
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use(cors());

// Express body parser
app.use("/public", express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Initialize routes middleware
app.use("/api/users", require("./routes/users"));
app.use("/api/pressure", require("./routes/pressure"));
app.use("/api/temperature", require("./routes/temperature"));
app.use("/api/humidity", require("./routes/humidity"));
app.use("/api/data", require("./routes/data"));

const PORT = process.env.PORT;
http.createServer(app).listen(PORT, function() {
  console.log(
    "App listening on port " + PORT + "! Go to http://localhost:" + PORT + "/"
  );
});
