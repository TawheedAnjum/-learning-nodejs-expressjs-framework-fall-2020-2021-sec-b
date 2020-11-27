const express = require("express");
const userModel = require.main.require("./models/userModel");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("register");
});

router.post("/", (req, res) => {
  var user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    userType: req.body.userType,
  };

  userModel.insert(user, function (status) {
    if (status) {
      res.redirect("/login");
    } else {
    //   res.redirect("user/create");
    res.send("no");
    }
  });

});









module.exports = router;

