import express from "express";
import cors from "cors";
import { readOrderFile } from "./readOrderFile.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the world's greatest server, ever.");
});

app.get("/api/create-token", (req, res) => {
  const createToken = jwt.sign({ user: "rgioeli" }, process.env.JWT_SECRET);
  res.status(200).json({ token: createToken });
});

app.get("/api/get-token", (req, res) => {
  const auth = req.headers.authorization;
  const decodedToken = jwt.verify(auth, process.env.JWT_SECRET);
  return res.json({ user: decodedToken });
});

app.post("/api/customers", (req, res) => {
  return res.json(req.headers.authorization);
});

app.get("/api/test", (req, res) => {
  const data = readOrderFile("./info.txt");
  return res.send(data.map((x) => x.price));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("ok"));
