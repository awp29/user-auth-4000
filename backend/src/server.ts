import express from "express";
import morgan from "morgan";
import cors from "cors";
import { protect } from "./modules/auth";
import { signup, signin } from "./handlers/user";
import { signinValidator, signupValidator } from "./modules/validation";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/protected", protect, (req, res) => {
  res.send({ message: "Son of a bitch! You're IN!" });
});

app.post("/signup", signupValidator, signup);
app.post("/signin", signinValidator, signin);

app.get("/user", protect, (req, res) => {
  res.json({ message: "YAYYYYYY" });
});

app.use((err, req, res, next) => {
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

export default app;
