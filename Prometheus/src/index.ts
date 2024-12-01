import client from "prom-client";
import express from "express";
import { requestCount } from "./monitoring/requestConter";

const app = express();

app.use(express.json());
app.use(requestCount);

app.get("/user", (req, res) => {
  res.send({
    name: "Jenil Desai",
    age: 25,
  });
});

app.post("/user", (req, res) => {
  const user = req.body;
  res.send({
    ...user,
    id: 1,
  });
});

app.get("/metrics", async (req, res) => {
  const metrics = await client.register.metrics();
  res.set("Content-Type", client.register.contentType);
  res.end(metrics);
});

app.listen(3000);
