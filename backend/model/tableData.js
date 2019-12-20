const mongoose = require("mongoose");

const tableDataSchema = mongoose.Schema({
  name: String,
  description: String
});

module.exports = mongoose.model("TableData", tableDataSchema);

