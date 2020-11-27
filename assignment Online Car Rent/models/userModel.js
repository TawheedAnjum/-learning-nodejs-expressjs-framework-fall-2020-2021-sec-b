const db = require('./db');

module.exports = {
  validate: function (user, callback) {
    var sql =
      "select * from user where email='" +
      user.email +
      "' and password='" +
      user.password +
      "'";

    db.getResults(sql, function (results) {
      if (results.length > 0) {
        callback(true);
      } else {
        callback(false);
      }
    });
  },

  // user..........start

  insert: function (user, callback) {
    var sql =
      "INSERT INTO user (username, email, password, userType) VALUES ('" +
      user.username +
      "', '" +
      user.email +
      "', '" +
      user.password +
      "', '" +
      user.userType +
      "')";

    db.execute(sql, function (status) {
      callback(status);
    });
  },

  getByUser: function (id, callback) {
    var sql = "SELECT * FROM user WHERE email='" + id + "'";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },

  getByUserID: function (id, callback) {
    var sql = "SELECT * FROM user WHERE userID='" + id + "'";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },

  getAllUser: function (callback) {
    var sql = "select * from user";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },

  userUpdate: function (user, callback) {
    var sql =
      "UPDATE user SET username='" +
      user.username +
      "', email='" +
      user.email +
      "', password='" +
      user.password +
      "', userType='" +
      user.userType +
      "' WHERE userID='" +
      +user.id +
      "'";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },

  deleteUser: function (id, callback) {
    var sql = "DELETE FROM user WHERE userID=" + id;

    // console.log(sql)
    db.getResults(sql, function (results) {
      callback(results);
    });
  },

  // user-----end

  // car---start
  carInsert: function (user, callback) {
    var sql =
      "INSERT INTO car (car_name, price, description) VALUES ('" +
      user.car_name +
      "', '" +
      user.price +
      "', '" +
      user.description +
      "')";

    db.execute(sql, function (status) {
      callback(status);
    });
  },

  // car____end
};