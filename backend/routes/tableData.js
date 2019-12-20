const express = require("express");
const TableData = require("../model/tableData");

const router = express.Router();

router.post("", (req, res, next) => {
  const tableData = new TableData({
    name: req.body.name,
    description: req.body.description
  });
  console.log(tableData)
  tableData.save().then(result => {
    res.status(201).json({
      message: "tableData added successfully",
      tableDataId: result._id
    });
  });
});

router.put(":id", (req, res, next) => {
  const tableData = new TableData({
    _id: req.body.id,
    name: req.body.name,
    description: req.body.description
  });
  TableData.updateOne({ _id: req.params.id }, tableData).then(result => {
    res.status(200).json({ message: "updated!" });
  });
});

router.get(":id", (req, res, next) => {
  TableData.findById(req.params.id).then(tableData => {
    if (tableData) {
      res.status(200).json(tableData);
    } else {
      res.status(404).json({ message: "tableData not found!" });
    }
  });
});

router.get("", (req, res, next) => {
  TableData.find().then(doc => {
    res.status(200).json({
      message: "tableDatas fetched successfully!",
      tableDatas: doc
    });
  });
});

router.delete(":id", (req, res, next) => {
  TableData.deleteOne({ _id: req.params.id }).then(result => {
    res.status(200).json({ message: "deleted!" });
  });
});

module.exports = router;
