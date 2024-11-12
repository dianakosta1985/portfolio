const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { createDbClient, closeDbClient } = require("./db/database");
const app = express();

require("dotenv").config();

app.use(express.json());

app.use(
  cors({
    origin: "portfolio-roan-two-48.vercel.app", // Allow requests from Next.js app
    method: ["POST", "GET"],
    credentials: true,
  })
);

app.get("/", async (req, res) => {
  res.send("api is running");
});

app.get("/pages", async (req, res) => {
  try {
    const dbClient = await createDbClient();
    const result = await dbClient.query("SELECT * FROM pages");
    res.send(result.rows);
  } catch (error) {
    console.error("Error fetching page data:", error);
    res
      .status(500)
      .send({ error: "An error occurred while fetching the page data." });
  }
});

app.get("/pages/:pageId", async (req, res) => {
  try {
    const dbClient = await createDbClient();
    const { pageId } = req.params;
    const pageData = await dbClient.query("SELECT * FROM pages WHERE id = $1", [
      pageId,
    ]);

    if (pageData) {
      res.send(pageData.rows);
    } else {
      res.status(404).send({ error: "Page not found" });
    }
  } catch (error) {
    console.error("Error fetching page data:", error);
    res
      .status(500)
      .send({ error: "An error occurred while fetching the page data." });
  }
});

app.post("/pages", async (req, res) => {
  try {
    const dbClient = await createDbClient();
    const { id, title, subTitle, description } = req.body;
    await dbClient.query(
      "INSERT INTO pages (id, title, subTitle, description) VALUES ($1, $2, $3, $4)",
      [id, title, subTitle, description]
    );
    res.send("pages are created");
  } catch (error) {
    console.error("Error fetching page data:", error);
    res
      .status(500)
      .send({ error: "An error occurred while fetching the page data." });
  }
});

// Close database connection gracefully when shutting down
process.on("SIGINT", async () => {
  console.log("Shutting down server...");
  await closeDbClient();
  process.exit();
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listning at port 5000`);
});
