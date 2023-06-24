import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("request done");
  res.status(200).json({ message: "hello world" });
});

app.listen(5000, () => {
  console.log("server started");
});
