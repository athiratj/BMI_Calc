//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {

    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;

    res.send("Result is " + result);
});

app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", function (req, res) {
    var w = parseFloat(req.body.weight);
    var h = parseFloat(req.body.height);
    var bmi = (w / (h * h));

    res.send("Your BMI is " + bmi);
});



app.listen(3000, function () {
    console.log("Server for calculator started in port 3000");
});