import express from "express";
import morgan from "morgan";
import cors from "cors";
import { protect } from "./modules/auth";
import { createNewUser, signin } from "./handlers/user";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/user", createNewUser);
app.post("/signin", signin);

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
