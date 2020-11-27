const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

const register = require("./controller/register");
const login = require("./controller/login");
const deshboard = require("./controller/deshboard");
const user = require("./controller/user");
const home = require("./controller/home");
const car = require("./controller/car");



//config
app.set('view engine', 'ejs');

//middleware
app.use('/abc', express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use("/register", register);
app.use("/login", login);
app.use("/deshboard", deshboard);
app.use("/user", user);
app.use("/home", home);
app.use("/car", car);


app.get('/', (req, res) => {
    res.send("running");
});


app.listen('3000', (error) => {
  console.log(`Listening`);
});
