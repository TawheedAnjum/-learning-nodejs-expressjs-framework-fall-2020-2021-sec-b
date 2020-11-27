const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();




//config
app.set('view engine', 'ejs');

//middleware
app.use('/abc', express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());




app.get('/', (req, res) => {
    res.send("running");
});


app.listen('3000', (error) => {
  console.log(`Listening`);
});
