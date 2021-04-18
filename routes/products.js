const express = require('express');
const router = express.Router();
const productsModal = require("../models/productData");


/* GET users listing. */
    router.get("/getAll", function (req, res) {
        productsModal.find({},{ _id: 0, __v: 0}, function (err, data) {
          if (err) {
            console.log("error ocurred", err);
            res.send("Error", err)
          } else {
            console.log("data from students collection", data);
            res.send(data);
          }
        });
  });

// post method
  router.post("/add",function(req,res){
      const prouductInfo = new productsModal(req.body);
      prouductInfo.save(function (err) {
        if (err) {
          console.log("Error occurred", err);
        } else {
          console.log("Data saved successfully");
          res.send({ "result": "success" });
        }
      });
  })

  module.exports = router;