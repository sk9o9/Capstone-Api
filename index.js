import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

const API_URL = "https://api.potterdb.com/v1/movies";

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL);
    res.render("index.ejs", { movies: result.data.data, error: null });
  } catch (err) {
    res.render("index.ejs", {
      movies: null,
      error: "Failed to fetch movies",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
