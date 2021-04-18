const express = require('express');
const { SchemaTypeOptions } = require('mongoose');
const router = express.Router();
const studentData = require("../models/studentData");


/* GET users listing. */
    router.get("/getData", function (req, res) {
        const name = req.query.name;
        studentData.find({ name },{ _id: 0, __v: 0}, function (err, data) {
          if (err) {
            console.log("error ocurred", err);
            res.send("Error", err)
          } else {
            console.log("data from students collection", data);
            res.send(data);
          }
        });
  });

  //post method
  router.post("/add",function(req,res){
      const studentInfo = new studentData(req.body);
      studentInfo.save(function (err) {
        if (err) {
          console.log("Error occurred", err);
        } else {
          console.log("Data saved successfully");
          res.send({ "result": "success" });
        }
      });
  })

  module.exports = router;