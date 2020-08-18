"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
dotenv_1.default.config();
var port = process.env.SERVER_PORT;
var app = express_1.default();
app.get("/", function (req, res) {
    res.send("");
});
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
