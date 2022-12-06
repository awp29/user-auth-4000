"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var auth_1 = require("./modules/auth");
var user_1 = require("./handlers/user");
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use((0, morgan_1["default"])("dev"));
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
app.get("/protected", auth_1.protect, function (req, res) {
    res.send({ message: "Son of a bitch! You're IN!" });
});
app.post("/signup", user_1.signup);
app.post("/signin", user_1.signin);
app.get("/user", auth_1.protect, function (req, res) {
    res.json({ message: "YAYYYYYY" });
});
app.use(function (err, req, res, next) {
    switch (err.type) {
        case "auth":
            res.status(401).json({ message: "unauhtorized" });
            return;
        case "input":
            res.status(400).json({ message: "invalid input" });
            return;
        default:
            res.status(500).json({ message: "oops, server issue" });
            return;
    }
});
exports["default"] = app;
//# sourceMappingURL=server.js.map