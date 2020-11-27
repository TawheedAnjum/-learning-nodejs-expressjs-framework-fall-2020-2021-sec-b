const express = require("express");
const userModel = require.main.require("./models/userModel");
const router = express.Router();

router.get("/", (req, res) => {
    userModel.getAllUser(function (results) {
        res.render("user", { userlist: results });
    });
});

router.get("/edit/:id", (req, res) => {
  var id = req.params.id;
  
    userModel.getByUserID(id, function (results) {
        res.render("user_edit", {user: results})
    });

});

router.post("/edit/:id", (req, res) => {
  var id = req.params.id;

  userModel.userUpdate(id, function (results) {
    res.send(results);
  });
});

router.get("/delete/:id", (req, res) => {
  var id = req.params.id;

  userModel.deleteUser(id, function (results) {
    res.redirect("/user")
  });
});


module.exports = router;
