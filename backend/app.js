const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const tableDataRoutes = require("./routes/tableData");

const app = express();

mongoose
  .connect("mongodb://localhost/testDb")
  .then(() => {
    console.log("connected to db!");
  })
  .catch(() => {
    console.log("connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/table/details",tableDataRoutes);

module.exports = app;
