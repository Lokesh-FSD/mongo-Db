const express = require('express');
const router = express.Router();
const quotesModal = require("../models/quoteData");

/* GET users listing. */
router.get("/getAll", function (req, res) {
    quotesModal.find({},{ _id: 0, __v: 0}, function (err, data) {
      if (err) {
        console.log("error ocurred", err);
        res.send("Error", err)
      } else {
        console.log("data from students collection", data);
        res.status(200).send(data);
      }
    });
});

//post method
router.post("/add",function(req,res){
    const quotesInfo = new quotesModal(req.body);
    quotesInfo.save(function (err) {
      if (err) {
        console.log("Error occurred", err);
      } else {
        console.log("Data saved successfully");
        res.status(200).send({ "result": "success" });
      }
    });
})

module.exports = router;