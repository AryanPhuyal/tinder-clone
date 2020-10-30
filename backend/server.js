import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Cards from "./Model/dbCards.js";
import cors from "cors";
import path from "path";
// app config
const app = express();
dotenv.config();
const PORT = process.env.PORT;

// app middleware
app.use(express.json());
app.use(cors());

// Db config
const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => {
    // listeners
    app.listen(PORT, () => console.log(`Listening in the port ${PORT}`));
  })
  .catch((err) => console.log(err));

// api endpointsW

app.post("/tinder/cards", (req, res) => {
  const dbCards = req.body;
  Cards.create(dbCards, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

const __dirname = path.resolve();

if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}
