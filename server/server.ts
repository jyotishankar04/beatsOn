import express from "express";
import EnvConfig from "./config/EnvConfig";

const app = express();

const PORT = EnvConfig.PORT || 3001;
app.get("/", (req, res) => {
  res.send("Welcome to BeatsOn API!");
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
