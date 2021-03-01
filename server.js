const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', function (req, res) {
    var num = Number(req.body.num);
    var result = Math.pow(num, 2);
    res.send("The Squared Result is: " + result);
});

app.listen(3000, function () {
    console.log("Server started on Port 3000");
});