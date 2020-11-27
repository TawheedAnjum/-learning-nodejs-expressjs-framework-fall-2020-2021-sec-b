const express = require("express");
const userModel = require.main.require("./models/userModel");
const router = express.Router();

router.get("/", (req, res) => {

  userModel.getAllCar(function (results) {
    var user = req.cookies["user"];
    
    res.render("home", { user: user, car: results });
  });
});

router.get("/edit/:id", (req, res) => {
  var id = req.params.id;

  userModel.getByUserID(id, function (results) {
    res.render("edit_member", { user: results });
  });
  // res.send(id);
});

router.post("/edit/:id", (req, res) => {

  var user = {
    id: req.params.id,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    userType: req.body.userType
  };

  userModel.userUpdate(user, function (results) {
    res.redirect("/home");
  });
  // res.send(id);
});


module.exports = router;
