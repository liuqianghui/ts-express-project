"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 1970;
app.get("/", function (req, res) {
    res.send("hello world");
});
app.listen(port, function () {
    console.log("Application is listening on port " + port);
});
