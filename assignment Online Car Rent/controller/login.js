const express = require("express");
const userModel = require.main.require("./models/userModel");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", (req, res) => {
  var user = {
    email: req.body.email,
    password: req.body.password,
  };

  userModel.validate(user, function (status) {
    if (status) {
    //   res.cookie("uname", req.body.username);
    //   res.redirect("/home");

    var email = req.body.email;
    userModel.getByUser(email, function (results) {
      var userType = results[0].userType;
      var userID = results[0].userID;
      res.cookie("user", userID);
      
      if(userType=="admin"){
          res.redirect("/deshboard");
      }
      else{
          res.redirect("/home");
      }

    
    });
    
    } else {
      res.redirect("/login");
    }
  });
});

module.exports = router;
