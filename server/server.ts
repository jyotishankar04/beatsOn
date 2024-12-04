import express from "express";
import EnvConfig from "./config/EnvConfig";
import AuthRoutes from "./src/routes/auth.routes";

const app = express();

const PORT = EnvConfig.PORT || 3001;
app.get("/", (req, res) => {
  res.send("Welcome to BeatsOn API!");
});

app.use("/api/v1/auth", AuthRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
