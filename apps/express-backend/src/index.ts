import express from "express";
import cors from "cors";
import { generateReport } from "./controllers/reportController";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});
app.post("/api/v1/generate", generateReport);

app.listen(3000, () => {
  console.log("Listening on port 3002");
});
