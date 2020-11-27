const express = require("express");
const userModel = require.main.require("./models/userModel");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("car");
});

router.post("/", (req, res) => {
  var car = {
    car_name: req.body.car_name,
    price: req.body.price,
    description: req.body.description
  };

  userModel.carInsert(car, function (status) {
    if (status) {
      //   res.redirect("/home/userlist");
      res.send("ok");
    } else {
      //   res.redirect("user/create");
      res.send("no");
    }
  });
});


module.exports = router;
