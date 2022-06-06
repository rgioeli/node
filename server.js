import express from "express";
import cors from "cors";
import { readOrderFile } from "./readOrderFile.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the world's greatest server, ever.");
});

app.post("/api/customers", (req, res) => {
  console.log(req.body);
  return res.json(req.body);
});

app.get("/api/test", (req, res) => {
  const data = readOrderFile("./info.txt");
  return res.send(data.map((x) => x.price));
});

const PORT = process.env.port || 3000;

app.listen(PORT, () => console.log("Let's challenge ourselves!"));
