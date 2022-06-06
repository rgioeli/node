import express from "express";
import cors from "cors";
import { readOrderFile } from "./readOrderFile.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/customers", (req, res) => {
  console.log(req.body);
  return res.json(req.body);
});

app.get("/api/test", (req, res) => {
  const data = readOrderFile("./info.txt");
  return res.send(data.map((x) => x.price));
});

app.listen(process.env.port || 8000, () =>
  console.log("Let's challenge ourselves!")
);
