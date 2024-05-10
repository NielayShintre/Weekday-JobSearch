// server.js
import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
// app.use(cors());

app.use(
  cors({
    origin: "*",
  })
);

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

app.get("/api/jobs", async (req, res) => {
  try {
    const dataUrl = "https://nielayshintre.github.io/API/jobs.json";
    const data = await fetchData(dataUrl);

    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;
    const slicedData = data.slice(offset, offset + limit);

    res.json(slicedData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
