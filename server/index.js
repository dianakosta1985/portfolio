const express = require("express");
//const sequelize = require("./db/database");
//const PageData = require("./Models/Page");
const cors = require("cors");
require("dotenv").config();
const client = require("./db/database");

// Create a PostgreSQL client instance

// sequelize.sync().then(() => {
//   console.log("db is ready");
// });

const app = express();

require("dotenv").config();

app.use(express.json());

// // Enable CORS for specific origin
app.use(
  cors({
    origin: "http://localhost:5000", // Allow requests from Next.js app
    method: ["POST", "GET"],
    credentials: true,
  })
);

app.get("/", async (req, res) => {
  res.send("api is running");
});

app.get("/pages", async (req, res) => {
  try {
    await client.connect();
    const result = await client.query("SELECT * FROM pages");
    res.send(result.rows);
  } catch (error) {
    console.error("Error fetching page data:", error);
    res
      .status(500)
      .send({ error: "An error occurred while fetching the page data." });
  } finally {
    await client.end();
  }
});

app.get("/pages/:pageId", async (req, res) => {
  try {
    await client.connect();
    const { pageId } = req.params;
    const pageData = await client.query("SELECT * FROM pages WHERE id = $1", [
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
  } finally {
    await client.end();
  }
});

app.post("/pages", async (req, res) => {
  try {
    await client.connect();
    const { id, title, subTitle, description } = req.body;
    await client.query(
      "INSERT INTO pages (id, title, subTitle, description) VALUES ($1, $2, $3, $4)",
      [id, title, subTitle, description]
    );
    res.send("pages are created");
  } catch (error) {
    console.error("Error fetching page data:", error);
    res
      .status(500)
      .send({ error: "An error occurred while fetching the page data." });
  } finally {
    await client.end();
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listning at port 5000`);
});
