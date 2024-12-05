import express from "express";
import EnvConfig from "./src/config/EnvConfig";
import AuthRoutes from "./src/app/routes/auth.routes";
import SongsRoutes from "./src/app/routes/songs.routes";
import dbConnect from "./src/db/db.config";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

const PORT = EnvConfig.PORT || 3001;
app.get("/", (req, res) => {
  res.send("Welcome to BeatsOn API!");
});

dbConnect();

app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/songs", SongsRoutes);
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
